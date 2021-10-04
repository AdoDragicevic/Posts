import { useRef } from "react";

import Button from "../../../UI/button/Button";

import classes from "./SecondForm.module.css";

function SecondForm({ img, setImg, resetImg, goBack, submit }) {

  const inputRef = useRef(null);

  const showImg = () => {
    if(!img) return <p className={classes.noImgMsg}>Please, upload an image</p>
    let url = img.demo ? img.demo : img;
    return <img className={classes.img} src={url} alt="Current" />
  };

  const handleChange = e => {
    setImg({
      demo: URL.createObjectURL(e.target.files[0]),
      files: e.target.files
    });
  };

  const handleUploadBtnClick = () => inputRef.current.click();

  return (
    <form className={classes.root} onSubmit={submit}>

      <div className={classes.btns}>
        <input
          hidden
          ref={inputRef}
          type="file" 
          name="file"
          onChange={handleChange}
          required
        />
        <Button 
          type="button" 
          size="small" 
          color="alert" 
          onClick={handleUploadBtnClick}
        >
          Upload
        </Button>
        <Button
          type="button" 
          size="small" 
          color="danger" 
          onClick={resetImg}
          isHidden={!img}
        >
          Remove
        </Button>
      </div>

      <div className={classes.imgBox}>
        {showImg()}
      </div>

      <div className={classes.footer}>
        <div className={classes.goBack} onClick={goBack}>&#8592;</div>
        <Button 
          type="submit" 
          size="large" 
          color="primary"
          onClick={img ? submit : null}
        >
          Next
        </Button>
      </div>

    </form>
  )
};

export default SecondForm;