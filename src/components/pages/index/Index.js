import Container from "../../layout/container/Container";
import Header from "../../UI/header/Header";
import Search from "./search/Search";

function Index({ posts }) {
  return (
    <Container>
      <Header>Pages</Header>
      <Search posts={posts} />
    </Container>
  )
};

export default Index;