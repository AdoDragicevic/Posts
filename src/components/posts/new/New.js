import classes from "./New.module.css";

import Form from "../form/Form";

function New({ add }) {
  return <Form submit={add} />;
};

export default New;