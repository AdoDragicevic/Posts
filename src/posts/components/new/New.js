import uuid from "react-uuid";

import Header from "../UI/header/Header";
import Form from "../form/Form";

import { getDateStr } from "../../helpers/date";


function New({ addPost }) {
  const submit = inputData => {
    const newInput = {
      ...inputData,
      id: uuid(),
      date: getDateStr()
    };
    addPost(newInput);
  };

  return (
    <>
      <Header>Add new post</Header>
      <Form submit={submit} />
    </>
  )
};

export default New;