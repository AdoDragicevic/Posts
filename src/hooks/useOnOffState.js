import { useState } from "react";

function useOnOffState(initVal = true) {
  const [val, setVal] = useState(initVal);
  const turnOn = () => setVal(true);
  const turnOff = () => setVal(false);
  return [val, turnOn, turnOff];
};

export default useOnOffState;