import carsData from "../cars";

const initialState = { cars: carsData };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_CAR":
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload.carId),
      };
    default:
      return state;
  }
};

export default reducer;
