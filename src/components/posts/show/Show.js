import { getDateFormat } from "../../../helper/helper";

import classes from "./Show.module.css";

function Show({ name, address, description, img, date }) {  
  return (
    <div>
      <p>{name}</p>
      <p>{address}</p>
      <p>{description}</p>
      <p>{getDateFormat(date)}</p>
      <img scr={img} />
    </div>
  )
};

export default Show;