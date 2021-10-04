import { useState } from "react";

import Nav from "./layout/nav/Nav";
import Search from "./search/Search";
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
    const p = posts.find(post => post.id === id);
    setShowPost(p);
    setContent("edit");
  };

  const remove = id => {
    const p = posts.filter(post => post.id !== id);
    setPosts(p);
    setContent("list");
  };

  const update = (id, newPost) => {
    const otherPosts = posts.filter(post => post.id !== id);
    setPosts([newPost,...otherPosts]);
    setContent("list");
  };

  const renderContent = () => {
    switch(content) {
      case "list":
        return <Search show={show} posts={posts} />
      case "show":
        return <Show {...showPost} remove={remove} edit={edit} />;
      case "new":
        return <New add={add} setContent={setContent} />;
      case "edit":
        return <Edit post={showPost} update={update} />
      default:
        return null;
    }
  };

  return (
    <div className={classes.root}>
      <Nav content={content} setContent={setContent} />
      <div className={classes.container}>
        {renderContent()}
      </div>
    </div>
  );

};

export default Posts;