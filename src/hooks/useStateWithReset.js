import { useState } from "react";

function useStateWithReset(initVal = null) {
  const [val, setVal] = useState(initVal);
  const resetVal = () => setVal(initVal);
  return [val, setVal, resetVal];
};

export default useStateWithReset;