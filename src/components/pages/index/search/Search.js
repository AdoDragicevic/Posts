import { findBy } from "../../../../helpers/search";
import useSwitchBetweenState from "../../../../hooks/useSwitchBetweenState";
import useInputState from "../../../../hooks/useInputState";

import SearchInput from "./searchInput/SearchInput";
import List from "./list/List";

import classes from "./Search.module.css";

function Search({ posts }) {
  
  const [query, updateQuery] = useInputState("");
  const [criteria, switchCriteria] = useSwitchBetweenState("title", "author");

  const results = findBy(posts, query, criteria);
  
  
  return (
    <div className={classes.root}>
      <SearchInput
        onChange={updateQuery}
        nOfResults={results.length}
        criteria={criteria}
        switchCriteria={switchCriteria} 
      />
      <List posts={results} />
    </div>
  )
};

export default Search;