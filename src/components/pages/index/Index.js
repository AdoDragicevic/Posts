import Container from "../../layout/container/Container";
import Search from "./search/Search";

function Index({ posts }) {
  return (
    <Container>
      <Search posts={posts} />
    </Container>
  )
};

export default Index;