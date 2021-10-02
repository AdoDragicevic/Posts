import classes from "./Button.module.css";

function Button(props) {
  return (
    <button onClick={props.onClick} className={classes.btn} style={props.styles}>
      {props.children}
    </button>
  ) 
};

export default Button;