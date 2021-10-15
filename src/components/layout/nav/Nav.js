import { Link, useLocation } from "react-router-dom";

import useScreenWidthState from "../../../hooks/useScreenWidthState";

import Header from "../../UI/header/Header";
import Button from "../../UI/button/Button";

import classes from "./Nav.module.css";

function Nav() {

  const [btnSize] = useScreenWidthState(620, "small", "medium");

  const { pathname } = useLocation();
  
  const btnLink = pathname === "/posts" ? "/posts/new" : `/`;
  const btnTxt = pathname === "/posts" ? "Add new" : "Back";

  return (
    <nav className={classes.root}>
      <Link to="/posts">
        <Header styles={{ fontSize: 18, cursor: "pointer" }}> Posts </Header>
      </Link>
      <Link to={btnLink}>
        <Button size={btnSize}> {btnTxt} </Button>
      </Link>
    </nav>
  )
};

export default Nav;