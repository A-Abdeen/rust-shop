import React from "react";
import { Link } from "react-router-dom";
import { ItemWrapper } from "../../styles";

const Manufacturer = ({ manufacturer }) => {
  return (
    <ItemWrapper className="col-4">
      <p>{manufacturer.name}</p>
      <Link to={`/manufacturers/${manufacturer.slug}`}>
        <img src={manufacturer.image} alt={manufacturer.name} />
      </Link>
    </ItemWrapper>
  );
};

export default Manufacturer;
