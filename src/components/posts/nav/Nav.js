import classes from "./Nav.module.css";

function Nav({ content, setContent }) {

  const handleClick = e => {
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
      <div className={classes.title}>Posts</div>
      <button onClick={handleClick}> {getBtnTxt()} </button>
    </nav>
  )
};

export default Nav;