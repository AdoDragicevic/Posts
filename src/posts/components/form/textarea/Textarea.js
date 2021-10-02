import classes from "./Textarea.module.css";

function Textarea({ name, reference, isRequired }) {
  return (
    <div className={classes.root}>
      <label className={classes.label} htmlFor={name}>
        {name}
      </label>
      <textarea 
      className={classes.textarea}
        id={name} 
        name={name} 
        ref={reference} 
        required={isRequired} 
      />
    </div>
  );
};

export default Textarea;


