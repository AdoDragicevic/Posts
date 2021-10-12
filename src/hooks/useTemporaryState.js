import { useState } from "react";


function useTemporaryState(initVal = false, duration = 2000) {
  const [val, setVal] = useState(initVal);
  const setTemporaryVal = newVal => {
    if (val === initVal) {
      setVal(newVal);
      setTimeout( () => setVal(initVal), duration );
    }
  };
  return [val, setTemporaryVal];
};

export default useTemporaryState;