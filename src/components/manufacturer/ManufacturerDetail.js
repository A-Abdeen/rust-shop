import React from "react";
import { useSelector } from "react-redux";
import { useParams, Redirect, Link } from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";
import { DetailWrapper, BackButton } from "../../styles";
import CarYard from "../CarYard";

const ManufacturerDetail = () => {
  const manufacturerSlug = useParams().manufacturerSlug;
  const allCars = useSelector((state) => state.cars.cars);
  const manufacturer = useSelector((state) =>
    state.manufacturers.manufacturers.find(
      (manufacturer) => manufacturer.slug === manufacturerSlug
    )
  );
  const cars = manufacturer.cars.map((car) =>
    allCars.find((_car) => _car.id === car.id)
  );

  if (!manufacturer) return <Redirect to="/" />;
  return (
    <>
      <DetailWrapper>
        <Link className="float-right" to="/manufacturers">
          <BackButton>Go Back</BackButton>
        </Link>
        <img className="img" src={manufacturer.image} alt={manufacturer.name} />
        <h1>{manufacturer.name}</h1>
        <h6>Country: {manufacturer.country}</h6>
        <p>{manufacturer.description}</p>
      </DetailWrapper>
      <Link to={`/manufacturers/${manufacturer.id}/cars/new`}>
        <AiOutlineFileAdd className="float-right" size="1.75em" />
      </Link>
      <CarYard cars={cars} />
    </>
  );
};

export default ManufacturerDetail;
