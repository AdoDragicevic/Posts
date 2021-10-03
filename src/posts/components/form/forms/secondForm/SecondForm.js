function SecondForm() {
  return <p>Second</p>
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