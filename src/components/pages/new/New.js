import uuid from "react-uuid";

import Container from "../../layout/container/Container";
import Header from "../../UI/header/Header";
import Form from "../../UI/form/Form";

import { getDateStr } from "../../../helpers/date";


function New({ dispatch, setNotification }) {

  const submit = inputData => {
    const newPost = { ...inputData, id: uuid(), date: getDateStr() };
    dispatch({ type: "ADD", newPost });
  };

  return (
    <Container width="small">
      <Header>Add new post</Header>
      <Form submit={submit} setNotification={setNotification} />
    </Container>
  )
};

export default New;