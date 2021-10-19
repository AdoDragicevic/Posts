import { createContext } from "react";

import useReducerWithLocalStorage from "../hooks/useReducerWithLocalStorage";

import postsReducer from "../reducers/postsReducer";

import seedData from "../seedData/posts";


export const PostsContext = createContext();

export const PostsDispatchContext = createContext();

export function PostsProvider({ children }) {
  
  const [posts, dispatch] = useReducerWithLocalStorage(postsReducer, seedData, "posts");
  
  return (
    <PostsContext.Provider value={posts}>
      <PostsDispatchContext.Provider value={dispatch}>
        {children}
      </PostsDispatchContext.Provider>
    </PostsContext.Provider>
  )
};