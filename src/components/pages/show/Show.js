
import { useParams } from "react-router-dom";

import Page from "../../layout/page/Page";

function Show({ posts }) {  

  const { id } = useParams();
  const post = posts.find(post => post.id === id);
  const { title, author, address, content, date } = post;

  return (
    <Page>
      
    </Page>
    
  )
};

export default Show;