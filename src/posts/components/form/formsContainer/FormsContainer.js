import useInputState from "../../../hooks/useInputState";
import useIncrementState from "../../../hooks/useIncrementState";

import Card from "../../layout/card/Card";
import Header from "../../UI/header/Header";
import FirstForm from "../forms/firstForm/FirstForm";
import SecondForm from "../forms/secondForm/SecondForm";
import ThirdForm from "../forms/thirdForm/ThirdForm";

import classes from "./FormsContainer.module.css";

function FormsContainer({ header, title, author, address, description, submit, img }) {
  
  const [formPage, incrementFormPage, decrementFormPage] = useIncrementState();

  const [titleInput, updateTitle] = useInputState(title || "");
  const [authorInput, updateAuthor] = useInputState(author || "");
  const [addressInput, updateAddress] = useInputState(address || "");
  const [descriptionTxt, updateDescription] = useInputState(description || "");

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
    const inputVals = { 
      title: titleInput, 
      author: authorInput, 
      address: addressInput, 
      description: descriptionTxt, 
      img: ""
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
      submit={goToNextFormPage}
    />,
    <SecondForm 
      img=""
      goBack={goToPreviousFormPage}
      submit={goToNextFormPage}
    />,
    <ThirdForm 
      description={descriptionTxt} 
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