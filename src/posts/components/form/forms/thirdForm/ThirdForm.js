import Textarea from "../../textarea/Textarea";
import Button from "../../../UI/button/Button";

function ThirdForm({ description, updateDescription, goBack, submit }) {
  return (
    <form onSubmit={submit}>
      <Textarea 
        name="description"
        value={description}
        onChange={updateDescription}
        isRequired 
      />
      <div onClick={goBack}>Go back</div>
      <Button type="submit">
        Submit
      </Button>
    </form>
  )
};

export default ThirdForm;