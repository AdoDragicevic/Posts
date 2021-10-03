import { useState } from "react";
import useStateWithReset from "../../../../hooks/useStateWithReset";

import Button from "../../../UI/button/Button";

import defaultImg from "../../../../imgs/picture.png";

function SecondForm({ img, setImg, goBack, toNextFormPage }) {

  const [previewImg, setPreviewImg, resetPreviewImg] = useStateWithReset(null);

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

  return (
    <form onSubmit={handleSubmit}>
      
      <input 
        type="file" 
        name="file"
        onChange={handleChange}
      />
      
      <img src={displayedImgURL} />
      
      <div onClick={goBack}>&#8592;</div>
      
      <Button 
        type="button" 
        size="small" 
        color="danger" 
        onClick={resetPreviewImg}
      >
        Delete
      </Button>
      
      <Button 
        type="submit" 
        size="large" 
        color="secondary"
        onClick={handleSubmit}
      >
        Next 3/3
      </Button>
    </form>
  )
};

export default SecondForm;