import { getDateFormat } from "../../../helper/helper";

import classes from "./Show.module.css";

function Show({ name, address, description, img, date, id, remove, edit }) {  
  
  const handleDelete = () => remove(id);
  const handleEdit = () => edit(id);

  return (
    <div>
      <p>{name}</p>
      <p>{address}</p>
      <p>{description}</p>
      <p>{getDateFormat(date)}</p>
      <img scr={img} />
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
};

export default Show;