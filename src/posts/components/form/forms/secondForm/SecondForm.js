import { useRef } from "react";
import useStateWithReset from "../../../../hooks/useStateWithReset";

import Button from "../../../UI/button/Button";

import defaultImg from "../../../../imgs/picture.png";

import classes from "./SecondForm.module.css";

function SecondForm({ img, setImg, goBack, toNextFormPage }) {

  const [previewImg, setPreviewImg, resetPreviewImg] = useStateWithReset(null);

  const inputRef = useRef(null);

  const displayedImgURL = ( () => {
    if (img) return img;
    if (previewImg) return previewImg.demo;
    return defaultImg;
  })();

  const handleChange = e => {
    setPreviewImg({
      demo: URL.createObjectURL(e.target.files[0]),
      files: e.target.files
    });
    setImg("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    setImg(previewImg.files);
    toNextFormPage();
  };

  const handleUploadBtnClick = () => {
    inputRef.current.click();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div className={classes.imgBox}>
        <img className={classes.img} src={displayedImgURL} />
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
          onClick={resetPreviewImg}
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