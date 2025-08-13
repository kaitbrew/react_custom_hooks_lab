import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Check localStorage for an existing value, else use initialValue
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? saved : initialValue;
  });

  // Sync localStorage whenever value or key changes
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
