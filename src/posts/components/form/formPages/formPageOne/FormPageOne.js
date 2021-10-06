import Input from "../../input/Input";

import classes from "./FormPageOne.module.css";

function FormPageOne({ title, updateTitle, author, updateAuthor, address, updateAddress }) {
  return (
    <>
      <Input 
        type="text"
        name="title"
        value={title}
        onChange={updateTitle}
        placeholder="My first post"
      />
      <Input 
        type="text"
        name="author"
        value={author}
        onChange={updateAuthor}
        placeholder="My first post"
      />
      <Input 
        type="text"
        name="address"
        value={address}
        onChange={updateAddress}
        placeholder="My first post"
      />
    </>
  )
};

export default FormPageOne;