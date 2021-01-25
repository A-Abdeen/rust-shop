import { findAllByTitle } from "@testing-library/react"
import "./App.css";
import styles from "./styles.js";

const Home = () => {
    const shopImg = "./RustBros.jpg",
    const shopName = "Rust Shop",
    const shopDescription = "Everything is worthless, we still make money"
    ;
    return (
        <div className="App-header">
          <h1 style={styles.text}> {shopName} </h1>
          <h4 style={styles.text}> {shopDescription} </h4>
          <img
            style={styles.shopImg}
            alt="Shop sign from the Rust Bros show"
            
          >{shopImg}</img>
        </div>
      );
    }
export default Home