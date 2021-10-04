import classes from "./Header.module.css";

function Header(props) {
  return (
    <h1 
      className={classes.root} 
      style={{
        ...props.styles, 
        cursor: `${props.onClick ? "pointer" : "auto"}`
      }}
      onClick={props.onClick}
    >
      {props.children}
    </h1>
  )
};

export default Header;