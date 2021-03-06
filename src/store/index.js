import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { fetchCars } from "./actions/carActions";
import { fetchManufacturers } from "./actions/manufacturerActions";

// FOR REDUX DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// TO INCORPORATE THUNK (WHICH IS A MIDDLEWARE) AND DELAY THE ASYNC WHEN HANDLING FROM BACKEND
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// TO FETCH CARS ONE TIME ONLY (WHEN APPLICATION STARTS)
store.dispatch(fetchCars());
store.dispatch(fetchManufacturers());

export default store;
