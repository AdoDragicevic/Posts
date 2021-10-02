import ImgUpload from "../../imgUpload/ImgUpload";
import Button from "../../../UI/button/Button";

function SecondForm({ img, goBack, submit }) {
  return (
    <form onSubmit={submit}>
      <img src={img} />
      <ImgUpload name="image" />
      <div onClick={goBack}>&#8592;</div>
      <Button type="submit">
        Next 3/3
      </Button>
    </form>
  )
};

export default SecondForm;