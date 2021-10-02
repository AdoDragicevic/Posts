import classes from "./Button.module.css";

function Button({ children, type, styles, size, color, onClick }) {
  
  const css = `
    ${classes.btn}
    ${size ? classes[size] : classes.medium} 
    ${color ? classes[color] : classes.primary}
  `;

  return (
    <button 
      className={css} 
      type={type}
      onClick={onClick} 
      style={styles}
    >
      {children}
    </button>
  ) 
};

export default Button;