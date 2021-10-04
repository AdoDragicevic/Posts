import Textarea from "../../textarea/Textarea";
import Button from "../../../UI/button/Button";

import classes from "./ThirdForm.module.css";


function ThirdForm({ description, updateDescription, goBack, submit }) {

  return (
    <form onSubmit={submit}>
      <Textarea
        name="description"
        value={description}
        onChange={updateDescription}
        isRequired 
      />
      <div className={classes.footer}>
        <div className={classes.goBack} onClick={goBack}>&#8592;</div>
        <Button type="submit" size="large" color="secondary">
          Submit
        </Button>
      </div>
    </form>
  )
};

export default ThirdForm;