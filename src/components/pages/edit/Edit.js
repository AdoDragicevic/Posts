import { useParams } from "react-router-dom";
import { useContext } from "react";

import { PostsContext } from "../../../contexts/postsContext";
import { PostsDispatchContext } from "../../../contexts/postsContext";
import { SetNotificationContext } from "../../../contexts/notificationContext";

import { getDateStr } from "../../../helpers/date";

import Container from "../../layout/container/Container";
import Header from "../../UI/header/Header";
import Form from "../../UI/form/Form";


function Edit() {

  const posts = useContext(PostsContext);
  const dispatch = useContext(PostsDispatchContext);
  const setNotification = useContext(SetNotificationContext);

  const { id } = useParams();
  const post = posts.find(post => post.id === id);

  const submit = inputData => {
    const updatedPost = { ...inputData, id: post.id, date: getDateStr() };
    dispatch({ type: "UPDATE", id: post.id, updatedPost });
    setNotification({ isSuccess: true, txt: "Post updated" });
  };

  return (
    <Container width="small">
      <Header>Edit post</Header>
      <Form post={post} submit={submit} />
    </Container>
  )

};

export default Edit;