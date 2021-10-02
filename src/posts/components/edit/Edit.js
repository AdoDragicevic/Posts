import { getDateStr } from "../../helpers/date";

import FormsContainer from "../form/formsContainer/FormsContainer";

import "./Edit.module.css";

function Edit({ update, id, title, author, address, description, img }) {

  const submit = inputData => {
    const updatedInput = {
      ...inputData,
      id: id,
      date: getDateStr()
    };
    update(id, updatedInput);
  };

  return (
    <FormsContainer 
      header="Add new post" 
      title={title}
      author={author}
      address={address}
      description={description}
      img={img}
      submit={submit} 
    />
  )

};

export default Edit;