import classes from "./Container.module.css";

function Container({ children }) {
  return <div className={classes.root}> {children} </div>
};

export default Container;