import { IoChevronBackSharp } from "react-icons/io5";

import Button from "../../UI/button/Button";

import classes from "./postContent/PostContent.css";

function PostContent() {
  return (
    <>
      <div className={classes.content}> 
        {description} 
      </div>
      <Button type="button" size="round" color="primary" onClick={handleBack}>
        <IoChevronBackSharp />
      </Button>
    </>
  )
};

export default PostContent;