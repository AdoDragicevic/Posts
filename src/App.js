import useLocalStorageState from "./hooks/useLocalStorageState";

import Posts from "./posts/components/Posts";

import ImageUploader from "./ImageUploader";

import seedData from "./seedData";

import './App.css';

function App() {
  const [posts, setPosts] = useLocalStorageState("posts", seedData);
  return (
    <div className="App">
      {//<Posts posts={posts} setPosts={setPosts} />
}
      <ImageUploader />
    </div>
  );
};

export default App;
