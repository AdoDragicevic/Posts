import { Link, useHistory, useLocation } from "react-router-dom";

import useScreenWidthState from "../../../hooks/useScreenWidthState";

import Header from "../../UI/header/Header";
import Button from "../../UI/button/Button";

import classes from "./Nav.module.css";

function Nav() {

  const [btnSize] = useScreenWidthState(620, "small", "medium");

  const history = useHistory();
  const { pathname } = useLocation();
  
  const btnTxt = pathname === "/posts" ? "Add new" : "Back";
  const handleBtnClick = () => pathname === "/posts" ? history.push("/posts/new") : history.goBack();

  return (
    <nav className={classes.root}>
      <Link to="/posts">
        <Header styles={{ fontSize: 18, cursor: "pointer" }}> Posts </Header>
      </Link>
      <Button size={btnSize} onClick={handleBtnClick}> {btnTxt} </Button>
    </nav>
  )
};

export default Nav;