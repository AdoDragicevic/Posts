import { findBy } from "../../helpers/search";
import { useState } from "react";
import useToggleState from "../../hooks/useToggleState";

import Input from "../form/input/Input.js";

import classes from "./Search.module.css";

function Search({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchByTitle, toggleIsSearchByTitle] = useToggleState();
  
  const handleInputChange = e => searchTerm(e.target.value);

  const search = () => {
    const key = isSearchByTitle ? "name" : "author";
    return findBy(posts, searchTerm, key);
  };
  
  return (
    <div className={classes.root}>
      <Input type="text" name="search" onChange={handleInputChange} />
      <List posts={search()} />
    </div>
  )
};

export default Search;