import React from "react";
import { Link } from "gatsby";

export default (props) => (
  <nav className="navigation">
    <Link to="/about">About</Link>
    <Link to="/impressum">Impressum</Link>
  </nav>
);
