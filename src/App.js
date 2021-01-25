import "./App.css";
import CarYard from "./components/CarYard.js";
import styles from "./styles.js";


function App() {
  

  return (
    <div className="App-header">
      <h1 style={styles.text}>Rust Shop</h1>
      <h4 style={styles.text}>Everything is worthless, we still make money</h4>
      <img style={styles.shopImg}
        alt="Rust Bros shop sign"
        src="./RustBros.jpg"
      ></img>
      <CarYard />
    </div>
  );
}
export default App;
