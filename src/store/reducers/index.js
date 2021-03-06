import { combineReducers } from "redux";
import manufacturerReducer from "./manufacturerReducer";
import carReducer from "./carReducer";

const rootReducer = combineReducers({
  manufacturers: manufacturerReducer,
  cars: carReducer,
});

export default rootReducer;
