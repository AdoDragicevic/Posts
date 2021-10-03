import { useState } from "react/cjs/react.development";

function ImageUploader() {

  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState("");

  const handleChange = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "adodragi");
    setIsLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dggbkwj5l/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    setImg(file.secure_url);
    setIsLoading(false);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {isLoading ? <p>Loading...</p> : <img src={img} />}
    </div>
  )
};

export default ImageUploader;