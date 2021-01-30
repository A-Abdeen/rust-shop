import React, { useState } from "react";
import { YardWrapper } from "../styles.js";
import Car from "./Car";
import cars from "../cars.js";
import SearchBar from "./SearchBar";

const CarYard = (props) => {
  const [query, setQuery] = useState("");

  const carYard = cars
    .filter((car) => car.name.toLowerCase().includes(query))
    .map((car) => <Car car={car} key={car.id} setCar={props.setCar} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <YardWrapper>{carYard}</YardWrapper>
    </>
  );
};

export default CarYard;
