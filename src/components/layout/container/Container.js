import classes from "./Container.module.css";


function Container({ children, width }) {
  const css = `${classes.root} ${classes[width]}`;
  return <div className={css}> {children} </div>
};

export default Container;