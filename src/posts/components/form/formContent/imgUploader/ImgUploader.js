import classes from "./ImgUploader.module.css";

function ImgUploader({ img, onChange }) {
  
  const handleChange = e => {
    onChange({
      url: e.target.files,
      preview: URL.createObjectURL(e.target.files[0])
    });
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <img src={img.preview} />
    </div>
  )
};

export default ImgUploader;