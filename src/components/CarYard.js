import React, { useState } from "react";
import { useSelector } from "react-redux";
import Car from "./Car";
import SearchBar from "./SearchBar";

const CarYard = () => {
  const cars = useSelector((state) => state.cars);

  const [query, setQuery] = useState("");

  const carYard = cars
    .filter((car) => car.name.toLowerCase().includes(query))
    .map((car) => <Car key={car.id} car={car} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <div className="row">{carYard}</div>
    </div>
  );
};

export default CarYard;
