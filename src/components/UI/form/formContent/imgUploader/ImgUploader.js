import { useRef } from "react";

import Button from "../../../button/Button";
import ImgBox from "../../../../layout/imgBox/ImgBox";

import classes from "./ImgUploader.module.css";


function ImgUploader({ img, onChange }) {

  const input = useRef();

  const handleBtnClick = () => input.current.click();

  const handleChange = e => {
    const files = e.target.files;
    const url = files[0] ? URL.createObjectURL(e.target.files[0]) : null;
    onChange({ files, url });
  };

  return (
    <div className={classes.root}>
      <Button type="button" color="alert" size="small" onClick={handleBtnClick}> Upload </Button>
      <input type="file" accept="image/*" onChange={handleChange} ref={input} hidden/>
      <div className={classes.img}>
        <ImgBox url={img.url ? img.url : null} />
        {!img.url && <p className={classes.msg}> Upload image </p>}
      </div>
    </div>
  )
};

export default ImgUploader;