import { useDispatch } from "react-redux";
import { deleteCar } from "../store/actions.js";
import { DeleteButtonStyle } from "../styles.js";

const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyle onClick={() => dispatch(deleteCar(props.carId))}>
      Delete
    </DeleteButtonStyle>
  );
};

export default DeleteButton;
