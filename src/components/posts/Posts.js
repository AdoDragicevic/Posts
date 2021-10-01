import { useState } from "react/cjs/react.development";

import Nav from "../UI/nav/Nav";
import List from "./list/List";
import New from "./new/New";
import Show from "./show/Show";

import classes from "./Posts.module.css";


function Posts({ posts, setPosts }) {
  
  const [currMode, setCurrMode] = useState("new");
  const [currPost, setCurrPost] = useState(null);

  const showCurrContent = () => {
    if (currPost) return <Show {...currPost} />;
    if (currMode === "new") return <New setPosts={setPosts} />;
    return <List posts={posts} openPost={setCurrPost} />;
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