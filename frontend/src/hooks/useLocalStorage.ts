"use client";

import { useState, useEffect } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = localStorage.getItem(key);
      return item ? parseStoredValue(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const item = localStorage.getItem(key);
      if (item) {
        setValue(parseStoredValue(item));
      }
    } catch (error) {
      console.error(error);
    }
  }, [key]);

  const setValueAndStore = (newValue: T) => {
    try {
      setValue(newValue);
      if (typeof window !== "undefined") {
        const valueToStore = serializeValue(newValue);
        localStorage.setItem(key, valueToStore);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [value, setValueAndStore];
}

const parseStoredValue = <T>(item: string): T => {
  try {
    return JSON.parse(item) as T;
  } catch {
    return item as unknown as T;
  }
};

const serializeValue = <T>(value: T): string => {
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return value.toString();
  }

  try {
    return JSON.stringify(value);
  } catch {
    return "";
  }
};

export default useLocalStorage;
