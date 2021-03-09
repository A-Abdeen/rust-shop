import { combineReducers } from "redux";
import manufacturerReducer from "./manufacturerReducer";
import carReducer from "./carReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  manufacturers: manufacturerReducer,
  cars: carReducer,
  auths: authReducer,
});

export default rootReducer;
