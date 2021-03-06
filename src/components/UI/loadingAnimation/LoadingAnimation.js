import Header from "../header/Header";

import loadingSVG from "../../../imgs/loading.svg";

import classes from "./LoadingAnimation.module.css";

function LoadingAnimation({ msg }) {
  return (
    <div className={classes.root}>
      <Header>{msg}</Header>
      <img className={classes.svg} src={loadingSVG} alt="Loading" />
    </div>
  )
};

export default LoadingAnimation;