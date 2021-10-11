import { useState } from "react";

function useResetState(initVal) {
  const [val, setVal] = useState(initVal);
  const reset = () => setVal(initVal);
  return [val, setVal, reset];
};

export default useResetState;