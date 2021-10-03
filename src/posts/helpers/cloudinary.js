export const uploadImage = async files => {
  const data = new FormData();
  data.append("file", files[0]);
  data.append("upload_preset", "adodragi");
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dggbkwj5l/image/upload",
    {
      method: "POST",
      body: data
    }
  );
  const image = await res.json();
  return image.secure_url;
};