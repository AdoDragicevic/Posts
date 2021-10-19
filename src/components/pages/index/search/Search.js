import { useContext } from "react";
import { PostsContext } from "../../../../contexts/postsContext";

import { findBy } from "../../../../helpers/search";
import useSwitchBetweenState from "../../../../hooks/useSwitchBetweenState";
import useInputState from "../../../../hooks/useInputState";

import SearchInput from "./searchInput/SearchInput";
import List from "./list/List";


function Search() {

  const posts = useContext(PostsContext);
  
  const [query, updateQuery] = useInputState("");
  const [criteria, switchCriteria] = useSwitchBetweenState("title", "author");

  const results = findBy(posts, query, criteria);
   
  return (
    <>
      <SearchInput
        onChange={updateQuery}
        nOfResults={results.length}
        criteria={criteria}
        switchCriteria={switchCriteria} 
      />
      <List posts={results} />
    </>
  )
};

export default Search;