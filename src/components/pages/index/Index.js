import Container from "../../layout/container/Container";
import Header from "../../UI/header/Header";
import Search from "./search/Search";

function Index() {
  return (
    <Container>
      <Header>Posts</Header>
      <Search />
    </Container>
  )
};

export default Index;