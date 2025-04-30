import { useEffect, useState, useCallback } from "react";

export function useSplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [key, setKey] = useState(0);

  const hideSplash = useCallback(() => {
    setShowSplash(false);
  }, []);

  const resetSplash = useCallback(() => {
    setShowSplash(true);
    setKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("lastRefreshTime", Date.now().toString());
    };

    const handleLoad = () => {
      const lastRefreshTime = localStorage.getItem("lastRefreshTime");

      if (lastRefreshTime) {
        const timeDiff = Date.now() - parseInt(lastRefreshTime, 10);

        if (timeDiff < 5000) {
          setShowSplash(true);
          setKey((prev) => prev + 1);
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return {
    isSplashVisible: showSplash,
    splashKey: key,
    hideSplash,
    resetSplash,
  };
}
