import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import CarYard from "./components/CarYard.js";
import Home from "./components/Home.js";
import CarDetail from "./components/CarDetail.js";
import NavBar from "./components/NavBar";
import CarForm from "./components/CarForm";

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
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  const buttonText = () => {
    if (currentTheme === "light") return "Too bright?";
    else return "Too dark?";
  };

  // #723624 New pallete

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
        buttonText={buttonText}
      />
      <Switch>
        <Route path="/cars/new">
          <CarForm />
        </Route>
        <Route path="/cars/:carSlug">
          <CarDetail />
        </Route>
        <Route path="/cars">
          <CarYard />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
export default App;
