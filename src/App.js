import { Switch, Route, Redirect } from "react-router-dom";

import useTemporaryState from "./hooks/useTemporaryState";

import { PostsProvider } from "./contexts/postsContext";

import Nav from "./components/layout/nav/Nav";
import Page from "./components/layout/page/Page";
import Popup from "./components/layout/popup/Popup";
import Index from "./components/pages/index/Index";
import New from "./components/pages/new/New";
import Show from "./components/pages/show/Show";
import Edit from "./components/pages/edit/Edit";


function App() {
  
  const [notification, setNotification] = useTemporaryState(false, 3000);

  return (
    <div className="App">
      <Nav />
      {notification && <Popup {...notification} />}
      <Page>
        <PostsProvider>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/posts" />
            </Route>
            <Route path="/posts" exact>
              <Index />
            </Route>
            <Route path="/posts/new" exact>
              <New setNotification={setNotification} />
            </Route>
            <Route path="/posts/:id" exact>
              <Show />
            </Route>
            <Route path="/posts/:id/edit" exact>
              <Edit setNotification={setNotification} />
            </Route>
          </Switch>
        </PostsProvider>
      </Page>
    </div>
  );
};

export default App;