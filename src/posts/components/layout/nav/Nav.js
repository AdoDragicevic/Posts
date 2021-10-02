import classes from "./Nav.module.css";

function Nav({ content, setContent }) {

  const handleClick = () => {
    const nextContent = content === "list" ? "new" : "list";
    setContent(nextContent);
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
      <h1 className={classes.title}>Posts</h1>
      <button className={classes.btn} onClick={handleClick}> {getBtnTxt()} </button>
    </nav>
  )
};

export default Nav;