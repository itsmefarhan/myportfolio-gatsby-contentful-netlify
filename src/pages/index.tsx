import React, { Fragment } from "react"
import Helmet from "../components/head"
import Header from "../components/header"
import Main from "../components/main"
import Skills from "../components/skills"
import Portfolio from "../components/portfolio"
import AboutPage from "../components/about"
import ContactPage from "../components/contact"
import Footer from "../components/footer"

const Home = () => {
  return (
    <Fragment>
      <Helmet title="Home" />
      <Header />
      <Main />
      <Skills />
      <Portfolio />
      <AboutPage />
      <ContactPage />
      <Footer />
    </Fragment>
  )
}

export default Home
