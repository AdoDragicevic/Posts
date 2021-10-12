import { IoCloseSharp } from "react-icons/io5";
import { MdDone } from "react-icons/md";

import classes from "./Popup.module.css";

function Popup({ txt, isSuccess }) {
  
  const Icon = isSuccess ? MdDone : IoCloseSharp;
  const iconCSS = `${classes.icon} ${isSuccess ? classes.green : classes.red}`;
  
  return (
    <div className={classes.root}>
      <div className={classes.txt}> {txt} </div> 
      <div className={iconCSS}> <Icon /> </div>
    </div>
  )
};

export default Popup;