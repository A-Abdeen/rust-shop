import React, { useState } from "react";
import Car from "./Car";
import SearchBar from "./SearchBar";

const CarYard = ({ cars }) => {
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
