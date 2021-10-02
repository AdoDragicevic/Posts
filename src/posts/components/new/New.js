import uuid from "react-uuid";

import Form from "../form/Form";
import Card from "../layout/card/Card";
import Header from "../UI/header/Header";

import { getDateStr } from "../../helpers/helper";

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

  return (
    <Card>
      <Header>Add new post</Header>
      <Form submit={submit} />
    </Card>
  )
};

export default New;