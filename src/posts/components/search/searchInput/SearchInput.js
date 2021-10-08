import classes from "./SearchInput.module.css";

function SearchInput({ criteria, switchCriteria, nOfResults, onChange }) {

  const css = `${classes.root} ${nOfResults === 0 ? classes.red : classes.green}`;

  return (
    <div className={css}>
      <button className={classes.btn} onClick={switchCriteria}>
        {`Searching by ${criteria}`}
      </button>
      <input
        className={classes.input}
        type="text" 
        placeholder="Search..." 
        onChange={onChange}
      />
    </div>
  )
};

export default SearchInput;

