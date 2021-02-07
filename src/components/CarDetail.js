import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { DetailWrapper, BackButton } from "../styles";
import DeleteButton from "./DeleteButton.js";
// import cars from "../cars.js";

const CarDetail = (props) => {
  const carSlug = useParams().carSlug;
  const car = props.cars.find((car) => car.slug === carSlug);
  if (!car) return <Redirect to="/car-yard" />;

  return (
    <DetailWrapper>
      <h1>{car.name}</h1>
      <img className="img" src={car.image} alt={car.name} />
      <p>{car.description}</p>
      <p>${car.price}</p>
      <Link to="/cars">
        <BackButton>Go Back</BackButton>
      </Link>
      <DeleteButton deleteCar={props.deleteCar} car={car} />
    </DetailWrapper>
  );
};

export default CarDetail;
