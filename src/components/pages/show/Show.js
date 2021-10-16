
import { useParams } from "react-router-dom";

import Container from "../../layout/container/Container";
import ImgBox from "../../layout/imgBox/ImgBox";
import Header from "../../UI/header/Header";
import PostData from "./postData/PostData";
import PostContent from "./postContent/PostContent";

import classes from "./Show.module.css";

function Show({ posts, deletePost }) {  

  const { id } = useParams();
  const post = posts.find(post => post.id === id);
  const { title, img, description } = post;

  return (
    <Container width="small">
      <Header>{title}</Header>
      <div className={classes.img}>
        <ImgBox url={img} />
      </div>
      <PostData post={post} deletePost={deletePost} />
      <PostContent description={description} />
    </Container>
    
  )
};

export default Show;
