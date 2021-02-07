import React, { useState } from "react";
// import { YardWrapper } from "../styles.js";
import Car from "./Car";
import SearchBar from "./SearchBar";

const CarYard = (props) => {
  const [query, setQuery] = useState("");

  const carYard = props.cars
    .filter((car) => car.name.toLowerCase().includes(query))
    .map((car) => <Car car={car} key={car.id} deleteCar={props.deleteCar} />);
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <div className="row">{carYard}</div>
    </div>
  );
};

export default CarYard;
