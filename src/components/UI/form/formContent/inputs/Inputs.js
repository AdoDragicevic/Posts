import { BsPencil } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

import Input from "./input/Input";

import "./Inputs.module.css";

function InputsGroup({ vals, onChange }) {
  
  const { title, author, email } = vals;
  const { updateTitle, updateAuthor, updateAddress } = onChange;
  
  return (
    <>
      <Input 
        type="text"
        name="title"
        value={title}
        onChange={updateTitle}
        placeholder="My first post"
        icon={ <BsPencil /> }
      />
      <Input 
        type="text"
        name="author"
        value={author}
        onChange={updateAuthor}
        placeholder="John Smith"
        icon={ <IoPersonOutline /> }
      />
      <Input 
        type="text"
        name="email"
        value={email}
        onChange={updateAddress}
        placeholder="john.smith@gmail.com"
        icon= { <IoMailOutline /> }
      />
    </>
  )
};

export default InputsGroup;