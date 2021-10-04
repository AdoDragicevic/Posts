import classes from "./FormHeader.module.css";

function FormHeader({ page }) {

  const getMsg = () => {
    switch(page) {
      case 1:
        return "Personal data";
      case 2:
        return "Image";
      case 3:
        return "Content";
    };
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.msg}>{getMsg()}</h3>
    </div>
  )
};

export default FormHeader;