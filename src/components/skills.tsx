import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Fade } from "react-awesome-reveal"

const useStyles = makeStyles(theme => ({
  grid: {
    display: "flex",
    justifyContent: "space-between",
    marginTop:'20px',
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",      
    },
  },
  paper: {    
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "20px",
  },
  img: {
    width: "100px",
    height: "100px",
  },
}))

const Skills = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            skills {
              title
              url
            }
          }
        }
      }
    }
  `)

  interface Props {
    title: string
    url: string
  }

  return (
    <div style={{ padding: "50px 0px" }} id="skills">
      <Fade cascade={true} direction="top">
        <Typography
          variant="h4"
          align="center"          
        >
          SKILLS
        </Typography>
        <Grid container>
          <Grid item xs={1} sm={1} />
          <Grid
            item
            container
            xs={10}
            sm={10}            
            className={classes.grid}
          >
            {data.allContentfulPortfolio.edges[0].node.skills.map(
              (skill: Props) => (
                <Grid item key={skill.title}>
                  <div className={classes.paper}>
                    <img
                      alt={skill.title}
                      src={skill.url}
                      className={classes.img}
                    />
                    <Typography variant="h5">{skill.title}</Typography>
                  </div>
                </Grid>
              )
            )}
          </Grid>
          <Grid item xs={1} sm={1} />
        </Grid>
      </Fade>
    </div>
  )
}

export default Skills
