import useIncrementState from "../../hooks/useIncrementState";

import FormFooter from "./formFooter/FormFooter";

import classes from "./Form.module.css";


function Form({ post, submit }) {

  const [page, nextPage, previousPage] = useIncrementState(1);

  console.log(page);

  const getHeaderMsg = () => {
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
    <form className={classes.root}>
      
      <div className={classes.header}>
        <p>{getHeaderMsg()}</p>
      </div>

      <div className={classes.body}>

      </div>

      <FormFooter
        txt={page === 3 ? "Submit" : "Next"}  
        back={page === 1 ? null : previousPage}
        next={page === 3 ? submit : nextPage}
      />

    </form>
  )
};

export default Form;