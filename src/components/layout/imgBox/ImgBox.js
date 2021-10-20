import classes from "./ImgBox.module.css";

function ImgBox({ url, css }) {
  return !url ? null : (
    <div className={`${classes.root} ${css && css}`}>
      <img className={classes.img} src={url} alt="Post" />
    </div>
  )
};

export default ImgBox;