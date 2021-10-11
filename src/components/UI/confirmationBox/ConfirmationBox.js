import Header from "../header/Header";
import Button from "../button/Button";

import classes from "./ConfirmationBox.module.css";


function ConfirmationBox({ txt, onConfirm, onCancel }) {
  return (
    <div className={classes.root}>
      <Header styles={{ fontSize: "20px" }}> { txt ? txt : "Are you sure?" } </Header>
      <div className={classes.btns}>
        <Button color="secondary" size="small" onClick={onCancel}> Cancel </Button>
        <Button color="danger" size="small" onClick={onConfirm}> Confirm </Button>
      </div>
    </div>
  )
};

export default ConfirmationBox;