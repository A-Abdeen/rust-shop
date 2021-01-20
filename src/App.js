import "./App.css";
import products from "./products.js";
import styles from "./styles.js";

function App() {
  const productsList = products.map((product) => {
    return (
      <div>
        <h2>{product.name}</h2>
        <p style={styles.list}>Starting at {product.price} USD</p>
        <img
          styles={style.prodImg}
          alt={product.name}
          src={product.image}
        ></img>
      </div>
    );
  });

  return (
    <div className="App-header">
      <h1>Rust Shop</h1>
      <h4>Everything is worthless, we still make money</h4>
      <img
        style={styles.shopImg}
        alt="Rust Bros shop sign"
        src="./RustBros.jpg"
      ></img>
    </div>
  );
}
export default App;
