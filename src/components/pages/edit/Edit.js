import { useParams } from "react-router-dom";

import { getDateStr } from "../../../helpers/date";

import Container from "../../layout/container/Container";
import Header from "../../UI/header/Header";
import Form from "../../UI/form/Form";


function Edit({ posts, dispatch, setNotification }) {

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