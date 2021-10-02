import { useState } from "react";
import useInputState from "../../../hooks/useInputState";
import useIncrementState from "../../../hooks/useIncrementState";

import Card from "../../layout/card/Card";
import Header from "../../UI/header/Header";
import FirstForm from "../forms/firstForm/FirstForm";
import SecondForm from "../forms/secondForm/SecondForm";
import ThirdForm from "../forms/thirdForm/ThirdForm";

import classes from "./FormsContainer.module.css";

function FormsContainer({ header, submit }) {
  
  const [formPage, incrementFormPage, decrementFormPage] = useIncrementState();

  const [title, updateTitle] = useInputState();
  const [author, updateAuthor] = useInputState();
  const [description, updateDescription] = useInputState();
  const [address, updateAddress] = useInputState();

  const goToPreviousFormPage = () => {
    decrementFormPage();
  };

  const goToNextFormPage = e => {
    e.preventDefault();
    incrementFormPage();
  };

  const submitForm = e => {
    console.log(description);
    e.preventDefault();
    const inputVals = { title, author, description, address, img: ""};
    submit(inputVals);
  };

  const formPages = [
    <FirstForm 
      title={title}
      updateTitle={updateTitle}
      author={author}
      updateAuthor={updateAuthor}
      address={address}
      updateAddress={updateAddress}
      submit={goToNextFormPage}
    />,
    <SecondForm 
      img=""
      goBack={goToPreviousFormPage}
      submit={goToNextFormPage}
    />,
    <ThirdForm 
      description={description} 
      updateDescription={updateDescription}
      goBack={goToPreviousFormPage} 
      submit={submitForm} 
    />
  ];

  return (
    <Card>
      <Header> {header} </Header>
      {formPages[formPage]}
    </Card>
  )

};

export default FormsContainer;  