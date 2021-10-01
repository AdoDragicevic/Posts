import { useEffect, useRef, useState } from "react";

import Input from "./Input";
import Textarea from "./Textarea";
import ImgUpload from "./ImgUpload";

import classes from "./Form.module.css";


function Form({ submit }) {

  const name = useRef();
  const address = useRef();
  const description = useRef();

  const [img, setImg] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const inputData = {
      name: name.current.value,
      address: address.current.value,
      description: description.current.value,
      img
    };
    submit(inputData);
  };

  const handleImgUpload = img => {
    setImg(img);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" reference={name} name="name" isRequired />
      <Input type="text" reference={address} name="address" isRequired />
      <Textarea name="description" reference={description} isRequired />
      <ImgUpload onUpload={handleImgUpload} currImg={img} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;