import classes from "./ListItem.module.css";

function ListItem({ img, name, address, description }) {

  return (
    <li>
      <img src={img} />
      <h4>{name}</h4>
      <p>{address}</p>
      <p>{description}</p>
    </li>
  )
};

export default ListItem;