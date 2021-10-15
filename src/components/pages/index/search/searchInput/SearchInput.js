import classes from "./SearchInput.module.css";

function SearchInput({ criteria, switchCriteria, nOfResults, onChange }) {

  const css = `${classes.input} ${nOfResults === 0 ? classes.red : classes.green}`;

  return (
    <>
      <button className={classes.btn} onClick={switchCriteria}> {`By ${criteria}`} </button>
      <input className={css} type="text" placeholder="Search..." onChange={onChange} />
    </>
  )
};

export default SearchInput;

