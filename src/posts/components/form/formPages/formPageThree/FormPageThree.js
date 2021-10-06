import Textarea from "../../textarea/Textarea";


function FormPageThree({ description, updateDescription }) {
  return (
    <Textarea 
      name="description" 
      value={description}
      onChange={updateDescription}
    />
  )
};

export default FormPageThree;