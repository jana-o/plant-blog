import React from "react";

function SearchInput(props) {
  function handleInputChange(event) {
    props.handleSearchTermInput(event.target.value);
  }

  return (
    <input
      className="search"
      type="text"
      placeholder="Suche"
      value={props.SearchTerm}
      onChange={handleInputChange}
    />
  );
}

export default SearchInput;
