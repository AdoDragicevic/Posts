import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";

import Button from "../../../UI/button/Button";

import classes from "./PostContent.module.css";

function PostContent({ description }) {
  return (
    <>
      <div className={classes.content}> 
        {description} 
      </div>
      <Link to="/posts">
        <Button type="button" size="round" color="primary">
          <IoChevronBackSharp />
        </Button>
      </Link>
    </>
  )
};

export default PostContent;