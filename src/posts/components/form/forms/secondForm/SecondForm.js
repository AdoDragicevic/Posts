import { useState } from "react";
import Button from "../../../UI/button/Button";

import defaultImg from "../../../../imgs/picture.png";

function SecondForm({ img, setImg, goBack, toNextFormPage }) {

  const [previewImg, setPreviewImg] = useState(null);

  const image = ( () => {
    if (img) return img;
    if (previewImg) return previewImg.demo;
    else return defaultImg;
  })();

  const handleChange = e => {
    setImg("");
    setPreviewImg({
      demo: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0]
    });
  };

  const handleRemove = () => {
    setPreviewImg(null);
    if (img !== "") setImg("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    setImg(previewImg.files)
    toNextFormPage();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="file" 
        name="file"
        onChange={handleChange}
      />
      <Button 
        type="submit" 
        size="large" 
        color="secondary"
        onClick={handleSubmit}
      >
        Next 3/3
      </Button>
      <div>
        <img src={image} />
        <div onClick={goBack}>&#8592;</div>
        <Button type="button" size="small" color="danger" onClick={handleRemove}>
          Remove img
        </Button>
      </div>
      
    </form>
  )
};

export default SecondForm;



/*


import { useState } from "react"
import useToggleState from "../../../../hooks/useToggleState";

import Button from "../../../UI/button/Button";

import defaultImg from "../../../../imgs/picture.png";

import classes from "./SecondForm.module.css";

function SecondForm({ imgURL, setImgURL, goBack, submit }) {
  
  const [isLoading, toggleIsLoading] = useToggleState(false);
  const [img, setImg] = useState(imgURL || "");

  const handleImgUpload = e => {

  };


  return (
    <form onSubmit={submit}>
      <div>
        <img src={img === "" ? defaultImg : img} />
        
      </div>
      
    </form>
  )
};

export default SecondForm;

*/

/*
import ImgUpload from "../../imgUpload/ImgUpload";
import Button from "../../../UI/button/Button";

function SecondForm({ img, goBack, submit }) {
  return (
    <form onSubmit={submit}>
      <img src={img} />
      <ImgUpload name="image" />
      <div onClick={goBack}>&#8592;</div>
      <Button type="submit" size="large" color="secondary">
        Next 3/3
      </Button>
    </form>
  )
};

export default SecondForm;

*/