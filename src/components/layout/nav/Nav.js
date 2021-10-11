import Header from "../../UI/header/Header";
import Button from "../../UI/button/Button";

import { Link, useLocation } from "react-router-dom";
import classes from "./Nav.module.css";

function Nav({ content, setContent }) {

  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <nav className={classes.root}>
      <Link to="/posts">
        <Header styles={{ fontSize: "18px" }}> Posts </Header>
      </Link>
      <Link to="/posts/new">
        <Button> {pathname === "/posts" ? "Add new" : "Back"} </Button>
      </Link>
    </nav>
  )
};

export default Nav;