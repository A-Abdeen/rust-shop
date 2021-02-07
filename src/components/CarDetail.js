import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { DetailWrapper, BackButton } from "../styles";
import DeleteButton from "./DeleteButton.js";
// import cars from "../cars.js";

const CarDetail = (props) => {
  const carSlug = useParams().carSlug;
  const car = props.cars.find((car) => car.slug === carSlug);
  if (!car) return <Redirect to="/cars" />;

  return (
    <DetailWrapper>
      <Link to="/cars">
        <BackButton>Go Back</BackButton>
      </Link>
      <h1>{car.name}</h1>
      <h5>Model Year: {car.year}</h5>
      <h6>Manufacturer: {car.manufacturer}</h6>
      <img className="img" src={car.image} alt={car.name} />
      <p>{car.description}</p>
      <p>${car.price}</p>
      <DeleteButton deleteCar={props.deleteCar} car={car} />
    </DetailWrapper>
  );
};

export default CarDetail;
