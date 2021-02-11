import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailWrapper, BackButton } from "../styles";
import DeleteButton from "./buttons/DeleteButton.js";

const CarDetail = () => {
  const cars = useSelector((state) => state.cars);
  const carSlug = useParams().carSlug;
  const car = cars.find((car) => car.slug === carSlug);
  if (!car) return <Redirect to="/cars" />;
  return (
    <DetailWrapper>
      <Link className="float-right" to="/cars">
        <BackButton>Go Back</BackButton>
      </Link>
      <h1>{car.name}</h1>
      <h5>Model Year: {car.year}</h5>
      <h6>Manufacturer: {car.manufacturer}</h6>
      <img className="img" src={car.image} alt={car.name} />
      <p>{car.description}</p>
      <p>${car.price}</p>
      <DeleteButton carId={car.id} />
    </DetailWrapper>
  );
};

export default CarDetail;
