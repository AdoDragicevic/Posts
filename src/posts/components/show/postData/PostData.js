import Button from "../../UI/button/Button";

import classes from "./PostData.module.css";

function PostData({ post, editPost, deletePost, id }) {

  const { author, date, address } = post;

  const handleEdit = () => editPost(id);
  const handleDelete = () => deletePost(id);


  return (
    <>
      <p className={classes.author}> <em>by</em> {author} </p>
      <div className={classes.container}>
        <div className={classes.left}>
          <a className={classes.link} href ={`mailto: ${address}`}> {address} </a>
          <span>{date}</span>
        </div>
        <div className={classes.right}>
          <Button size="small" color="alert" onClick={handleEdit}> Edit </Button>
          <Button size="small" color="danger" onClick={handleDelete}> Delete </Button>
        </div>
      </div>
    </>
  )
};

export default PostData;