"use client";

import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, ms: number) => {
  const savedCallback = useRef<() => void>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    const interval = setInterval(tick, ms);
    return () => clearInterval(interval);
  }, [ms]);
};

export default useInterval;
