import { useState } from "react";

function useIncrementState(initVal = 0) {
  const [val, setVal] = useState(initVal);
  const increment = () => setVal(val + 1);
  const decrement = () => setVal(val - 1);
  return [val, increment, decrement];
};

export default useIncrementState;