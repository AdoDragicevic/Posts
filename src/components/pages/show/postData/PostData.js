import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { PostsDispatchContext } from "../../../../contexts/postsContext";

import useOnOffState from "../../../../hooks/useOnOffState";

import Button from "../../../UI/button/Button";
import Modal from "../../../layout/modal/Modal";

import classes from "./PostData.module.css";
import ConfirmationBox from "../../../UI/confirmationBox/ConfirmationBox";


function PostData({ post }) {

  const dispatch = useContext(PostsDispatchContext);

  const [isModalShown, showModal, hideModal] = useOnOffState(false);

  const history = useHistory();

  const { author, email, date, id } = post;

  const handleDelete = () => {
    dispatch({ type: "DELETE", id });
    history.push("/posts");
  };

  return (
    <>
      <p className={classes.author}> <em>by</em> {author} </p>
      <div className={classes.container}>
        <div className={classes.left}>
          <a className={classes.link} href ={`mailto: ${email}`}> {email} </a>
          <span>{date}</span>
        </div>
        <div className={classes.right}>
          <Link to={`/posts/${id}/edit`}>
            <Button size="small" color="alert"> Edit </Button>
          </Link>
          <Button size="small" color="danger" onClick={showModal}> Delete </Button>
        </div>
      </div>
      {isModalShown && (
        <Modal closeModal={hideModal}>
          <ConfirmationBox onConfirm={handleDelete} onCancel={hideModal} />
        </Modal>
      )}
    </>
  )
};

export default PostData;