import useLocalStorageState from "./hooks/useLocalStorageState";

import Posts from "./posts/components/Posts";

import seedData from "./seedData";

import './App.css';

function App() {
  const [posts, setPosts] = useLocalStorageState("posts", seedData);
  return (
    <div className="App">
      <Posts posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default App;
