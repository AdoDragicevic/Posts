import uuid from "react-uuid";

import FormsContainer from "../form/formsContainer/FormsContainer";

import { getDateStr } from "../../helpers/date";

import classes from "./New.module.css";

function New({ add }) {

  const submit = inputData => {
    const newInput = {
      ...inputData,
      id: uuid(),
      date: getDateStr()
    };
    add(newInput);
  };

  return <FormsContainer header="Add new post" submit={submit} />
};

export default New;