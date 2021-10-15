import classes from "./Header.module.css";

function Header({ children, styles, onClick }) {

  const css = `${classes.root} ${onClick && classes.pointer}`;

  return (
    <h1 className={css} style={{ ...styles }} onClick={onClick}>
      {children}
    </h1>
  )
};

export default Header;