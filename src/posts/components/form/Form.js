import { useRef } from "react";
import useResetState from "../../hooks/useResetState";

import Input from "./input/Input";
import Textarea from "./textarea/Textarea";
import ImgUpload from "./imgUpload/ImgUpload";
import Button from "../UI/button/Button";

import classes from "./Form.module.css";


function Form({ submit }) {

  const [img, setImg, resetImg] = useResetState("");

  const title = useRef();
  const author = useRef();
  const address = useRef();
  const description = useRef();

  const handleImgUpload = img => setImg(img);

  const handleSubmit = e => {
    e.preventDefault();
    const inputData = {
      title: title.current.value,
      author: author.current.value,
      address: address.current.value,
      description: description.current.value,
      img
    };
    submit(inputData);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <img src={img} />
      <ImgUpload name="image" isRequired />
      <Input type="text" reference={title} name="title" isRequired />
      <Input type="text" reference={author} name="author" isRequired />
      <Input type="text" reference={address} name="address" isRequired />
      <Textarea name="description" reference={description} isRequired />
      <Button>Submit</Button>
    </form>
  );
};

export default Form;