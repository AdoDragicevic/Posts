import { useContext } from "react";
import uuid from "react-uuid";

import { PostsDispatchContext } from "../../../contexts/postsContext";
import { SetNotificationContext } from "../../../contexts/notificationContext";

import Container from "../../layout/container/Container";
import Header from "../../UI/header/Header";
import Form from "../../UI/form/Form";

import { getDateStr } from "../../../helpers/date";


function New() {

  const dispatch = useContext(PostsDispatchContext);
  const setNotification = useContext(SetNotificationContext);

  const submit = inputData => {
    const newPost = { ...inputData, id: uuid(), date: getDateStr() };
    dispatch({ type: "ADD", newPost });
    setNotification({ isSuccess: true, txt: "Post added" });
  };

  return (
    <Container width="small">
      <Header>Add new post</Header>
      <Form submit={submit} />
    </Container>
  )
};

export default New;