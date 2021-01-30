import React from "react";
import { YardWrapper } from "../styles.js";
import Car from "./Car";
import cars from "../cars.js";

const CarYard = () => {
  const carYard = cars.map((car) => <Car car={car} key={car.id} />);
  return <YardWrapper>{carYard}</YardWrapper>;
};

export default CarYard;
