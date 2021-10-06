import { useState, useRef } from "react";
import useInputState from "../../hooks/useInputState";
import useIncrementState from "../../hooks/useIncrementState";

import FormHeader from "./formHeader/FormHeader";
import FormFooter from "./formFooter/FormFooter";
import Inputs from "./formContent/inputs/Inputs";
import ImgUploader from "./formContent/imgUploader/ImgUploader";
import Textarea from "./formContent/textarea/Textarea";
import LoadingAnimation from "../UI/loadingAnimation/LoadingAnimation";

import { uploadImage } from "../../helpers/cloudinary";

import classes from "./Form.module.css";


function Form({ post, submit }) {

  const [page, nextPage, previousPage] = useIncrementState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [title, updateTitle] = useInputState(post ? post.title : "");
  const [author, updateAuthor] = useInputState(post ? post.author : "");
  const [address, updateAddress] = useInputState(post ? post.address : "");
  const [description, updateDescription] = useInputState(post ? post.description : "");
  const [img, setImg] = useState({ files: null, url: post ? post.img : null });


  const content = [
    <Inputs 
      title={title}
      updateTitle={updateTitle}
      author={author}
      updateAuthor={updateAuthor}
      address={address}
      updateAddress={updateAddress}
    />,
    <ImgUploader img={img} onChange={setImg} />,
    <Textarea name="description" value={description} onChange={updateDescription} />
  ];

  const handleSubmit = async e => {
    e.preventDefault();
    if (page !== 2) return nextPage();
    setIsLoading(true);
    const imgURL = img.url === post.img ? img.url : await uploadImage(img.files);
    setIsLoading(false);
    const inputVals = { title, author, address, description, img: imgURL };
    submit(inputVals);
  };


  if (isLoading) return <LoadingAnimation msg="Saving..." />;

  return (
    <form className={classes.root}>
      <FormHeader page={page} />
      <div className={classes.body}> 
        {content[page]}
      </div>
      <FormFooter 
        page={page}
        back={previousPage} 
        next={handleSubmit}
      />
    </form>
  )
};

export default Form;