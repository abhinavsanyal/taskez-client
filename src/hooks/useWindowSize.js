import React,{ useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize);
  const [isMobile, setIsMobile] = useState(false);
  const isClient = typeof window === "object";

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  };

  const getIsMobile = React.useCallback(() => {
    const screen_size = windowSize.width;
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    if (screen_size < 768 && mobile) {
      return true;
    }
    return false;
  },[windowSize]);
  

  useEffect(() => {
    setIsMobile(getIsMobile());
  }, [windowSize]);

  useEffect(() => {
    if (!isClient) {
      return;
    }
    
    const handleResize = () => {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return { windowSize, isMobile };
};
