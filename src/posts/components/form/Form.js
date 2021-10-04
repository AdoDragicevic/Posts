import useIncrementState from "../../hooks/useIncrementState";

import classes from "./Form.module.css";

function Form({ post, submit }) {

  const [page, nextPage, previousPage] = useIncrementState(0);

  return (
    <form className={classes.root}>
      
      <div className={classes.header}>

      </div>

      <div className={classes.body}>

      </div>

      <div className={classes.footer}></div>

    </form>
  )
};

export default Form;