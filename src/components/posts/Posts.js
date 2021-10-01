import { useState } from "react/cjs/react.development";

import Nav from "../UI/nav/Nav";
import List from "./list/List";
import New from "./new/New";
import Show from "./show/Show";

import classes from "./Posts.module.css";


function Posts({ posts, setPosts }) {
  
  const [isListAll, toggleIsListAll] = useToggleState(false);
  const [currPost, setCurrPost] = useState(null); 

  const showCurrContent = () => {
    if (currPost) return <Show {...currPost} />;
    if (isListAll) return <List posts={posts} openPost={setCurrPost} />;
    return <New setPosts={setPosts} />;
  };

  return (
    <>
      <Nav title="Posts" isListAll={isListAll} toggle={toggleIsListAll} />
      <div className={classes.container}>
        {showCurrContent()}
      </div>
    </>
  );
};

export default Posts;