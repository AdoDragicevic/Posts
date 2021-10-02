import classes from "./Card.module.css";

function Card(props) {
  return <div className={classes.root}> {props.children} </div>
};

export default Card;