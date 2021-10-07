import classes from "./ImgUploader.module.css";

function ImgUploader({ img, onChange }) {

  const handleChange = e => {
    const files = e.target.files;
    const url = files[0] ? URL.createObjectURL(e.target.files[0]) : null;
    onChange({ files, url });
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      <img src={img.url} />
    </div>
  )
};

export default ImgUploader;