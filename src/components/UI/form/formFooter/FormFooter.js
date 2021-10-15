import { IoChevronBackSharp } from "react-icons/io5";

import Button from "../../button/Button";
import ProgressBar from "../../progressBar/ProgressBar";

import classes from "./FormFooter.module.css";


function FormFooter({ page, back, next }) {
  return (
    <div className={classes.root}>
      <div className={classes.btns}>
        {page !== 0 &&
          <div className={classes.back}>
            <Button type="button" size="round" color="primary" onClick={back}>
              <IoChevronBackSharp />
            </Button>
          </div>
        }
        <Button type="submit" size="large" color="primary" onClick={next}>
          {page === 2 ? "Submit" : "Next"}
        </Button>
      </div>
      <div className={classes.progress}>
        <ProgressBar nOfsteps={3} currStep={page} />
      </div>
    </div>
  )
};

export default FormFooter;