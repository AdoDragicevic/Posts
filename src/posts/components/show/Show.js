import classes from "./Show.module.css";

function Show({ title, address, description, img, date, id, remove, edit }) {  
  
  const handleDelete = () => remove(id);
  const handleEdit = () => edit(id);

  return (
    <div>
      <p>{title}</p>
      <p>{address}</p>
      <p>{description}</p>
      <p>{date}</p>
      <img scr={img} />
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
};

export default Show;