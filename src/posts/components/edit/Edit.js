import { getDateStr } from "../../helpers/date";

import Header from "../UI/header/Header";
import Form from "../form/Form";


function Edit({ post, updatePost }) {

  const submit = inputData => {
    const updatedInput = { ...inputData, id: post.id, date: getDateStr() };
    updatePost(post.id, updatedInput);
  };

  return (
    <>
      <Header>Edit post</Header>
      <Form post={post} submit={submit} />
    </>
  )

};

export default Edit;