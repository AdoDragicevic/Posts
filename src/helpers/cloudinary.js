const url = "https://api.cloudinary.com/v1_1/dggbkwj5l/image/upload";

export const uploadImage = async files => {
  const data = new FormData();
  data.append("file", files[0]);
  data.append("upload_preset", "adodragi");
  return await fetch(url, { method: "POST", body: data })
  .then(async res => await res.json())
  .then(res => res.secure_url)
  .catch(() => null);
};