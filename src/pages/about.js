import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div style={{ display: "grid", gridTemplateColumns: "auto 30%" }}>
        <div
          style={{
            padding: "5vh 0",
            lineHeight: "1.5",
            maxWidth: "60%",
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
            <span style={{ color: "#117538" }}>
              zimmergruenblog@gmail.com
            </span>{" "}
            <br></br>
          </p>
          <p>Wir freuen uns von euch zu hören.</p>
          <br></br>
          <br></br>
          <p>This page is powered by Netlify, NetlifyCMS and W3Layouts.</p>
        </div>
      </div>
    </Layout>
  );
};
export default AboutPage;
