import React, { Fragment } from "react"
import Helmet from "../components/head"
import Header from "../components/header"
import Main from "../components/main"
import Skills from "../components/skills"

const Home = () => {
  return (
    <Fragment>
      <Helmet title="Home" />
      <Header />
      <Main />
      <Skills />
    </Fragment>
  )
}

export default Home
