import axios from "axios";
// ACTION TYPES
export const ADD_CAR = "ADD_CAR";
export const DELETE_CAR = "DELETE_CAR";
export const UPDATE_CAR = "UPDATE_CAR";
export const FETCH_CARS = "FETCH_CARS";

// ACTIONS
export const fetchCars = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8000/cars");
      dispatch({
        type: FETCH_CARS,
        payload: response.data,
      });
    } catch (err) {
      console.error();
    }
  };
};

export const addCar = (newCar) => ({
  type: ADD_CAR,
  payload: { newCar },
});

export const deleteCar = (carId) => {
  return {
    type: DELETE_CAR,
    payload: { carId: carId },
  };
};

export const updateCar = (updatedCar) => {
  return {
    type: UPDATE_CAR,
    payload: { updatedCar },
  };
};
