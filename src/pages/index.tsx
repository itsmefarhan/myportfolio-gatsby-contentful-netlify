import React, { Fragment, useState, useEffect } from "react"
import Loader from "../components/loader"
import Helmet from "../components/head"
import Header from "../components/header"
import Main from "../components/main"
import Skills from "../components/skills"
import Portfolio from "../components/portfolio"
import AboutPage from "../components/about"
import ContactPage from "../components/contact"
import Footer from "../components/footer"

const Home = () => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setRender(true)
    }, 1000)
  }, [])

  return render ? (
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
  ) : (
    <Loader />
  )
}

export default Home
