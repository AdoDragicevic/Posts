import { useState } from "react";

function useToggleState(initVal = true) {
  const [val, setVal] = useState(initVal);
  const toggle = () => setVal(!val);
  return [val, toggle];
};

export default useToggleState;