import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";

export default (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation
          handleSearchTermInput={props.handleSearchTermInput}
          searchTerm={props.searchTerm}
        />
      </header>
      {props.children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Zimmergruen</p>
      </footer>
    </div>
  );
};
