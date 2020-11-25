import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div style={{ padding: "5vh 0", lineHeight: "1.5", maxwidth: "50%" }}>
        <div>
          Schön, dass Du den Weg in unseren Zimmergarten gefunden hast. Hier
          gibt es von nützlichen Pflegetipps über persönliche Erfahrungen bis zu
          wissenswerten Informationen alles, was Pflanzenliebhaber interessiert.
        </div>
        <div style={{ paddingtop: "20px" }}>
          Bei Fragen, Ideen, Anmerkungen schreibt uns unter:
          zimmergruenblog@gmail.com ~ Wir freuen uns
          von euch zu hören.
        </div>
        <div style={{ paddingtop: "50px" }}>
          This page is powered by Netlify, NetlifyCMS and W3Layouts.
        </div>
        <div style={{ paddingtop: "80px" }}>
          Impressum {"\n"}Berlin/Göttingen, 2020 {"\n"}Stefanie Friedrichs & Jana Orth
        </div>
      </div>
    </Layout>
  );
};
export default AboutPage;
