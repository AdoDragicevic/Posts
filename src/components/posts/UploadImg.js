import { useState } from "react";

function UploadImg() {
  
  const [file, setFile] = useState(null);

  const handleChange = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <img src={file} />
    </div>
  )
};

export default UploadImg;