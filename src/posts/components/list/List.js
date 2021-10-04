import ListItem from "./ListItem";

import classes from "./List.module.css";

function List({ posts, openPost }) {
  if (posts.length === 0) return <p>No posts...</p>;
  const items = posts.map( p => ( 
      <ListItem key={p.id} {...p} openPost={openPost} />
  ));
  return <ul className={classes.root}> {items} </ul>;
};

export default List;