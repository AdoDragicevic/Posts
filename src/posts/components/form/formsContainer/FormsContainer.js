import { useState } from "react";
import useInputState from "../../../hooks/useInputState";
import useIncrementState from "../../../hooks/useIncrementState";

import Header from "../../UI/header/Header";
import FirstForm from "../forms/firstForm/FirstForm";
import SecondForm from "../forms/secondForm/SecondForm";
import ThirdForm from "../forms/thirdForm/ThirdForm";
import LoadingAnimation from "../../UI/loadingAnimation/LoadingAnimation";

import { uploadImage } from "../../../helpers/cloudinary";

import classes from "./FormsContainer.module.css";

function FormsContainer({ header, post, submit }) {
  
  const [formPage, incrementFormPage, decrementFormPage] = useIncrementState();

  const [isLoading, setIsLoading] = useState(false);

  const [titleInput, updateTitle] = useInputState(post ? post.title : "");
  const [authorInput, updateAuthor] = useInputState(post ? post.author : "");
  const [addressInput, updateAddress] = useInputState(post ? post.address : "");
  const [descriptionTxt, updateDescription] = useInputState(post ? post.description : "");
  const [image, setImage] = useState(post ? post.img : "");

  const toPreviousFormPage = () => decrementFormPage();

  const toNextFormPage = () => incrementFormPage();

  const submitForm = async e => {
    e.preventDefault();
    setIsLoading(true);
    const imageURL = await uploadImage(image);
    setIsLoading(false);
    const inputVals = { 
      title: titleInput, 
      author: authorInput, 
      address: addressInput, 
      description: descriptionTxt, 
      img: imageURL
    };
    submit(inputVals);
  };

  const formPages = [
    <FirstForm 
      title={titleInput}
      updateTitle={updateTitle}
      author={authorInput}
      updateAuthor={updateAuthor}
      address={addressInput}
      updateAddress={updateAddress}
      toNextFormPage={toNextFormPage}
    />,
    <SecondForm 
      img={image}
      setImg={setImage}
      goBack={toPreviousFormPage}
      toNextFormPage={toNextFormPage}
    />,
    <ThirdForm 
      description={descriptionTxt} 
      updateDescription={updateDescription}
      goBack={toPreviousFormPage} 
      submit={submitForm} 
    />
  ];


  if (isLoading) return <LoadingAnimation msg="Saving..." />;

  return (
    <>
      <Header> {header} </Header>
      <div className={classes.container}>
        {formPages[formPage]}
      </div>
    </>
  )

};

export default FormsContainer;  