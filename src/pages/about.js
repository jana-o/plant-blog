import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>

      <div>
        Schön, dass Du den Weg in unseren Zimmergarten gefunden hast. Hier gibt es von nützlichen Pflegetipps über persönliche Erfahrungen bis zu wissenswerten Informationen alles, was Pflanzenliebhaber interessiert.
      </div>
      <div>
        <p>
          Bei Fragen, Ideen, Anmerkungen schreibt uns unter: info@zimmergruen.com oder zimmergruenblog@gmail.com
          Wir freuen uns von euch zu hören.
        </p>
        <p>
          This page is powered by Netlify, NetlifyCMS and W3Layouts.
        </p>

      </div>
      <div>
        Impressum
        Berlin/Göttingen, 2020
        Stefanie Friedrich und Jana Orth
      </div>
    </Layout>
  )
}
export default AboutPage