import classes from "./ListItem.module.css";

function ListItem({ img, title, address, author, id, show }) {
  return (
    <li className={classes.root} onClick={ () => show(id) }>
      <h4>{title}</h4>
      <h6>{author}</h6>
      <p>{address}</p>
      <div className={classes.line} />
    </li>
  )
};

export default ListItem;