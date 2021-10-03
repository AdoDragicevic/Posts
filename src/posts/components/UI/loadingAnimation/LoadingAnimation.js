import loadingSVG from "../../../imgs/loading2.svg";

import classes from "./LoadingAnimation.module.css";

function LoadingAnimation({ msg }) {
  return (
    <div className={classes.root}>
      <p className={classes.msg}>{msg}</p>
      <img className={classes.svg} src={loadingSVG} />
    </div>
  )
};

export default LoadingAnimation;