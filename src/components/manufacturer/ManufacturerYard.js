import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Manufacturer from "../manufacturer/Manufacturer";
import SearchBar from "../SearchBar";
import { AiOutlineFileAdd } from "react-icons/ai";

const ManufacturerYard = () => {
  const manufacturers = useSelector(
    (state) => state.manufacturers.manufacturers
  );

  const [query, setQuery] = useState("");

  const manufacturerYard = manufacturers
    .filter((manufacturer) => manufacturer.name.toLowerCase().includes(query))
    .map((manufacturer) => (
      <Manufacturer key={manufacturer.id} manufacturer={manufacturer} />
    ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <Link to="/manufacturers/new">
        <AiOutlineFileAdd className="float-right" size="1.75em" />
      </Link>
      <div className="row">{manufacturerYard}</div>
    </div>
  );
};

export default ManufacturerYard;
