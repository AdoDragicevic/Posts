import classes from "./Container.module.css";

function Container(props) {
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  )
};

export default Container;