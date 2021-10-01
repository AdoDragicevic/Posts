import { useRef } from "react";

import classes from "./Form.module.css";


function Form({ submit }) {

  const name = useRef();
  const address = useRef();
  const description = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const post = {
      name: name.current.value,
      address: address.current.value,
      description: description.current.value
    };
    submit(post);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" ref={name} required></input>
      
      <label htmlFor="addess">Address</label>
      <input id="addess" type="text" name="address" ref={address} required></input>
      
      <label htmlFor="description">description</label>
      <textarea id="description" name="description" ref={description} required></textarea>
      
      <button type="submit">Submit</button>

    </form>
  );
};

export default Form;