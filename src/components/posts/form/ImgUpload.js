function ImgUpload({ onUpload, currImg }) {

  const handleChange = e => {
    onUpload(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div>
        <img src={currImg} />
      </div>
      <div>
        <input type="file" onChange={handleChange} />
      </div>
    </div>
  )
};

export default ImgUpload;