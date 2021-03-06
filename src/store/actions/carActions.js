import instance from "./instance";

// ACTION TYPES
import * as types from "./types";
// ACTIONS

//------------------------------FETCHING FROM BACKEND
export const fetchCars = () => async (dispatch) => {
  try {
    const res = await instance.get("/cars");
    dispatch({
      type: types.FETCH_CARS,
      payload: res.data,
    });
  } catch (err) {
    console.error();
  }
};

//------------------------------ADDING

export const addCar = (newCar) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newCar) formData.append(key, newCar[key]);
    const res = await instance.post(
      `/manufacturers/${newCar.manufacturerId}/cars`,
      formData
    );
    dispatch({
      type: types.ADD_CAR,
      payload: { newCar: res.data },
    });
  } catch (err) {}
};
//------------------------------DELETING
export const deleteCar = (carId) => async (dispatch) => {
  try {
    await instance.delete(`/cars/${carId}`);
    dispatch({
      type: types.DELETE_CAR,
      payload: { carId },
    });
  } catch (err) {}
};

//------------------------------UPDATING
export const updateCar = (updatedCar) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedCar) formData.append(key, updatedCar[key]);
    const res = await instance.put(`/cars/${updatedCar.id}`, formData);
    dispatch({
      type: types.UPDATE_CAR,
      payload: { updatedCar: res.data },
    });
  } catch (err) {}
};
