function ImgUpload({ name, onUpload, isRequired }) {

  const handleChange = e => {
    onUpload(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input 
        id={name}
        type="file" 
        onChange={handleChange} 
        required={isRequired}
      />
    </div>
  )
};

export default ImgUpload;