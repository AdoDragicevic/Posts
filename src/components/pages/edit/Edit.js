import { useParams } from "react-router-dom";

import { getDateStr } from "../../../helpers/date";

import Container from "../../layout/container/Container";
import Header from "../../UI/header/Header";
import Form from "../../UI/form/Form";


function Edit({ posts, updatePost }) {

  const { id } = useParams();
  const post = posts.find(post => post.id === id);

  const submit = inputData => {
    const updatedInput = { ...inputData, id: post.id, date: getDateStr() };
    updatePost(post.id, updatedInput);
  };

  return (
    <Container width="small">
      <Header>Edit post</Header>
      <Form post={post} submit={submit} />
    </Container>
  )

};

export default Edit;