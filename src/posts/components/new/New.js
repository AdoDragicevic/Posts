import uuid from "react-uuid";

import FormsContainer from "../form/formsContainer/FormsContainer";

import { getDateStr } from "../../helpers/date";


function New({ addPost }) {
  const submit = inputData => {
    const newInput = {
      ...inputData,
      id: uuid(),
      date: getDateStr()
    };
    addPost(newInput);
  };

  return <FormsContainer header="Add new post" submit={submit} />
};

export default New;