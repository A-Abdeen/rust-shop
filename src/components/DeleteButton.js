import { DeleteButtonStyle } from "../styles.js";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteCar(props.car.id);
    props.setCar(null);
  };

  return <DeleteButtonStyle onClick={handleDelete}>Delete</DeleteButtonStyle>;
  // return (
  //   <button type="button" class="btn btn-outline-danger" onClick={handleDelete}>
  //     Delete
  //   </button>
  // );
};

export default DeleteButton;
