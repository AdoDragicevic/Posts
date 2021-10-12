import { IoChevronBackSharp } from "react-icons/io5";

import Button from "../../button/Button";

import classes from "./FormFooter.module.css";


function FormFooter({ page, back, next }) {
  
  return (
    <div className={classes.root}>
      {page !== 0 && (
        <Button
          type="button"
          size="round"
          color="primary"
          onClick={back}
          styles={{ position: "absolute", left: 1 }}
        >
          <IoChevronBackSharp />
        </Button>
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