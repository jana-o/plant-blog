import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div style={{padding: "5vh 0", lineHeight: "1.5", maxWidth: "50%"}}>
            <div>
                Schön, dass Du den Weg in unseren Zimmergarten gefunden hast. <br></br>
                Hier gibt es von nützlichen Pflegetipps über persönliche Erfahrungen bis zu
                wissenswerten Informationen alles, was Pflanzenliebhaber interessiert.
            </div>
            <div style={{paddingTop: "20px"}}> 
                Bei Fragen, Ideen, Anmerkungen schreibt uns unter:<br></br>
                info@zimmergruen.com oder zimmergruenblog@gmail.com Wir freuen uns
                von euch zu hören.
            </div>
            <div style={{paddingTop: "50px"}}> 
                This page is powered by Netlify, NetlifyCMS and W3Layouts.
            </div>
        </div>
        <div style={{padding: "5vh 0", lineHeight: "1.5", maxWidth: "50%"}}>
            <h3>Impressum</h3>
            <div style={{paddingTop: "20px", fontSize: "80%"}}>
                Stefanie Friedrichs und Jana Orth <br></br>
                10405 Berlin / 37073 Göttingen
            </div>
            <h4>Kontakt</h4>
            <div style={{paddingTop: "20px", fontSize: "80%"}}>
                zimmergruenblog@gmail.com<br></br>
            </div>
        </div>
    </Layout>
  );
};
export default AboutPage;
