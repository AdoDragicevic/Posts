import ListItem from "./ListItem";
import Card from "../layout/card/Card";

import classes from "./List.module.css";

function List({ posts, show }) {
  if (posts.length === 0) return <p>No posts...</p>;
  const items = posts.map( p => (
    <Card>
      <ListItem key={p.id} {...p} show={show} />
    </Card>
  ));
  return <ul className={classes.root}> {items} </ul>;
};

export default List;