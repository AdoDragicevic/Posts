import Button from "../../UI/button/Button";

import classes from "./FormFooter.module.css";

function FormFooter({ page, back, next, submit }) {
  
  const handleClick = e => {
    e.preventDefault();
    page === 3 ? submit() : next();
  };
  
  return (
    <div className={classes.root}>
      {page !== 1 && (
        <div className={classes.back} onClick={back}>&#8592;</div>
      )}
      <Button
        type="submit"
        size="large"
        color="primary"
        onClick={handleClick}
      >
        {page === 3 ? "Submit" : "Next"}
      </Button>
    </div>
  )
};

export default FormFooter;