import { useReducer, useEffect } from "react";

function useReducerWithLocalStorage(reducer, defaultState, key) {
  const [state, dispatch] = useReducer(reducer, defaultState, () => (
    JSON.parse(window.localStorage.getItem(key)) || defaultState
  ));
  useEffect( () => window.localStorage.setItem(key, JSON.stringify(state)), [state, key] );
  return [state, dispatch];
};

export default useReducerWithLocalStorage;