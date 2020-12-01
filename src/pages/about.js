import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div style={{display: "grid", gridTemplateColumns: "auto 30%"}}>
        <div style={{padding: "5vh 0", lineHeight: "1.5", maxWidth: "50%", alignSelf: "end"}}>
            <p>Wie schön, dass Du den Weg in unseren Zimmergarten gefunden hast!</p>   
            <p>
                Hier gibt es von nützlichen Pflegetipps über persönliche Erfahrungen bis zu
                wissenswerten Informationen alles, was Pflanzenliebhaber interessiert.
            </p>
            <p> 
                Bei Fragen, Ideen, Anmerkungen schreibt uns unter:<br></br>
                <span style={{color: "#117538"}}>zimmergruenblog@gmail.com</span> <br></br>
            </p>    
            <p>Wir freuen uns von euch zu hören.</p>
            <br></br>
            <br></br>
            <p>This page is powered by Netlify, NetlifyCMS and W3Layouts.</p>
        </div>
        
        <div style={{padding: "5vh 0", lineHeight: "1.5", alignSelf: "end"}}>
        <h3>Impressum</h3>
            <p>
                Stefanie Friedrichs und Jana Orth <br></br>
                10405 Berlin / 37073 Göttingen
            </p>
            <h4 style={{marginBottom: "5px"}}>Kontakt</h4>
            <p>zimmergruenblog@gmail.com</p>
        </div>
      </div>
    </Layout>
  );
};
export default AboutPage;
