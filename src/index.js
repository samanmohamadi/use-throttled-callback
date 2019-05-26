import { useEffect, useRef } from 'react';

export const useThrottledEffect = (callback, limit, deps = []) => {
  // const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(
    () => {
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
