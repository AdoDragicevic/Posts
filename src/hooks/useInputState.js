import { useState } from "react";

function useInputState(initVal = "") {
  const [val, setVal] = useState(initVal);
  const update = e => setVal(e.target.value);
  const reset = () => setVal(initVal);
  return [val, update, reset];
};

export default useInputState;