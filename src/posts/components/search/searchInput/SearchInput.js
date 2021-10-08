import classes from "./SearchInput.module.css";

function SearchInput({ mode, switchMode, nOfResults, onChange }) {
  return (
    <div className={classes.root}>
      <button className={classes.btn} onClick={switchMode}>
        Searching by {mode}
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

