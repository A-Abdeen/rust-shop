import { DeleteButtonStyle } from "../styles.js";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteCar(props.car.id);
    props.setCar(null);
  };

  return <DeleteButtonStyle onClick={handleDelete}>Delete</DeleteButtonStyle>;
};

export default DeleteButton;
