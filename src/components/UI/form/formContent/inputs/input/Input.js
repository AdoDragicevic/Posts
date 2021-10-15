import classes from "./Input.module.css";


function Input({ type, name, value, onChange, placeholder, isRequired, icon }) {
  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={name}> {name} </label>
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
      <i className={classes.icon}> {icon} </i>
    </div>
  );
};

export default Input;