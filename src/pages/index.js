import React, { useState } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermInput = function(userInput) {
    setSearchTerm(userInput);
  };

  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .filter((edge) => edge.node.internal.content.toUpperCase().includes(searchTerm.toUpperCase()))
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout
      handleSearchTermInput={handleSearchTermInput}
      searchTerm={searchTerm}
    >
      <Helmet>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader />
      <div className="grids">{Posts}</div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
          internal {
            content
          }
        }
      }
    }
  }
`;
