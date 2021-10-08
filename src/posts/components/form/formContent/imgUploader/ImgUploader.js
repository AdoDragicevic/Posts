import { useRef } from "react";
import Button from "../../../UI/button/Button";

import classes from "./ImgUploader.module.css";

function ImgUploader({ img, onChange }) {

  const input = useRef();


  const handleChange = e => {
    const files = e.target.files;
    const url = files[0] ? URL.createObjectURL(e.target.files[0]) : null;
    onChange({ files, url });
  };

  return (
    <div className={classes.root}>
      <Button
        type="button"
        color="alert"
        size="small"
        onClick={() => input.current.click()}
      >
        Upload
      </Button>
      <input type="file" accept="image/*" onChange={handleChange} ref={input} hidden/>
      <div className={classes.imgBox}>
        <img className={classes.img} src={img.url} alt={img.url ? "Uploaded" : null} />
      </div>
      
    </div>
  )
};

export default ImgUploader;