import ListItem from "./ListItem";

import classes from "./List.module.css";

function List({ posts, show }) {
  if (posts.length === 0) return <p>No posts yet...</p>;
  const items = posts.map( p => <ListItem key={p.id} {...p} show={show} /> );
  return <ul> {items} </ul>;
};

export default List;