import classes from "./New.module.css";

import uuid from "react-uuid";

import Form from "../form/Form";

function New({ add }) {

  const submit = inputData => {
    inputData.id = uuid();
    add(inputData);
  };

  return <Form submit={submit} />;
};

export default New;