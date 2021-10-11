import { Switch, Route, Redirect } from "react-router-dom";

import useLocalStorageState from "./hooks/useLocalStorageState";

import Nav from "./components/layout/nav/Nav";
import Index from "./components/pages/index/Index";
import New from "./components/pages/new/New";
import Show from "./components/pages/show/Show";
import Edit from "./components/pages/edit/Edit";

import seedData from "./seedData";

import './App.css';

function App() {
  
  const [posts, setPosts] = useLocalStorageState("posts", seedData); 


  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/posts" />
        </Route>
        <Route path="/posts" exact>
          <Index posts={posts} setPosts={setPosts} />
        </Route>
        <Route path="/posts/new" exact>
          <New />
        </Route>
        <Route path="/posts/:id" exact>
          <Show posts={posts} />
        </Route>
        <Route path="/posts/:id/edit" exact>
          <Edit posts={posts} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;