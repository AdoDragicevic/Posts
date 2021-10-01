import classes from "./New.module.css";

import Form from "../form/Form";

function New({ posts, setPosts }) {

  const addPost = post => {
    setPosts([post, ...posts]);
  };

  return <Form submit={addPost} />;
};

export default New;