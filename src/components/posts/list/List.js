import ListItem from "./ListItem";

import classes from "./List.module.css";

function List({ posts, openPost }) {
  if (posts.length === 0) return <p>No posts added yet...</p>;
  const listItems = posts.map( post => <ListItem {...post} /> );
  return <ul> {listItems} </ul>;
};

export default List;