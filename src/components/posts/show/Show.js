import classes from "./Show.module.css";

function Show({ name, address, description, img }) {
  return (
    <div>
      <p>{name}</p>
      <p>{address}</p>
      <p>{description}</p>
      <img scr={img} />
    </div>
  )
};

export default Show;