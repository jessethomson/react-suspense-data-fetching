import { useState } from "react";

function useLocalStorage(key, initialValue) {
  if (!key) {
    throw new Error(
      `The provided key of '${key}' is not valid. The key must be a string that is not empty.`
    );
  }

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = typeof window !== undefined ? localStorage.getItem(key) : "";
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      throw new Error(error);
    }
  });

  if (typeof window === "undefined") {
    return [initialValue, () => {}];
  }

  const setValue = (newValue) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(storedValue) : newValue;

      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      throw new Error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
