import classes from "./ListItem.module.css";

function ListItem({ img, title, address, id, show }) {
  return (
    <li className={classes.root} onClick={ () => show(id) }>
      <img src={img} />
      <h4>{title}</h4>
      <p>{address}</p>
    </li>
  )
};

export default ListItem;