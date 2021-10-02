import classes from "./Input.module.css";

function TextInput({ name, type, reference, isRequired }) {
  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={name}>{name}</label>
      <input 
        className={classes.input}
        type={type}
        id={name} 
        name={name}
        ref={reference} 
        required={isRequired} 
      />
    </div>
  );
};

export default TextInput;