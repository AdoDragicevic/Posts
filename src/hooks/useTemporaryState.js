import { useState, useEffect } from "react";

function useTemporaryState(initVal = false, duration = 2000) {
  const [val, setVal] = useState(initVal);
  const setTemporaryVal = newVal => {
    if (val === initVal) setVal(newVal);
  };
  const revertBack = () => setTimeout( () => setVal(initVal), duration);
  useEffect( revertBack, [val] );
  return [val, setTemporaryVal];
};

export default useTemporaryState;