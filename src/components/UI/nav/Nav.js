import classes from "./Nav.module.css";

function Nav({ currMode, toggleCurrMode }) {

  const handleClick = e => {

  };

  return (
    <nav className={classes.root}>
      <div>Posts</div>
      <button onClick={handleClick}>
        {currMode === "new" ? "Show All" : "Add New"}
      </button>
    </nav>
  )
};

export default Nav;