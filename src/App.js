import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, ThemeButton } from "./styles";
import CarYard from "./components/CarYard.js";
import Home from "./components/Home.js";
import CarDetail from "./components/CarDetail.js";
import cars from "./cars.js";

const theme = {
  dark: {
    mainColor: "#F3EBE4",
    backgroundColor: "#4f3a3c",
    rust: "#B7410E",
  },
  light: {
    mainColor: "#4f3a3c",
    backgroundColor: "#F3EBE4",
    rust: "#B7410E",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_cars, setCars] = useState(cars);
  const [car, setCar] = useState(null);
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  const buttonText = () => {
    if (currentTheme === "light") return "Too bright?";
    else return "Too dark?";
  };

  const deleteCar = (carId) => {
    const availableCars = _cars.filter((car) => car.id !== carId);
    setCars(availableCars);
  };

  const display = car ? (
    <CarDetail car={car} setCar={setCar} deleteCar={deleteCar} />
  ) : (
    <CarYard cars={_cars} setCar={setCar} deleteCar={deleteCar} />
  );

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>{buttonText()}</ThemeButton>
      <Switch>
        <Route path="/yard">{display}</Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
export default App;
