/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';

type Callback<T extends any[]> = (...args: T) => void;

function useDebounce<T extends any[]>(cb: Callback<T>, delay = 500) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  return (...args: T) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

export default useDebounce;
