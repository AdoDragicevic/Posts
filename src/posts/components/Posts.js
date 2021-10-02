import { useState } from "react/cjs/react.development";

import Nav from "./layout/nav/Nav";
import Container from "./layout/container/Container";
import List from "./list/List";
import New from "./new/New";
import Edit from "./edit/Edit";
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
    const p = posts.find(p => p.id === id);
    setShowPost(p);
    setContent("show");
  };

  const edit = id => {
    setContent("edit");
    const p = posts.find(post => post.id === id);
    setShowPost(p);
  };

  const remove = id => {
    const p = posts.filter(post => post.id !== id);
    setContent("list");
    setPosts(p);
  };

  const update = (id, newPost) => {
    const p = posts.map(post => post.id === id ? newPost : post);
    setPosts(p);
  };

  const renderContent = () => {
    switch(content) {
      case "new":
        return <New add={add} setContent={setContent} />;
      case "list":
        return <List show={show} posts={posts} />
      case "show":
        return <Show {...showPost} remove={remove} edit={edit} />;
      case "edit":
        return <Edit {...showPost} update={update} />
      default:
        return null;
    }
  };

  return (
    <div className={classes.root}>
      <Nav content={content} setContent={setContent} />
      <Container> {renderContent()} </Container>
    </div>
  );

};

export default Posts;