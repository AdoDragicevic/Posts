import { useRef } from "react";

import Input from "./Input";
import Textarea from "./Textarea";

import classes from "./Form.module.css";


function Form({ submit }) {

  const name = useRef();
  const address = useRef();
  const description = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const inputData = {
      name: name.current.value,
      address: address.current.value,
      description: description.current.value
    }; 
    submit(inputData);
  };

  return (
    <form onSubmit={handleSubmit}>

      <Input type="text" reference={name} name="name" isRequired />
      
      <Input type="text" reference={address} name="address" isRequired />
      
      <Textarea name="description" reference={description} isRequired />
      
      <button type="submit">Submit</button>

    </form>
  );
};

export default Form;