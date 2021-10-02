import Button from "../../UI/button/Button";
import Header from "../../UI/header/Header";

import classes from "./Nav.module.css";

function Nav({ content, setContent }) {

  const handleBtnClick = () => {
    const nextContent = content === "list" ? "new" : "list";
    setContent(nextContent);
  };

  const handleHeaderClick = () => {
    setContent("list");
  };

  const getBtnTxt = () => {
    switch(content) {
      case "new":
        return "Show all";
      case "list":
        return "Add new";
      default:
        return "Back";
    }
  };

  return (
    <nav className={classes.root}>
      <Header onClick={handleHeaderClick} styles={{ fontSize: "18px" }}>
        Posts
      </Header>
      <Button onClick={handleBtnClick}>
        {getBtnTxt()}
      </Button>
    </nav>
  )
};

export default Nav;