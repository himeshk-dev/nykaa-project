import React from "react";

function SearchBar({ inputHandler }) {
  return (
    <input className="SearchBar" placeholder="Search" onChange={inputHandler} />
  );
}

export default SearchBar;
