import classes from "./SearchInput.module.css";

function SearchInput({ criteria, switchCriteria, nOfResults, onChange }) {
  return (
    <div className={classes.root}>
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

