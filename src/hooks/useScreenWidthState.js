import { useState } from "react";

function useScreenWidthState(width, valBelow, valAbove) {
  const [val, setVal] = useState(window.innerWidth < width ? valBelow : valAbove);
  window.addEventListener("resize", () => {
    if (window.innerWidth > width && val !== valAbove) setVal(valAbove);
    else if (window.innerWidth < width && val !== valBelow) setVal(valBelow);
  });
  return [val];
};

export default useScreenWidthState;