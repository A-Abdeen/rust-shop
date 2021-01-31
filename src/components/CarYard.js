import React, { useState } from "react";
import { YardWrapper } from "../styles.js";
import Car from "./Car";
import SearchBar from "./SearchBar";

const CarYard = (props) => {
  const [query, setQuery] = useState("");

  const carYard = props.cars
    .filter((car) => car.name.toLowerCase().includes(query))
    .map((car) => (
      <Car
        car={car}
        key={car.id}
        setCar={props.setCar}
        deleteCar={props.deleteCar}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <YardWrapper>{carYard}</YardWrapper>
    </>
  );
};

export default CarYard;
