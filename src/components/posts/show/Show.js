import { getDateFormat } from "../../../helper/helper";

import classes from "./Show.module.css";

function Show({ name, address, description, img, date, id, remove }) {  
  
  const handleDelete = () => remove(id);
  
  return (
    <div>
      <p>{name}</p>
      <p>{address}</p>
      <p>{description}</p>
      <p>{getDateFormat(date)}</p>
      <img scr={img} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
};

export default Show;