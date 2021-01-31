import React from "react";
import { DetailWrapper, BackButton } from "../styles";
import DeleteButton from "./DeleteButton.js";

const CarDetail = (props) => {
  const car = props.car;

  return (
    <DetailWrapper>
      <h1>{car.name}</h1>
      <img src={car.image} alt={car.name} />
      <p>{car.description}</p>
      <p>${car.price}</p>
      <BackButton onClick={() => props.setCar(null)}>Go Back</BackButton>
      <DeleteButton
        deleteCar={props.deleteCar}
        car={car}
        setCar={props.setCar}
      />
    </DetailWrapper>
  );
};

export default CarDetail;
