import classes from "./New.module.css";

import uuid from "react-uuid";

import Form from "../form/Form";
import Card from "../layout/card/Card";

function New({ add }) {

  const submit = inputData => {
    inputData.id = uuid();
    add(inputData);
  };

  return (
    <Card>
      <h1>Add new post</h1>
      <Form submit={submit} />
    </Card>
  )
};

export default New;