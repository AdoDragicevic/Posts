import Input from "../../input/Input";
import Button from "../../../UI/button/Button";

function FirstForm({ title, author, address, updateTitle, updateAuthor, updateAddress, submit }) {
  return (
    <form onSubmit={submit}>
      <Input
        type="text" 
        value={title} 
        onChange={updateTitle}
        name="title" 
        placeholder="My first post"
        isRequired 
      />
      <Input 
        type="text" 
        value={author}
        onChange={updateAuthor}
        name="author"
        placeholder="John Smith"
        isRequired 
      />
      <Input 
        type="text" 
        value={address}
        onChange={updateAddress}
        name="address"
        placeholder="john.smith@matrix.com"
        isRequired 
      />
      <Button type="submit">
        Next 2/3
      </Button>
    </form>
  )
};

export default FirstForm;