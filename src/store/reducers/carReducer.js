import * as types from "../actions/types";

const initialState = {
  cars: [],
  // loading: true
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    //------------------------------FETCHING FROM BACKEND
    case types.FETCH_CARS:
      return {
        ...state,
        cars: action.payload,
        // loading: false,

        // loading: false Loading screen to buffer between loading from backend and empty
        // array in the initial state above (Refer to last 25 minutes of Fetch Product List Redux Lesson)
      };
    //------------------------------ADDING
    case types.ADD_CAR:
      const { newCar } = action.payload;
      // newCar.id = state.cars[state.cars.length - 1].id + 1;
      // newCar.slug = slugify(action.payload.newCar.name);
      return {
        ...state,
        cars: [...state.cars, newCar],
      };
    //------------------------------DELETING
    case types.DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload.carId),
      };

    //------------------------------UPDATING
    case types.UPDATE_CAR:
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

export default carReducer;
