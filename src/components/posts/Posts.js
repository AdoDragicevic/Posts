import classes from "./Posts.module.css";

function Posts(props) {
  const posts = props.posts.map(post => <p>post</p>);
  return posts;
};

export default Posts;