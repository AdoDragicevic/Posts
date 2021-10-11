import Page from "../../layout/page/Page";
import Container from "../../layout/container/Container";
import Search from "./search/Search";
import List from "./list/List";

function Index({ posts }) {
  return (
    <Page>
      <Container>
        <Search posts={posts} />
        <List posts={posts} />
      </Container>
    </Page>
  )
};

export default Index;