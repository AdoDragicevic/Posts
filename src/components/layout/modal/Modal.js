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

export default Modal;