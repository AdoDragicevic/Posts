import Header from "../UI/header/Header";
import Button from "../UI/button/Button";

import classes from "./Show.module.css";

function Show({ title, author, address, description, img, date, id, remove, edit }) {  
  
  const handleDelete = () => remove(id);
  const handleEdit = () => edit(id);

  return (
    <div>
      <Header>{title}</Header>
      <h4> <em style={{ fontWeight: 100 }}>by</em> {author}</h4>
      <div className={classes.container}>
        <div className={classes.metadata}>
          <a className={classes.link} href ={`mailto: ${address}`}>{address}</a>
          <span>{date}</span>
        </div>
        <div className={classes.btns}>
          <Button 
              size="small"
              color="alert"
              onClick={handleEdit}
            >
              Edit
            </Button>
            <Button 
              size="small"
              color="danger"
              onClick={handleDelete}
            >
              Delete
          </Button>
        </div>
      </div>
      
      <div className={classes.content}>
        {description}
      </div>
      <img scr={img} />
      
    </div>
  )
};

export default Show;