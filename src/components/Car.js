import React from "react";
import { Link } from "react-router-dom";
import { CarWrapper } from "../styles.js";
import DeleteButton from "./DeleteButton";

const Car = (props) => {
  const car = props.car;
  const setCar = props.setCar;
  return (
    <CarWrapper className="col-4">
      <p>{car.name}</p>
      <Link to={`/cars/${car.slug}`}>
        <img src={car.image} alt={car.name} />
      </Link>
      <p className="car-price"> $ {car.price}</p>
      <DeleteButton carId={car.id} />
    </CarWrapper>
  );
};

export default Car;
