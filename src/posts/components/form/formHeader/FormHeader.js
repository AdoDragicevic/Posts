import classes from "./FormHeader.module.css";

function FormHeader({ page }) {

  const getMsg = () => {
    switch(page) {
      case 0:
        return "1/3 Post data";
      case 1:
        return "2/3 Post image";
      case 2:
        return "3/3 Post content";
    };
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.msg}>
        {getMsg()}
      </h3>
    </div>
  )
};

export default FormHeader;