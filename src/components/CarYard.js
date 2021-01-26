import React from "react";
import "../App.css";
import styles from "../styles.js";
import Car from "./Car";
import cars from "../cars.js";

const CarYard = (props) => {
  const carYard = cars.map((car) => <Car car={car} key={car.id} />);
  return <div style={styles.list}>{carYard}</div>;
};

export default CarYard;
