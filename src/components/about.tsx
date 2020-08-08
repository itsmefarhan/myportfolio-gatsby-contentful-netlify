import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Fade } from "react-awesome-reveal"

const useStyles = makeStyles(theme => ({
  typo: {
    padding: "50px",
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    typo: {
      padding: "0px",
      marginLeft: "10px",
      marginTop: "10px",
    },
  },
  paper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    padding: "20px",
    margin: "0 auto",
  },
  [theme.breakpoints.down("xs")]: {
    paper: {
      padding: "0px",
      marginLeft: "0px",
      width: "100%",
    },
  },
  img: {
    maxWidth: "100%",
    borderRadius: "50%",
  },
}))

const AboutPage = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            aboutme {
              aboutme
              imgUrl
            }
          }
        }
      }
    }
  `)

  const { aboutme, imgUrl } = data.allContentfulPortfolio.edges[0].node.aboutme

  return (
    <div id="about" style={{ paddingTop: "50px" }}>
      <Fade cascade={true}>
        <Typography variant="h4" align="center">
          ABOUT ME
        </Typography>

        <div className={classes.paper}>
          <Grid container>
            <Grid item xs={2} sm={1} />
            <Grid item xs={12} sm={2} style={{ textAlign: "center" }}>
              <img src={imgUrl} alt="Farhan" className={classes.img} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="body1" className={classes.typo}>
                {aboutme}
              </Typography>
            </Grid>
            <Grid item xs={2} sm={1} />
          </Grid>
        </div>
      </Fade>
    </div>
  )
}

export default AboutPage
