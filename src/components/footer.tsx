import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    textAlign: "center",
    paddingTop: "15px",
    height: "50px",
    color: "white",
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={`${classes.root} bg-dark`}>
      <Typography variant="body1">
        Developed By Farhan Farooq, &copy; 2020
      </Typography>
    </footer>
  )
}

export default Footer
