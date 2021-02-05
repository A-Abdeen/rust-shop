import React from "react";
import { CarWrapper } from "../styles.js";
import DeleteButton from "./DeleteButton";

const Car = (props) => {
  const car = props.car;

  return (
    <CarWrapper>
      <p>{car.name}</p>
      <img
        alt={car.name}
        src={car.image}
        onClick={console.log(`temp removed detail view`)}
      />
      <p className="car-price"> ${car.price}</p>
      <DeleteButton deleteCar={props.deleteCar} car={car} />
    </CarWrapper>
  );
};

export default Car;
