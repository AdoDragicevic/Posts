import Header from "../UI/header/Header";
import Button from "../UI/button/Button";

import classes from "./Show.module.css";

function Show({ title, author, address, description, img, date, id, remove, edit }) {  
  
  const handleDelete = () => remove(id);
  const handleEdit = () => edit(id);

  return (
    <div>
      <Header>{title}</Header>
      <p>{author}</p>
      <p>{address}</p>
      <p>{description}</p>
      <p>{date}</p>
      <img scr={img} />
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  )
};

export default Show;