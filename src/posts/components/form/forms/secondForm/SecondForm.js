import useStateWithReset from "../../../../hooks/useStateWithReset";

import Button from "../../../UI/button/Button";

import defaultImg from "../../../../imgs/picture.png";

import classes from "./SecondForm.module.css";

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
      
      <img className={classes.img} src={displayedImgURL} />

      <input 
        type="file" 
        name="file"
        onChange={handleChange}
      />
      
      <div onClick={goBack}>&#8592;</div>
      
      <Button 
        type="button" 
        size="small" 
        color="danger" 
        onClick={resetPreviewImg}
      >
        Delete
      </Button>

      <br/>
      
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