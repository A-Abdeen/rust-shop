import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, ThemeButton } from "./styles";
import CarYard from "./components/CarYard.js";
import Home from "./components/Home.js";

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

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>{buttonText()}</ThemeButton>
      <Home />
      <CarYard />
    </ThemeProvider>
  );
}
export default App;
