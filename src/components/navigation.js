import React from "react";
import { Link } from "gatsby";
import SearchInput from "./search-input";

function Navigation(props) {
  return (
    <nav className="navigation">
      <SearchInput
        handleSearchTermInput={props.handleSearchTermInput}
        searchTerm={props.searchTerm}
      />
      <Link to="/about">About</Link>
      <Link to="/impressum">Impressum</Link>
    </nav>
  );
}

export default Navigation;
