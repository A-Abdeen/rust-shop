import React from "react";
import { CarWrapper } from "../styles.js";

const Car = (props) => {
  const car = props.car;
  return (
    <CarWrapper>
      <p>{car.name}</p>
      <img alt={car.name} src={car.image} />
      <p className="car-price"> ${car.price}</p>
    </CarWrapper>
  );
};

export default Car;
