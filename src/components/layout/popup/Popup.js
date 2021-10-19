import { createPortal } from "react-dom";
import { useContext } from "react";

import { NotificationContext } from "../../../contexts/notificationContext";

import { IoCloseSharp } from "react-icons/io5";
import { MdDone } from "react-icons/md";

import classes from "./Popup.module.css";


function Popup() {

  const msg = useContext(NotificationContext);
  
  if (!msg) return null;

  const Icon = msg.isSuccess ? MdDone : IoCloseSharp;
  const iconCSS = `${classes.icon} ${msg.isSuccess ? classes.green : classes.red}`;
  
  return (
    <div className={classes.root}>
      <div className={classes.txt}> {msg.txt} </div> 
      <div className={iconCSS}> <Icon /> </div>
    </div>
  )
};


const portalRoot = document.querySelector("#overlay-root");
const PopupPortal = props => createPortal(<Popup {...props} />, portalRoot);
export default PopupPortal;