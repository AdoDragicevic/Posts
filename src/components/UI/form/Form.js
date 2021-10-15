import { useState } from "react";
import { Redirect } from "react-router-dom";

import useInputState from "../../../hooks/useInputState";
import useIncrementState from "../../../hooks/useIncrementState";
import useFocusState from "../../../hooks/useFocusState";
import useOnOffState from "../../../hooks/useOnOffState";

import FormHeader from "./formHeader/FormHeader";
import FormFooter from "./formFooter/FormFooter";
import Inputs from "./formContent/inputs/Inputs";
import ImgUploader from "./formContent/imgUploader/ImgUploader";
import Textarea from "./formContent/textarea/Textarea";
import LoadingAnimation from "../loadingAnimation/LoadingAnimation";
import ProgressBar from "../progressBar/ProgressBar";

import { uploadImage } from "../../../helpers/cloudinary";
import { validation } from "../../../helpers/formValidations";

import classes from "./Form.module.css";


function Form({ post, submit }) {

  const [page, nextPage, previousPage] = useIncrementState(0);
  const [isLoading, startLoading, finishLoading] = useOnOffState(null);
  const [setFocusedInput] = useFocusState(null);

  const [title, updateTitle] = useInputState(post ? post.title : "");
  const [author, updateAuthor] = useInputState(post ? post.author : "");
  const [address, updateAddress] = useInputState(post ? post.address : "");
  const [description, updateDescription] = useInputState(post ? post.description : "");
  const [img, setImg] = useState({ files: null, url: post ? post.img : null });


  const content = [
    <Inputs vals={{ title, author, address }} onChange={{ updateTitle, updateAuthor, updateAddress}} />,
    <ImgUploader img={img} onChange={setImg} />,
    <Textarea name="description" value={description} onChange={updateDescription} />
  ];


  const handleNextPage = e => {
    e.preventDefault();
    const inputVals = { title, author, address, description, img };
    if (!validation(page, inputVals, setFocusedInput)) return;
    page === 2 ? submitForm(inputVals) : nextPage();
  };


  const submitForm = async inputVals => {
    startLoading();
    inputVals.img = (post && post.img === img.url) ? img.url : await uploadImage(img.files);
    finishLoading();
    submit(inputVals);
    <Redirect to="/posts" />
  };


  if (isLoading) return <LoadingAnimation msg="Saving..." />;

  if (isLoading === false) return <Redirect to="/posts" />;

  return (
    <form className={classes.root}>
      <FormHeader page={page} />
      <div className={classes.body}> {content[page]} </div>
      <FormFooter page={page} back={previousPage} next={handleNextPage} />
    </form>
  )
};

export default Form;