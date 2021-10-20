import Header from "../../../../../UI/header/Header";
import ImgBox from "../../../../../layout/imgBox/ImgBox";

import classes from "./ListItem.module.css";


function ListItem({ img, title, email, author }) {
  return (
    <li className={classes.root}>
      <Header>{title}</Header>
      <ImgBox url={img} css={classes.height} />
      <div className={classes.info}>
        <p>{email}</p>
        <p className={classes.author}>{author}</p>
      </div>
      <div className={classes.line} />
    </li>
  )
};

export default ListItem;