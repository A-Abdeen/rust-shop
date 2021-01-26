import React from "react";
import "../App.css";
import styles from "../styles.js";

const Car = props => {
    const car = props.car;
    return (
        <div style={styles.car} key={car.id}>
            <img style={styles.carImg} alt={car.name} src={car.image} />
            <p style={styles.text}>{car.name}</p>
            <p style={styles.text}>{car.price} USD</p>
        </div>
      );}



export default Car;
