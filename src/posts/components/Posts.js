import { useState } from "react";

import Nav from "./layout/nav/Nav";
import Search from "./search/Search";
import New from "./new/New";
import Edit from "./edit/Edit";
import Show from "./show/Show";

import classes from "./Posts.module.css";


function Posts({ posts, setPosts }) {
  
  const [content, setContent] = useState("new");
  const [shownPost, setShownPost] = useState(null);

  const addPost = newPost => {
    setPosts([newPost, ...posts]);
    setContent("list");
  };

  const deletePost = id => {
    const p = posts.filter(post => post.id !== id);
    setPosts(p);
    setContent("list");
  };

  const updatePost = (id, newPost) => {
    const otherPosts = posts.filter(post => post.id !== id);
    setPosts([newPost,...otherPosts]);
    setContent("list");
  };

  const openPost = id => {
    const p = posts.find(p => p.id === id);
    setShownPost(p);
    setContent("show");
  };

  const openEdit = id => {
    const p = posts.find(post => post.id === id);
    setShownPost(p);
    setContent("edit");
  };

  const renderContent = () => {
    switch(content) {
      case "list":
        return <Search openPost={openPost} posts={posts} />
      case "show":
        return <Show post={shownPost} deletePost={deletePost} openEdit={openEdit} />;
      case "new":
        return <New addPost={addPost} setContent={setContent} />;
      case "edit":
        return <Edit post={shownPost} updatePost={updatePost} />
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