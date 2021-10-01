import classes from "./New.module.css";

import Form from "../form/Form";

function New({ addPost }) {
  return <Form submit={addPost} />;
};

export default New;