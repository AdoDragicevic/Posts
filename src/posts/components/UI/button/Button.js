import classes from "./Button.module.css";

function Button(props) {
  return (
    <button 
      className={classes.btn} 
      type={props.type}
      onClick={props.onClick} 
      style={props.styles}
    >
      {props.children}
    </button>
  ) 
};

export default Button;