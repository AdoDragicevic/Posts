import { getDateStr } from "../../helpers/date";

import FormsContainer from "../form/formsContainer/FormsContainer";

import "./Edit.module.css";

function Edit({ post, update }) {

  const submit = inputData => {
    const updatedInput = { ...inputData, id: post.id, date: getDateStr() };
    update(post.id, updatedInput);
  };

  return (
    <FormsContainer 
      header="Edit post"
      post={post}
      submit={submit} 
    />
  )

};

export default Edit;