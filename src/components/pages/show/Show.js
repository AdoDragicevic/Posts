
import { useParams } from "react-router-dom";

import Container from "../../layout/container/Container";

function Show({ posts }) {  

  const { id } = useParams();
  const post = posts.find(post => post.id === id);
  const { title, author, address, content, date } = post;

  return (
    <Container width="smaill">
      <Header>{title}</Header>
      <ImgBox url={img} />
      <PostData post={post} editPost={editPost} deletePost={deletePost} />
      <PostContent description={description} goBack={goBack} />
    </Container>
    
  )
};

export default Show;
