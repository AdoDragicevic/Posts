import classes from "./ProgressBar.module.css";

const romanNums = ["I", "II", "III", "IV", "V"];

function ProgressBar({ nOfsteps, currStep }) {
  
  const steps = [];
  const nums = nOfsteps > 5 ? null : romanNums;  
  
  for (let i = 0; i < nOfsteps; i++) {
    const css = `${classes.step} ${currStep === i && classes.active}`;
    const txt = `${nums ? nums[i] : i+1}`;
    steps.push( 
      <li className={css} key={i}> {txt} </li> 
    );
  };
  
  return <ul className={classes.root}> {steps} </ul>;
};

export default ProgressBar;