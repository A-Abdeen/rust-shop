import React from "react";
// Styling
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search a name"
      onChange={(event) => props.setQuery(event.target.value.toLowerCase())}
    />
  );
};

export default SearchBar;
