import React from "react";
import { Link } from "react-router-dom";
import { ItemWrapper } from "../styles.js";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton.js";

const Car = ({ car }) => {
  return (
    <ItemWrapper className="col-4">
      <p>{car.name}</p>
      <Link to={`/cars/${car.slug}`}>
        <img src={car.image} alt={car.name} />
      </Link>
      <p className="car-price"> $ {car.price}</p>
      <DeleteButton carId={car.id} />
      <UpdateButton slug={car.slug} />
    </ItemWrapper>
  );
};

export default Car;
