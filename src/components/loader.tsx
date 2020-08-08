import React from "react"
import ReactLoading from "react-loading"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  myloader: {
    background: "black",
    // background: "#5bc0de",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const Loader = () => {
  const classes = useStyles()

  return (
    <div className={classes.myloader}>
      <ReactLoading type="bubbles" width="100px" color="orange" />
    </div>
  )
}

export default Loader
