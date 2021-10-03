import Header from "../UI/header/Header";
import Button from "../UI/button/Button";

import classes from "./Show.module.css";

function Show({ title, author, address, description, img, date, id, remove, edit }) {  
  
  const handleDelete = () => remove(id);
  const handleEdit = () => edit(id);

  return (
    <div className={classes.root}>

      <Header>{title}</Header>
      
      <div className={classes.imgBox}>
        <img className={classes.img} src={img} />
      </div>
      
      <p className={classes.author}>
        <em> by </em> {author}
      </p>

      
      <div className={classes.info}> 
        
        <div className={classes.metadata}>
          <a className={classes.link} href ={`mailto: ${address}`}>
            {address}
          </a>
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

    </div>
  )
};

export default Show;