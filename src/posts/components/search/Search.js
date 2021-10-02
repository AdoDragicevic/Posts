import { findByTitle, findByAuthor } from "../../helpers/helper";
import { useState } from "react";
import useToggleState from "../../hooks/useToggleState";
import classes from "./Search.module.css";

function Search({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchByTitle, toggleIsSearchByTitle] = useToggleState();
  
  const handleInputChange = e => searchTerm(e.target.value);

  const search = () => (
    isSearchByTitle ? findByTitle(posts, searchTerm) : findByAuthor(posts, searchTerm)
  );
  
  return (
    <div className={classes.root}>
      <Input type="text" name="search" onChange={handleInputChange} />
      <List posts={search()} />
    </div>
  )
};

export default Search;