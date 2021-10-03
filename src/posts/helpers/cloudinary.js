/*
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
*/

export const uploadImage = async (files, setIsLoading) => {
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
  const image = await res.json();
  setIsLoading(false);
  return image.secure_url;
};