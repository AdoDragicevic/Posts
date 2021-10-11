import Page from "../../layout/page/Page";
import Container from "../../layout/container/Container";
import Search from "./search/Search";

function Index({ posts }) {
  return (
    <Page>
      <Container>
        <Search posts={posts} />
      </Container>
    </Page>
  )
};

export default Index;