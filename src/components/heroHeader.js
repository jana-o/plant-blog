import React from "react";
import { StaticQuery, graphql } from "gatsby";
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="hero-header">
        <div
          className="headline"
          style={{
            backgroundImage: `url('/assets/header.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            maxHeight: "min(20vh,20vw)",
            height: "min(20vh,20vw)",
            textAlign: "center",
            lineHeight: "min(20vh,20vw)",
            opacity: "0.9",
          }}
        >
          {data.site.siteMetadata.home.title}
        </div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{
            __html: data.site.siteMetadata.home.description,
          }}
        />
      </div>
    )}
  />
);
