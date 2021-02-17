import cars from "../cars";
import { ADD_CAR, DELETE_CAR } from "./actions";

const initialState = { cars: cars };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload.newCar],
      };
    case DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload.carId),
      };
    default:
      return state;
  }
};

export default reducer;
