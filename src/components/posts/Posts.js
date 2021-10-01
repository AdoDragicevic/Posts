import { useState } from "react/cjs/react.development";
import useToggleState from "../../hooks/useToggleState";

import Nav from "../UI/nav/Nav";
import List from "./list/List";
import New from "./new/New";
import Show from "./show/Show";

import classes from "./Posts.module.css";


function Posts({ posts, setPosts }) {
  
  const [content, setContent] = useState("new");
  const [openedPost, setOpenedPost] = useState(null);

  const addPost = newPost => {
    setPosts([newPost, ...posts]);
  };
  
  const showPost = id => {
    const post = posts.find(p => p.id === id);
    setOpenedPost(post);
    setContent("show");
  };

  const renderContent = () => {
    switch(content) {
      case "new":
        return <New addPost={addPost} setContent={setContent} />;
      case "list":
        return <List showPost={showPost} posts={posts} />
      case "show":
        return <Show {...showPost} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Nav />
      <div className={classes.container}>
        {renderContent()}
      </div>
    </>
  );

};

export default Posts;