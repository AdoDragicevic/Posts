import classes from "./ImgUploader.module.css";

function ImgUploader({ img, onChange }) {
  
  const handleChange = e => {
    onChange({
      files: e.target.files,
      url: URL.createObjectURL(e.target.files[0])
    });
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <img src={img.url} />
    </div>
  )
};

export default ImgUploader;