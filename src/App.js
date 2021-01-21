import "./App.css";
import products from "./products.js";
import styles from "./styles.js";

function App() {
  const productsList = products.map((product) => {
    return (
      <div>
        <img
          style={styles.prodImg}
          alt={product.name}
          src={product.image}
        ></img>
        <p style={styles.list}>{product.name}</p>
        <p>{product.price} USD</p>
      </div>
    );
  });

  return (
    <div className="App-header">
      <h1 style={styles.text}>Rust Shop</h1>
      <h4 style={styles.text}>Everything is worthless, we still make money</h4>
      <img
        style={styles.shopImg}
        alt="Rust Bros shop sign"
        src="./RustBros.jpg"
      ></img>
      <div style={styles.list}> {productsList}</div>
    </div>
  );
}
export default App;
