import { Link } from "react-router-dom";

import useOnOffState from "../../../../hooks/useOnOffState";

import Button from "../../../UI/button/Button";
import Modal from "../../../layout/modal/Modal";

import classes from "./PostData.module.css";
import ConfirmationBox from "../../../UI/confirmationBox/ConfirmationBox";

function PostData({ author, address, date, id }) {

  const [isModalShown, showModal, hideModal] = useOnOffState(false);


  return (
    <>
      <p className={classes.author}> <em>by</em> {author} </p>
      <div className={classes.container}>
        <div className={classes.left}>
          <a className={classes.link} href ={`mailto: ${address}`}> {address} </a>
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
          <ConfirmationBox onConfirm={null} onCancel={hideModal} />
        </Modal>
      )}
    </>
  )
};

export default PostData;