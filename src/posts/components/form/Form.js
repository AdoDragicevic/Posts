import useIncrementState from "../../hooks/useIncrementState";

import FormHeader from "./formHeader/FormHeader";
import FormFooter from "./formFooter/FormFooter";

import classes from "./Form.module.css";


function Form({ post, submit }) {

  const [page, nextPage, previousPage] = useIncrementState(1);

  return (
    <form className={classes.root}>
      
      <FormHeader page={page} />

      <div className={classes.body}>

      </div>

      <FormFooter page={page} back={previousPage} next={nextPage} submit={submit} />

    </form>
  )
};

export default Form;