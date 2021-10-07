import classes from "./BackButton.module.css";

function BackButton({ onClick }) {
  return <div className={classes.root} onClick={onClick}>&#8592;</div>;
};

export default BackButton;

