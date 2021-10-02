import { findBy } from "../../helpers/search";
import { useState } from "react";
import useToggleState from "../../hooks/useToggleState";

import List from "../list/List";

import classes from "./Search.module.css";

function Search({ posts, show }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchByTitle, toggleIsSearchByTitle] = useToggleState();
  
  const handleInputChange = e => setSearchTerm(e.target.value);

  const search = () => {
    const key = isSearchByTitle ? "title" : "author";
    return findBy(posts, searchTerm, key);
  };
  
  return (
    <div className={classes.root}>
      <button onClick={toggleIsSearchByTitle}>
        {`Search ${isSearchByTitle ? "author" : "title"}`}
      </button>
      <input 
        type="text" 
        placeholder={`${isSearchByTitle ? "Search by post title" : "Search by author"}`} 
        onChange={handleInputChange} 
      />
      <List posts={search()} show={show} />
    </div>
  )
};

export default Search;