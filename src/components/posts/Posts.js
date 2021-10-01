import { useState } from "react/cjs/react.development";

import Nav from "./nav/Nav";
import List from "./list/List";
import New from "./new/New";
import Show from "./show/Show";

import classes from "./Posts.module.css";


function Posts({ posts, setPosts }) {
  
  const [content, setContent] = useState("new");
  const [showPost, setShowPost] = useState(null);

  const add = newPost => {
    setPosts([newPost, ...posts]);
  };
  
  const show = id => {
    const post = posts.find(p => p.id === id);
    setShowPost(post);
    setContent("show");
  };

  const exitShow = () => {
    setShowPost(null);
    setContent("list");
  };

  const renderContent = () => {
    switch(content) {
      case "new":
        return <New add={add} setContent={setContent} />;
      case "list":
        return <List show={show} posts={posts} />
      case "show":
        return <Show {...showPost} exit={exitShow} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Nav  />
      <div className={classes.container}>
        {renderContent()}
      </div>
    </>
  );

};

export default Posts;