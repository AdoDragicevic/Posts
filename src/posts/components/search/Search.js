import { findBy } from "../../helpers/search";
import { useState } from "react";
import useToggleState from "../../hooks/useToggleState";

import List from "../list/List";

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
    
      
      <List posts={search()} />
    </div>
  )
};

export default Search;