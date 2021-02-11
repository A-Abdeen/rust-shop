import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Car from "./Car";
import SearchBar from "./SearchBar";
import { AiOutlineFileAdd } from "react-icons/ai";

const CarYard = () => {
  const cars = useSelector((state) => state.cars);

  const [query, setQuery] = useState("");

  const carYard = cars
    .filter((car) => car.name.toLowerCase().includes(query))
    .map((car) => <Car key={car.id} car={car} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <Link to="/cars/new">
        <AiOutlineFileAdd className="float-right" size="1.75em" />
      </Link>
      <div className="row">{carYard}</div>
    </div>
  );
};

export default CarYard;
