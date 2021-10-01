import { useState } from "react/cjs/react.development";

import Nav from "./layout/nav/Nav";
import Container from "./layout/container/Container";
import List from "./list/List";
import New from "./new/New";
import Show from "./show/Show";

import classes from "./Posts.module.css";


function Posts({ posts, setPosts }) {
  
  const [content, setContent] = useState("new");
  const [showPost, setShowPost] = useState(null);

  const add = newPost => {
    setPosts([newPost, ...posts]);
    setContent("list");
  };
  
  const show = id => {
    const post = posts.find(p => p.id === id);
    setShowPost(post);
    setContent("show");
  };

  const exitShow = () => {
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
      <Nav content={content} setContent={setContent} />
      <Container> {renderContent()} </Container>
    </>
  );

};

export default Posts;