import React, { Fragment } from "react"
import Helmet from "../components/head"
import Header from "../components/header"

const Home = () => {
  return (
    <Fragment>
      <Helmet title="Home" />
      <Header />      
    </Fragment>
  )
}

export default Home
