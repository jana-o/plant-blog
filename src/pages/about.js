import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About — {site.siteMetadata.title}</title>
      </Helmet>
        <div>
            about text - coming soon
        </div>
    </Layout>
  )
}
export default AboutPage