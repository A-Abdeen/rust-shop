import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";

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
      <Routes />
    </ThemeProvider>
  );
}
export default App;
