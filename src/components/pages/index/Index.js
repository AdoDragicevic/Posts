import Container from "../../layout/container/Container";
import Search from "./search/Search";
import List from "./list/List";

function Index({ posts }) {
  return (
    <Container>
      <Search posts={posts} />
      <List posts={posts} />
    </Container>
  )
};

export default Index;