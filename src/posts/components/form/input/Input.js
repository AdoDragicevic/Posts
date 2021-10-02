import classes from "./Input.module.css";

function TextInput({ name, type, value, onChange, placeholder, isRequired }) {
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
      />
    </div>
  );
};

export default TextInput;