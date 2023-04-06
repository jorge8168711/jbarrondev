import { useEffect, useRef, useState } from 'react';

type defaultValue = string | Function;

export default function useLocalStorageState(
  key: string,
  defaultValue: defaultValue = '',
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return '';

    const valueInLocalStorage = window.localStorage.getItem(key);

    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }

    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  // this gives us an objet that I can mutate without triggering rerenders
  const prevKeyRef = useRef(key);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;

    window.localStorage.setItem(key, serialize(value));
  }, [value, key, serialize]);

  return [value, setValue];
}
