import React, { Fragment } from "react"
import Helmet from "../components/head"
import Header from "../components/header"
import Main from "../components/main"

const Home = () => {
  return (
    <Fragment>
      <Helmet title="Home" />
      <Header />
      <Main />
    </Fragment>
  )
}

export default Home
