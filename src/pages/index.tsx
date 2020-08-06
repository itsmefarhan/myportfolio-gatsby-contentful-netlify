import React, { Fragment } from "react"
import Helmet from "../components/head"
import Header from "../components/header"
import Main from "../components/main"
import Skills from "../components/skills"
import Portfolio from "../components/portfolio"

const Home = () => {
  return (
    <Fragment>
      <Helmet title="Home" />
      <Header />
      <Main />
      <Skills />
      <Portfolio />
    </Fragment>
  )
}

export default Home
