import classes from "./Page.module.css";

function Page({ children }) {
  return <div className={classes.root}> {children} </div>;
};

export default Page;