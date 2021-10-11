import Header from "../../UI/header/Header";
import Button from "../../UI/button/Button";

import { Link, useLocation } from "react-router-dom";
import classes from "./Nav.module.css";

function Nav({ content, setContent }) {

  const { pathname } = useLocation();

  const btnLink = pathname === "/posts" ? "/posts/new" : "/posts";
  const btnTxt = pathname === "/posts" ? "Add new" : "Back";

  return (
    <nav className={classes.root}>
      <Link to="/posts">
        <Header styles={{ fontSize: "18px" }}> Posts </Header>
      </Link>
      <Link to={btnLink}>
        <Button> {btnTxt} </Button>
      </Link>
    </nav>
  )
};

export default Nav;