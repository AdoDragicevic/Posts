import Button from "../../UI/button/Button";
import BackButton from "../../UI/backButton/BackButton";

import classes from "./FormFooter.module.css";

function FormFooter({ page, back, next }) {
  
  return (
    <div className={classes.root}>
      <Button
        type="button"
        size="round"
        color="primary"
        onClick={back}
        styles={{
          position: "absolute",
          left: 0
        }}
      >
        &#60;
      </Button>
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