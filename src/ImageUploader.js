import { useState } from "react";

import { uploadImage } from "./posts/helpers/cloudinary";

function ImageUploader() {

  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState("");

  const handleChange = async e => {
    const files = e.target.files;
    const imgUrl = await uploadImage(files, setIsLoading);
    setImg(imgUrl);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {isLoading ? <p>Loading...</p> : <img src={img} />}
    </div>
  )
};

export default ImageUploader;