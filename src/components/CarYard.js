import "../App.css";
import styles from "../styles.js";
import Car from "./Car.js";
import cars from "../cars.js";

const CarYard = () => {
  const carYard = cars.map((car) => {
    return;
    <Car x={car} />;
  });
  return carYard;
};
export default CarYard;
