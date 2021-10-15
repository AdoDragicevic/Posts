import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

function Modal({ children, closeModal }) {
  return (
    <div className={classes.root} onClick={closeModal}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  )
};


const portalRoot = document.querySelector("#overlay-root");
const ModalPortal = props => createPortal(<Modal {...props} />, portalRoot);
export default ModalPortal;