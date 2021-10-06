import Button from "../../UI/button/Button";

import classes from "./FormFooter.module.css";

function FormFooter({ page, back, next }) {
  
  return (
    <div className={classes.root}>
      {page !== 0 && (
        <div className={classes.back} onClick={back}>&#8592;</div>
      )}
      <Button
        type="submit"
        size="large"
        color="primary"
        onClick={next}
      >
        {page === 2 ? "Submit" : "Next"}
      </Button>
    </div>
  )
};

export default FormFooter;