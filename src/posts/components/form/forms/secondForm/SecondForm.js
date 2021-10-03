import { useRef } from "react";

import Button from "../../../UI/button/Button";

import defaultImg from "../../../../imgs/picture.png";

import classes from "./SecondForm.module.css";

function SecondForm({ img, setImg, resetImg, goBack, toNextFormPage }) {

  const inputRef = useRef(null);

  const showImg = () => {
    if(!img) return <p className={classes.noImgMsg}>Upload image</p>
    let url = img.demo ? img.demo : img;
    return <img className={classes.img} src={url} />
  };

  const handleChange = e => {
    setImg({
      demo: URL.createObjectURL(e.target.files[0]),
      files: e.target.files
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    toNextFormPage();
  };

  const handleUploadBtnClick = () => inputRef.current.click();

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div className={classes.imgBox}>
        {showImg()}
      </div>
      <div className={classes.btnsBox}>
        <input
          hidden
          ref={inputRef}
          type="file" 
          name="file"
          onChange={handleChange}
        />
        <Button 
          type="button" 
          size="small" 
          color="danger" 
          onClick={handleUploadBtnClick}
        >
          Upload
        </Button>
        <Button 
          type="button" 
          size="small" 
          color="danger" 
          onClick={resetImg}
        >
          Delete
        </Button>
      </div>

      <div className={classes.footer}>
        <div className={classes.goBack} onClick={goBack}>&#8592;</div>
        <Button 
          type="submit" 
          size="large" 
          color="secondary"
          onClick={handleSubmit}
        >
          Next 3/3
        </Button>
      </div>

    </form>
  )
};

export default SecondForm;