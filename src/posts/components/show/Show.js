import { IoChevronBackSharp } from "react-icons/io5";

import Header from "../UI/header/Header";
import Button from "../UI/button/Button";

import classes from "./Show.module.css";

function Show({ post, setContent, deletePost, editPost }) {  
  
  const { title, author, address, description, img, date, id } = post;

  const handleDelete = () => deletePost(id);
  const handleEdit = () => editPost(id);
  const handleBack = () => setContent("list");

  return (
    <div className={classes.root}>

      <Header>{title}</Header>
      
      <div className={classes.imgBox}>
        <img className={classes.img} src={img} alt="Post" />
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

      <Button
          type="button"
          size="round"
          color="primary"
          onClick={handleBack}
        >
          <IoChevronBackSharp />
        </Button>

    </div>
  )
};

export default Show;