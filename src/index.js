import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { fetchCars } from "./store/actions";
import thunk from "redux-thunk";

// FOR REDUX DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// TO INCORPORATE THUNK (WHICH IS A MIDDLEWARE) AND DELAY THE ASYNC WHEN HANDLING FROM BACKEND
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// TO FETCH CARS ONE TIME ONLY (WHEN APPLICATION STARTS)
store.dispatch(fetchCars());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
