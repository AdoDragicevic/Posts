import { useRef } from "react";

import classes from "./Form.module.css";


function Form(props) {

  const nameInput = useRef();
  const addressInput = useRef();
  const descriptionTextarea = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const post = {
      name: nameInput.current.value,
      address: addressInput.current.value,
      description: descriptionTextarea.current.value
    };
    props.submit(post);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" ref={nameInput} required></input>
      
      <label htmlFor="addess">Address</label>
      <input id="addess" type="text" name="address" ref={addressInput} required></input>
      
      <label htmlFor="description">description</label>
      <textarea id="description" name="description" ref={descriptionTextarea} required></textarea>
      
      <button type="submit">Submit</button>

    </form>
  );
};

export default Form;