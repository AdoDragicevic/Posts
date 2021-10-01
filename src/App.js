import useLocalStorageState from "./hooks/useLocalStorageState";

import Posts from "./components/posts/Posts";

import './App.css';

function App() {
  const [posts, setPosts] = useLocalStorageState("posts", ["hihi", "second post"]);
  return (
    <div className="App">
      <Posts posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default App;
