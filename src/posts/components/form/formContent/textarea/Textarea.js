import classes from "./Textarea.module.css";

function Textarea({ name, value, onChange, isRequired }) {
  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={name}>
        {name}
      </label>
      <textarea 
        className={classes.textarea}
        id={name} 
        name={name}
        value={value}
        onChange={onChange}
        required={isRequired} 
      />
    </div>
  );
};

export default Textarea;


