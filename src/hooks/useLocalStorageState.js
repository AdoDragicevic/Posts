import { useState, useEffect } from "react";

function useLocalStorageState(key, initVal) {
  const [val, setVal] = useState( () => {
    const localData = JSON.parse(window.localStorage.getItem(key));
    return localData === null ? initVal : localData;
  });
  useEffect( () => (
    window.localStorage.setItem(key, JSON.stringify(val)), [val]
  ));
  return [val, setVal];
};

export default useLocalStorageState;