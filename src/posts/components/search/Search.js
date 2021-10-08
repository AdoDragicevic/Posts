import { findBy } from "../../helpers/search";
import useSwitchBetweenState from "../../hooks/useSwitchBetweenState";
import useInputState from "../../hooks/useInputState";

import Header from "../UI/header/Header";
import SearchInput from "./searchInput/SearchInput";
import List from "../list/List";

import classes from "./Search.module.css";

function Search({ posts, openPost }) {
  const [query, updateQuery] = useInputState("");
  const [criteria, switchCriteria] = useSwitchBetweenState("title", "author");

  const results = findBy(posts, query, criteria);
  
  return (
    <div className={classes.root}>
      <Header>Posts</Header>
      <SearchInput
        onChange={updateQuery}
        nOfResults={results.length}
        criteria={criteria}
        switchCriteria={switchCriteria} 
      />
      <List posts={results} openPost={openPost} />
    </div>
  )
};

export default Search;