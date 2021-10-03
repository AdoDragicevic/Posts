import Input from "../../input/Input";
import Button from "../../../UI/button/Button";

import classes from "./FirstForm.module.css";

function FirstForm({ title, author, address, updateTitle, updateAuthor, updateAddress, submit }) {

  return (
    <form className={classes.root} onSubmit={submit}>
      <div className={classes.inputs}>
        <Input
          type="text" 
          value={title} 
          onChange={updateTitle}
          name="title" 
          placeholder="My first post"
          isRequired={false}
        />
        <Input 
          type="text" 
          value={author}
          onChange={updateAuthor}
          name="author"
          placeholder="John Smith"
          isRequired={false}
        />
        <Input 
          type="email" 
          value={address}
          onChange={updateAddress}
          name="address"
          placeholder="john.smith@matrix.com"
          isRequired={false}
        />
      </div>
      <div>
        <Button type="submit" size="large" color="secondary">
          Next 2/3
        </Button>
      </div>
    </form>
  )
};

export default FirstForm;