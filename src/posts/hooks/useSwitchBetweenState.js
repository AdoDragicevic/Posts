import { useState } from "react";

const useSwitchBetweenState = (val1, val2) => {
  const [val, setVal] = useState(val1);
  const switchBetween = () => setVal(val === val1 ? val2 : val1);
  return [val, switchBetween];
};

export default useSwitchBetweenState;