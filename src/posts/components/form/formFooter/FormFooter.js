import Button from "../../UI/button/Button";

import classes from "./FormFooter.module.css";

function FormFooter({ back, next, txt }) {
  
  const handleClick = e => {
    e.preventDefault();
    next();
  };
  
  return (
    <div className={classes.root}>
      {back && (
        <div className={classes.back} onClick={back}>&#8592;</div>
      )}
      <Button
        type="submit"
        size="large"
        color="primary"
        onClick={handleClick}
      >
        {txt}
      </Button>
    </div>
  )
};

export default FormFooter;