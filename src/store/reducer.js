import slugify from "react-slugify";
import cars from "../cars";
import { ADD_CAR, DELETE_CAR, UPDATE_CAR } from "./actions";

const initialState = { cars: cars };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //------------------------------ADDING
    case ADD_CAR:
      const { newCar } = action.payload;
      newCar.id = state.cars[state.cars.length - 1].id + 1;
      newCar.slug = slugify(action.payload.newCar.name);
      return {
        ...state,
        cars: [...state.cars, action.payload.newCar],
      };
    //------------------------------DELETING
    case DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload.carId),
      };

    //------------------------------UPDATING
    case UPDATE_CAR:
      const { updatedCar } = action.payload;
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === updatedCar.id ? updatedCar : car
        ),
      };
    default:
      return state;
  }
};

export default reducer;
