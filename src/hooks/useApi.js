import { useEffect, useState, useCallback , createContext, useRef, useMemo, useContext} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const AxiosContext = createContext(null);

export const AxiosInstanceProvider = ({
  config = {},
  requestInterceptors = [],
  responseInterceptors = [],
  children,
}) => {
  const [currentUser, setCurrentUser] = useState(null);

  // a function to set the user
  const setUser = useCallback( user => {
    setCurrentUser(user);
  } , [setCurrentUser]);


  const instanceRef = useRef(axios.create(config));
  useEffect(() => {
    requestInterceptors.forEach((interceptor) => {
      instanceRef.current.interceptors.request.use(
        interceptor
      );
    });
    responseInterceptors.forEach((interceptor) => {
      instanceRef.current.interceptors.response.use(
        interceptor
      );
    });
  }, []);

  const value = useMemo(() => {
    return {
      instance: instanceRef.current,
      setUser,
      currentUser,
    };
  }
  , [currentUser, setUser]);

  return (
    <AxiosContext.Provider value={ value }>
      {children}
    </AxiosContext.Provider>
  );
};


export const useAxios = ({url, method}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const {instance, setCurrentUser, currentUser } = useContext(AxiosContext);

  const _instance = useMemo(() => {
    return instance || axios;
  }, [instance]);

  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };
  // function to make a request
  const makeRequest = useCallback( async (payload) => {
    try {
      const response = await _instance.request({
        signal: controllerRef.current.signal,
        data: payload,
        method,
        url,
      });
      setData(response.data);
    } catch (error) {
      setError(Object.values(error.response.data)[0]);
    } finally {
      setLoaded(true);
    }
  }, [_instance, url, method]);

  // Expect the jwttoken to be like : "Bearer adsfkbgasdif"
   const setAuthToken = useCallback( (jwtToken, refreshToken) => {
    // if the jwttoken and refresh token are present
    if (jwtToken && refreshToken) {
      // Apply authorization token to every request if logged in
      localStorage.setItem("jwtToken", jwtToken);
      localStorage.setItem("refreshToken", refreshToken);
      _instance.defaults.headers.common["Authorization"] = jwtToken;
      // Decode token to get user data
      const decoded = jwt_decode(jwtToken);
      // Set current user
      setCurrentUser(decoded);
      return decoded;
    } else {
      // Delete auth header
      console.log("[!] Couldn't authenticate. Some tokens might be missing.");
      delete _instance.defaults.headers.common["Authorization"];
    }
  }, [_instance, setCurrentUser]);
        

  return { cancel, data, error, loaded, makeRequest, setAuthToken , currentUser};
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
