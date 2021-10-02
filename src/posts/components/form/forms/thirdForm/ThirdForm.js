import Textarea from "../../textarea/Textarea";
import Button from "../../../UI/button/Button";

function ThirdForm({ description, updateDescription, goBack, submit }) {
  
  const textAreaChange = e => {
    console.log(e.target);
  };

  return (
    <form onSubmit={submit}>
      <Textarea 
        name="description"
        value={description}
        onChange={updateDescription}
        isRequired 
      />
      <div onClick={goBack}>&#8592;</div>
      <Button type="submit">
        Submit
      </Button>
    </form>
  )
};

export default ThirdForm;