import Button from "../button/Button";
import Header from "../header/Header";

import classes from "./Modal.module.css";

function Modal({ onYes, onNo, msg }) {
  return (
    <div className={classes.root} onClick={onNo}>
      <div className={classes.container}>
        <Header styles={{ fontSize: "20px" }}> {msg ? msg : "Are you sure?"} </Header>
        <div className={classes.btns}>
          <Button color="secondary" size="small" onClick={onNo}> Cancel </Button>
          <Button color="danger" size="small" onClick={onYes}> Confirm </Button>
        </div>
      </div>
    </div>
  )
};

export default Modal;