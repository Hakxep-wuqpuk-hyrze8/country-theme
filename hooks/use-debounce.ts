/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

/**
 * Custom Hook to debounce a value over a specified delay time.
 * @param value - The callback function.
 * @param delay - The debounce delay in milliseconds.
 * @returns - The debounced value.
 */
function useDebounce(value: any, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 設置定時器在 delay 後更新 debouncedValue
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 清除前一個定時器避免過多更新
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // 依賴 value 或 delay 改變而重新設置

  return debouncedValue;
}

export default useDebounce;
