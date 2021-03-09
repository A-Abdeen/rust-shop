import instance from "./instance";
import decode from "jwt-decode"; // return an object from token

// ACTION TYPES
import * as types from "./types";

// ACTIONS

//------------------------------Sign Up

export const signup = (newUser, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signup", newUser);
    dispatch({
      type: types.SET_USER,
      payload: decode(res.data.token),
    });
    history.push("/");
  } catch (err) {}
};

//------------------------------Sign In

export const signIn = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", userData);
    dispatch({
      type: types.SET_USER,
      payload: decode(res.data.token),
    });
    history.push("/");
  } catch (err) {}
};

export const signOut = () => {
  localStorage.removeItem("myToken");
  delete instance.defaults.headers.common.Authorization;

  return {
    type: types.SET_USER,
    payload: null,
  };
};
