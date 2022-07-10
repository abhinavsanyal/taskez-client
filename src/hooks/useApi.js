import {
  useEffect,
  useState,
  useCallback,
  createContext,
  useRef,
  useMemo,
  useContext,
} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const AxiosContext = createContext(null);

export const AxiosInstanceProvider = ({
  config = {},
  requestInterceptors = [],
  responseInterceptors = [],
  children,
}) => {
  const [currentUser, setCurrentUser] = useState();
  // const [rememberMe, setRememberMe] = useState(false);

  // a function to set the user
  const setUser = (user) => {
    setCurrentUser(user);
  };
  // a function to set the remember me flag
  const setRemember = (doRemember) => {
    // setRememberMe(doRemember);
    localStorage.setItem("remember", doRemember);
  };

  const instanceRef = useRef(axios.create(config));

  // write a function to retireve the token from local storage and extract the user from the token
  const getUserFromToken = useCallback(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      instanceRef.current.defaults.headers.common["Authorization"] = token;
      const decoded = jwt_decode(token);

      setCurrentUser(decoded);
      return decoded;
    }
    return null;
  }, [setCurrentUser, currentUser]);

  useEffect(() => {
    getUserFromToken();
    // loop through the request interceptors and add them to the axios instance
    requestInterceptors.forEach((interceptor) => {
      instanceRef.current.interceptors.request.use(interceptor);
    });

    // Add Response interceptor for handling the token refresh
    instanceRef.current.interceptors.response.use(
      (response) => {
        return response;
      },
      async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 403 && !originalRequest._retry) {
          // Token expired
          originalRequest._retry = true;
          const rememberMe = localStorage.getItem("remember");
          // if remember me is checked, use the refresh token to get new token
          if (rememberMe) {
            const _refreshToken = localStorage.getItem("refreshToken");
            const { data } = await instanceRef.current.post("/auth/refresh", {
              refresh_token: _refreshToken,
            });
            const { token, refresh_token } = data;
            localStorage.setItem("jwtToken", token);
            localStorage.setItem("refreshToken", refresh_token);
            instanceRef.current.defaults.headers.common["Authorization"] =
              token;
          } else {
            // if remember me is not checked, logout the user and remove tokens from local storage and header
            localStorage.removeItem("jwtToken");
            localStorage.removeItem("refreshToken");
            delete instanceRef.current.defaults.headers.common["Authorization"];
            setUser(null);
            //TODO: find a more React way to redirect to login page
            window.location.reload();
          }
        }
        return Promise.reject(error);
      }
    );
    // loop through all the response interceptors and add them to the axios instance
    responseInterceptors.forEach((interceptor) => {
      instanceRef.current.interceptors.response.use(interceptor);
    });
  }, []);

  const value = useMemo(() => {
    return {
      instance: instanceRef.current,
      setUser,
      currentUser,
      getUserFromToken,
      setRemember,
    };
  }, [currentUser, getUserFromToken, setUser]);

  return (
    <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
  );
};

export const useAxios = ({ url = "", method = "" }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const { instance, setUser, setRemember } = useContext(AxiosContext);

  const _instance = useMemo(() => {
    return instance || axios;
  }, [instance]);

  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };
  // function to make a request
  const makeRequest = useCallback(
    async (payload) => {
      try {
        setLoaded(true);
        const response = await _instance.request({
          signal: controllerRef.current.signal,
          data: payload,
          method,
          url,
        });
        setData(response.data);
        return response.data;
      } catch (error) {
        setError(Object.values(error.response.data)[0]);
      } finally {
        setLoaded(false);
      }
    },
    [_instance, url, method]
  );

  // Log user out
  const logoutUser = () => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("refreshToken");
    // Remove auth header for future requests
    setAuthToken(false, false);
    // Set current user to null which will set isAuthenticated to false
    setUser(null);
  };

  // Expect the jwttoken to be like : "Bearer adsfkbgasdif"
  const setAuthToken = useCallback(
    (jwtToken, refreshToken) => {
      // if the jwttoken and refresh token are present
      if (jwtToken && refreshToken) {
        // Apply authorization token to every request if logged in
        localStorage.setItem("jwtToken", jwtToken);
        localStorage.setItem("refreshToken", refreshToken);
        _instance.defaults.headers.common["Authorization"] = jwtToken;
        // Decode token to get user data
        const decoded = jwt_decode(jwtToken);
        // Set current user
        setUser(decoded);
        return decoded;
      } else {
        // Delete auth header
        console.log("[!] Couldn't authenticate. Some tokens might be missing.");
        delete _instance.defaults.headers.common["Authorization"];
      }
    },
    [_instance, setUser]
  );

  return [
    data,
    makeRequest,
    loaded,
    error,
    { setAuthToken, logoutUser, setRemember, cancel },
  ];
};

// A dumb axios fallback to fetch . just in case [ if we decide to simplify things in future. ]
export const useFetch = (url, options, callback) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [data, loading, error, fetchData];
};
