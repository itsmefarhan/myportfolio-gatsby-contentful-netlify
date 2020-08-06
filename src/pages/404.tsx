import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Typography } from "@material-ui/core"
import Helmet from "../components/head"

const NotFound = () => {
  return (
    <Fragment>
      <Helmet title="Not Found" />
      <Typography variant="h3" align="center">
        Page Not Found
      </Typography>
      <Typography variant="body1" align="center">
        <Link to="/">Back to Home</Link>
      </Typography>
    </Fragment>
  )
}

export default NotFound
