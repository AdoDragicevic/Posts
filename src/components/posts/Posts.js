import { useState } from "react/cjs/react.development";

import Nav from "../UI/nav/Nav";
import List from "./list/List";
import New from "./new/New";
import Show from "./show/Show";

import classes from "./Posts.module.css";

function Posts(props) {
  
  const [currMode, setCurrMode] = useState("list");
  const [currPost, setCurrPost] = useState(null);

  const showCurrContent = () => {
    switch(currMode) {
      case "list":
        return <List posts={props.posts} open={setCurrPost} />;
      case "new":
        return <New setPosts={props.setPosts} />
      case "show":
        return <Show currPost={currPost} />
      default:
        return null;
    };
  };

  return (
    <>
      <Nav title="Posts" currMode={currMode} setCurrMode={setCurrMode} />
      <div className={classes.container}>
        {showCurrContent()}
      </div>
    </>
  );
};

export default Posts;