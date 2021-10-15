import { memo } from "react";

import classes from "./FormHeader.module.css";

function FormHeader({ page }) {

  return (
    <div className={classes.root}>
      <h3 className={classes.msg}>
        {page === 0 && "Post data"}
        {page === 1 && "Post image"}
        {page === 2 && "Post content"}
      </h3>
    </div>
  )
};

export default memo(FormHeader);