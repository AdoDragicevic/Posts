import { IoChevronBackSharp } from "react-icons/io5";

import Header from "../UI/header/Header";
import PostData from "./postData/PostData";
import Button from "../UI/button/Button";

import classes from "./Show.module.css";

function Show({ post, setContent, deletePost, editPost }) {  
  
  const { title, description, img } = post;

  const handleBack = () => setContent("list");

  return (
    <div className={classes.root}>
      <Header>{title}</Header>
      <div className={classes.imgBox}>
        <img className={classes.img} src={img} alt="Post" />
      </div>
      <PostData post={post} editPost={editPost} deletePost={deletePost} />
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