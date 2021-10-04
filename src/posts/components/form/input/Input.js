import classes from "./Input.module.css";

function Input({ name, type, value, onChange, placeholder, isRequired }) {
  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={name}>{name}</label>
      <input
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