export const ADD_CAR = "ADD_CAR";
export const DELETE_CAR = "DELETE_CAR";

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
