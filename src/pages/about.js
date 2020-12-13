import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="about-grid">
        <div
          style={{
            padding: "5vh 0",
            lineHeight: "1.5",
            alignSelf: "end",
          }}
        >
          <p>
            Wie schön, dass Du den Weg in unseren Zimmergarten gefunden hast!
          </p>
          <p>
            Hier gibt es von nützlichen Pflegetipps über persönliche Erfahrungen
            bis zu wissenswerten Informationen alles, was Pflanzenliebhaber
            interessiert.
          </p>
          <p>
            Bei Fragen, Ideen, Anmerkungen schreibt uns unter:<br></br>
            <form action="mailto:zimmergruenblog@gmail.com">
              <button
                type="submit"
                style={{
                  color: "#117538",
                  border: "none",
                  background: "none",
                  padding: "0px",
                  fontSize: "inherit",
                  cursor: "pointer",
                }}
              >
                zimmergruenblog@gmail.com
              </button>{" "}
            </form>
          </p>
          <p>Wir freuen uns von euch zu hören.</p>
          <br></br>
          <br></br>
          <p style={{ fontSize: "smaller", fontStyle: "italic" }}>
            This page is powered by Netlify, NetlifyCMS and W3Layouts. Title
            page picture from Pexels.
          </p>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};
export default AboutPage;
