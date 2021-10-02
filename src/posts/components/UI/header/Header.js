import classes from "./Header.module.css";

function Header(props) {
  console.log(props.styles);
  return (
    <h1 className={classes.root} style={props.styles}>
      {props.children}
    </h1>
  )
};

export default Header;