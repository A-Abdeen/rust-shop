// import "./App.css";
import CarYard from "./components/CarYard.js";
import Home from "./components/Home.js";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#C0C0C0",
  backgroundColor: "#282c34",
  rust: "#A9371F",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <CarYard />
    </ThemeProvider>
  );
}
export default App;
