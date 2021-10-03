import { findBy } from "../../helpers/search";
import { useState } from "react";
import useToggleState from "../../hooks/useToggleState";

import Header from "../UI/header/Header";
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
      <Header>Posts</Header>
      <div className={classes.searchContent}>
        <button className={classes.btn} onClick={toggleIsSearchByTitle}>
          {`Searching by ${isSearchByTitle ? "title" : "author"}`}
        </button>
        <input
          className={classes.input}
          type="text" 
          placeholder="Search..." 
          onChange={handleInputChange} 
        />
      </div>
      <List posts={search()} show={show} />
    </div>
  )
};

export default Search;