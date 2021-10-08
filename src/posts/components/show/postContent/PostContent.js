import { IoChevronBackSharp } from "react-icons/io5";

import Button from "../../UI/button/Button";

import classes from "./PostContent.module.css";

function PostContent({ description, goBack }) {
  return (
    <>
      <div className={classes.content}> 
        {description} 
      </div>
      <Button type="button" size="round" color="primary" onClick={goBack}>
        <IoChevronBackSharp />
      </Button>
    </>
  )
};

export default PostContent;