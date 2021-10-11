
import { useParams } from "react-router-dom";

import Container from "../../layout/container/Container";
import ImgBox from "../../layout/imgBox/ImgBox";
import Header from "../../UI/header/Header";
import PostData from "./postData/PostData";
import PostContent from "./postContent/PostContent";


function Show({ posts }) {  

  const { id } = useParams();
  const post = posts.find(post => post.id === id);
  const { title, img, description } = post;

  return (
    <Container width="small">
      <Header>{title}</Header>
      <ImgBox url={img} />
      <PostData {...post} />
      <PostContent description={description} />
    </Container>
    
  )
};

export default Show;
