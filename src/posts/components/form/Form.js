import { useRef } from "react";
import useResetState from "../../hooks/useResetState";

import Input from "./Input";
import Textarea from "./Textarea";
import ImgUpload from "./ImgUpload";
import Button from "../UI/button/Button";

import classes from "./Form.module.css";


function Form({ submit }) {

  const [img, setImg, resetImg] = useResetState("");

  const name = useRef();
  const address = useRef();
  const description = useRef();

  const handleImgUpload = img => setImg(img);

  const handleSubmit = e => {
    e.preventDefault();
    const inputData = {
      name: name.current.value,
      address: address.current.value,
      description: description.current.value,
      img,
      date: new Date()
    };
    submit(inputData);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <img src={img} />
      <ImgUpload name="image" isRequired />
      <Input type="text" reference={name} name="name" isRequired />
      <Input type="text" reference={address} name="address" isRequired />
      <Textarea name="description" reference={description} isRequired />
      <Button>Submit</Button>
    </form>
  );
};

export default Form;