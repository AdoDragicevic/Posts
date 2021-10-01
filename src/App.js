import useLocalStorageState from "./hooks/useLocalStorageState";

import Posts from "./components/posts/Posts";

import './App.css';

const seedData = [
  {
    name: "Solid Snake",
    address: "Metal Gear Solid",
    description: "Clone of Big Boss",
    img: ""
  },
  {
    name: "Vegeta",
    address: "Dragon Ball Z",
    description: "Bad ass m*** f***",
    img: ""
  }
];

function App() {
  const [posts, setPosts] = useLocalStorageState("posts", seedData);
  return (
    <div className="App">
      <Posts posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default App;
