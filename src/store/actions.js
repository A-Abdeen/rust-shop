const DELETE_CAR = "DELETE_CAR";

export const deleteCar = (carId) => {
  return {
    type: DELETE_CAR,
    payload: { carId: carId },
  };
};
