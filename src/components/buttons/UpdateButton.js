import { Link } from "react-router-dom";
import { UpdateButtonStyle } from "../../styles.js";

const UpdateButton = ({ slug }) => {
  return (
    <Link to={`/cars/${slug}/edit`}>
      <UpdateButtonStyle>Edit</UpdateButtonStyle>
    </Link>
  );
};

export default UpdateButton;
