import classes from "./ImgBox.module.css";

function ImgBox({ url, msg }) {
  return (
    <div className={classes.root}>
      <img className={classes.img} src={url} alt="Post" />
    </div>
  )
};

export default ImgBox;