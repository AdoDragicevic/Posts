import classes from "./ListItem.module.css";

function ListItem({ img, name, address, id, show }) {
  return (
    <li onClick={ () => show(id) }>
      <img src={img} />
      <h4>{name}</h4>
      <p>{address}</p>
    </li>
  )
};

export default ListItem;