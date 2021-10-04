import uuid from "react-uuid";

import FormsController from "../form/formsController/FormsController";

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

  return <FormsController header="Add new post" submit={submit} />
};

export default New;