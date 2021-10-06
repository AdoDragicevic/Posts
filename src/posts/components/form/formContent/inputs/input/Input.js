import classes from "./Input.module.css";

function Input({ type, name, value, onChange, placeholder, isRequired, autoFocus }) {
  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={name}>{name}</label>
      <input
        autoFocus={autoFocus}
        className={classes.input}
        type={type}
        id={name} 
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange} 
        required={isRequired}
        maxLength={75}
      />
    </div>
  );
};

export default Input;