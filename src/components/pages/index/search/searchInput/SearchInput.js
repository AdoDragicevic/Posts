import classes from "./SearchInput.module.css";

function SearchInput({ criteria, switchCriteria, nOfResults, onChange }) {

  const css = `${classes.root} ${nOfResults === 0 ? classes.red : classes.green}`;
  const btnTxt = `Searching by ${criteria}`;

  return (
    <div className={css}>
      <button className={classes.btn} onClick={switchCriteria}> {btnTxt} </button>
      <input className={classes.input} type="text" placeholder="Search..." onChange={onChange} />
    </div>
  )
};

export default SearchInput;

