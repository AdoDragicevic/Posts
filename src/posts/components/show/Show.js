import Header from "../UI/header/Header";
import PostData from "./postData/PostData";
import PostContent from "./postContent/PostContent";
import ImgBox from "../UI/imgBox/ImgBox";

import classes from "./Show.module.css";

function Show({ post, setContent, deletePost, editPost }) {  
  
  const { title, description, img } = post;

  const goBack = () => setContent("list");


  return (
    <div className={classes.root}>
      <Header>{title}</Header>
      <ImgBox url={img} />
      <PostData post={post} editPost={editPost} deletePost={deletePost} />
      <PostContent description={description} back={goBack} />
    </div>
  )
};

export default Show;