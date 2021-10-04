import Header from "../UI/header/Header";

import classes from "./ListItem.module.css";

function ListItem({ img, title, address, author, id, openPost }) {
  return (
    <li className={classes.root} onClick={ () => openPost(id) }>
      <Header>{title}</Header>
      <br />
      <img className={classes.img} src={img} />
      <div className={classes.info}>
        <p className={classes.author}>{author}</p>
        <p className={classes.address}>{address}</p>
      </div>
      <div className={classes.line} />
    </li>
  )
};

export default ListItem;