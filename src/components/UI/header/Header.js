import classes from "./Header.module.css";

function Header({ children, onClick, styles }) {

  return (
    <h1
      className={classes.root} 
      style={{
        ...styles, 
        cursor: `${onClick ? "pointer" : "auto"}`
      }}
      onClick={onClick}
    >
      {children}
    </h1>
  )
};

export default Header;