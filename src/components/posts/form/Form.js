import { useRef } from "react";

import classes from "./Form.module.css";


function Form(props) {

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" required></input>
      
      <label htmlFor="addess">Address</label>
      <input id="addess" type="text" name="address" required></input>
      
      <label htmlFor="description">description</label>
      <textarea id="description" name="description" required></textarea>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;