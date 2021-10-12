import uuid from "react-uuid";

import Container from "../../layout/container/Container";
import Header from "../../UI/header/Header";
import Form from "../../UI/form/Form";

import { getDateStr } from "../../../helpers/date";


function New({ addPost }) {

  const submit = inputData => {
    const newInput = { ...inputData, id: uuid(), date: getDateStr() };
    addPost(newInput);
  };

  return (
    <Container width="small">
      <Header>Add new post</Header>
      <Form submit={submit} />
    </Container>
  )
};

export default New;