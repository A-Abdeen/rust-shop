import instance from "./instance";
// ACTION TYPES
import * as types from "./types";
// ACTIONS

//------------------------------FETCHING FROM BACKEND
export const fetchManufacturers = () => async (dispatch) => {
  try {
    const res = await instance.get("/manufacturers");
    dispatch({
      type: types.FETCH_MANUFACTURERS,
      payload: res.data,
    });
  } catch (err) {}
};

//------------------------------CREATING
export const createManufacturer = (newManufacturer) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newManufacturer)
      formData.append(key, newManufacturer[key]);
    const res = await instance.post("/manufacturers", formData);
    dispatch({
      type: types.CREATE_MANUFACTURER,
      payload: { newManufacturer: res.data },
    });
  } catch (err) {}
};
