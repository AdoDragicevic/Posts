import { useParams } from "react-router-dom";
import { useContext } from "react";

import { PostsContext } from "../../../contexts/postsContext";
import { PostsDispatchContext } from "../../../contexts/postsContext";

import { getDateStr } from "../../../helpers/date";

import Container from "../../layout/container/Container";
import Header from "../../UI/header/Header";
import Form from "../../UI/form/Form";


function Edit({ setNotification }) {

  const posts = useContext(PostsContext);
  const dispatch = useContext(PostsDispatchContext);

  const { id } = useParams();
  const post = posts.find(post => post.id === id);

  const submit = inputData => {
    const updatedPost = { ...inputData, id: post.id, date: getDateStr() };
    dispatch({ type: "UPDATE", id: post.id, updatedPost });
  };

  return (
    <Container width="small">
      <Header>Edit post</Header>
      <Form post={post} submit={submit} setNotification={setNotification} />
    </Container>
  )

};

export default Edit;