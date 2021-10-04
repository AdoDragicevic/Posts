import Header from "../UI/header/Header";

import classes from "./ListItem.module.css";

function ListItem({ img, title, address, author, id, openPost }) {
  return (
    <li className={classes.root} onClick={ () => openPost(id) }>
      <Header>{title}</Header>
      <div className={classes.imgBox}>
        <img className={classes.img} src={img} />
      </div>
      <div className={classes.info}>
        <p className={classes.address}>{address}</p>
        <p className={classes.author}>{author}</p>
      </div>
      <div className={classes.line} />
    </li>
  )
};

export default ListItem;