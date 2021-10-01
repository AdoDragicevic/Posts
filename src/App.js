import useLocalStorageState from "./hooks/useLocalStorageState";
import { useState } from "react";

import Posts from "./components/posts/Posts";

import './App.css';

function App() {
  const [posts, setPosts] = useLocalStorageState("posts", []);
  return (
    <div className="App">
      <p> hello </p>
    </div>
  );
};

export default App;
