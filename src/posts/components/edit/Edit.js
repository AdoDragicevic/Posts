import { getDateStr } from "../../helpers/date";

import FormsController from "../form/formsController/FormsController";


function Edit({ post, updatePost }) {

  const submit = inputData => {
    const updatedInput = { ...inputData, id: post.id, date: getDateStr() };
    updatePost(post.id, updatedInput);
  };

  return (
    <FormsController 
      header="Edit post"
      post={post}
      submit={submit} 
    />
  )

};

export default Edit;