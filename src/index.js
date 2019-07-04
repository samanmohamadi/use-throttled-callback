import { useEffect, useRef } from 'react';

export const useThrottledEffect = (callback, limit, deps = []) => {
  const lastRan = useRef(Date.now());

  useEffect(
    () => {
      console.log([limit, ...deps]);
      const handler = setTimeout(function() {
        if (Date.now() - lastRan.current >= limit) {
          callback();
          lastRan.current = Date.now();
        }
      }, limit - (Date.now() - lastRan.current));

      return () => {
        clearTimeout(handler);
      };
    },
    [limit, ...deps],
  );
};

export default useThrottledEffect;