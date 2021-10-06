import { useState, useRef } from "react";
import useInputState from "../../hooks/useInputState";
import useIncrementState from "../../hooks/useIncrementState";
import useStateWithReset from "../../hooks/useStateWithReset";

import FormHeader from "./formHeader/FormHeader";
import FormFooter from "./formFooter/FormFooter";
import InputsGroup from "./inputsGroup/InputsGroup";
import Textarea from "./textarea/Textarea";
import LoadingAnimation from "../UI/loadingAnimation/LoadingAnimation";

import classes from "./Form.module.css";


function Form({ post, submit }) {

  const [page, nextPage, previousPage] = useIncrementState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [title, updateTitle] = useInputState(post ? post.title : "");
  const [author, updateAuthor] = useInputState(post ? post.author : "");
  const [address, updateAddress] = useInputState(post ? post.address : "");
  const [description, updateDescription] = useInputState(post ? post.description : "");

  const content = [
    <InputsGroup 
      title={title}
      updateTitle={updateTitle}
      author={author}
      updateAuthor={updateAuthor}
      address={address}
      updateAddress={updateAddress}
    />,
    <Textarea
      name="description"
      value={description}
      onChange={updateDescription}
    />
  ];

  const handleSubmit = () => {
    // set loading
    const inputVals = { title, author, address, description };
    submit(inputVals);
  };


  if (isLoading) return <LoadingAnimation msg="Saving..." />;

  return (
    <form className={classes.root}>
      <FormHeader page={page} />
      <div className={classes.body}> 
        {content[page]}
      </div>
      <FormFooter page={page} back={previousPage} next={nextPage} submit={handleSubmit} />
    </form>
  )
};

export default Form;