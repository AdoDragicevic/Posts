import { Switch, Route, Redirect } from "react-router-dom";

import { NotificationProvider } from "./contexts/notificationContext";
import { PostsProvider } from "./contexts/postsContext";

import Nav from "./components/layout/nav/Nav";
import Page from "./components/layout/page/Page";
import Popup from "./components/layout/popup/Popup";
import Index from "./components/pages/index/Index";
import New from "./components/pages/new/New";
import Show from "./components/pages/show/Show";
import Edit from "./components/pages/edit/Edit";


function App() {
  return (
    <NotificationProvider>
      <Nav />
      <Page>
        <PostsProvider>
          <Switch>  
            <Route exact path="/" render={() => <Redirect to="/posts" />} />
            <Route exact path="/posts" component={Index} />
            <Route exact path="/posts/new" component={New} />
            <Route exact path="/posts/:id" component={Show} />
            <Route exact path="/posts/:id/edit" component={Edit} />
          </Switch>
        </PostsProvider>
      </Page>
      <Popup />
    </NotificationProvider>
  );
};

export default App;