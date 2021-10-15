import { Switch, Route, Redirect } from "react-router-dom";

import useLocalStorageState from "./hooks/useLocalStorageState";
import useTemporaryState from "./hooks/useTemporaryState";

import Nav from "./components/layout/nav/Nav";
import Page from "./components/layout/page/Page";
import Popup from "./components/layout/popup/Popup";
import Index from "./components/pages/index/Index";
import New from "./components/pages/new/New";
import Show from "./components/pages/show/Show";
import Edit from "./components/pages/edit/Edit";

import seedData from "./seedData";


function App() {
  
  const [posts, setPosts] = useLocalStorageState("posts", seedData);
  const [notification, setNotification] = useTemporaryState(false, 3000);

  const addPost = newPost => {
    setPosts( [newPost, ...posts] );
    setNotification({ isSuccess: true, txt: "Post published!" });
  };

  const deletePost = id => {
    setPosts( posts.filter(post => post.id !== id) );
    setNotification({ isSuccess: true, txt: "Post deleted!" });
  };

  const updatePost = (id, newPost) => {
    const otherPosts = posts.filter(post => post.id !== id);
    setPosts([newPost,...otherPosts]);
    setNotification({ isSuccess: true, txt: "Post updated!" });
  };


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
            <Index posts={posts} setPosts={setPosts} />
          </Route>
          <Route path="/posts/new" exact>
            <New addPost={addPost} setNotification={setNotification} />
          </Route>
          <Route path="/posts/:id" exact>
            <Show posts={posts} deletePost={deletePost} />
          </Route>
          <Route path="/posts/:id/edit" exact>
            <Edit posts={posts} updatePost={updatePost} setNotification={setNotification} />
          </Route>
        </Switch>
      </Page>
    </div>
  );
};

export default App;