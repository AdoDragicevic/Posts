import Header from "../../../../../UI/header/Header";

import classes from "./ListItem.module.css";


function ListItem({ img, title, address, author }) {
  return (
    <li className={classes.root}>
      <Header>{title}</Header>
      <div className={classes.imgBox}>
        <img className={classes.img} src={img} alt="Post" />
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