import { memo } from "react";
import { Link } from "react-router-dom";

import ListItem from "./listItem/ListItem";

import classes from "./List.module.css";


function List({ posts }) {
  if (posts.length === 0) return <p>No posts...</p>;
  const items = posts.map( post => (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <ListItem key={post.id} {...post} />
      </Link>
  ));
  return <ul className={classes.root}> {items} </ul>;
};

export default memo(List);