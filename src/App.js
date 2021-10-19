import { Switch, Route, Redirect } from "react-router-dom";

import useReducerWithLocalStorage from "./hooks/useReducerWithLocalStorage";
import useTemporaryState from "./hooks/useTemporaryState";

import postsReducer from "./reducers/postsReducer";

import Nav from "./components/layout/nav/Nav";
import Page from "./components/layout/page/Page";
import Popup from "./components/layout/popup/Popup";
import Index from "./components/pages/index/Index";
import New from "./components/pages/new/New";
import Show from "./components/pages/show/Show";
import Edit from "./components/pages/edit/Edit";

import seedData from "./seedData/posts";


function App() {

  const [posts, dispatch] = useReducerWithLocalStorage(postsReducer, seedData, "posts");
  const [notification, setNotification] = useTemporaryState(false, 3000);
  

  return (
    <div className="App">
      <Nav />
      {notification && <Popup {...notification} />}
      <Page>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/posts" />
          </Route>
          <Route path="/posts" exact>
            <Index posts={posts} />
          </Route>
          <Route path="/posts/new" exact>
            <New dispatch={dispatch} setNotification={setNotification} />
          </Route>
          <Route path="/posts/:id" exact>
            <Show posts={posts} dispatch={dispatch} />
          </Route>
          <Route path="/posts/:id/edit" exact>
            <Edit posts={posts} dispatch={dispatch} setNotification={setNotification} />
          </Route>
        </Switch>
      </Page>
    </div>
  );
};

export default App;