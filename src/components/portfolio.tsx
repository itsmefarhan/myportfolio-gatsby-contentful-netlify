import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Typography, Grid, Paper, Tooltip } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import VisibilityIcon from "@material-ui/icons/Visibility"
import GitHubIcon from "@material-ui/icons/GitHub"
import { Pulse } from "react-awesome-reveal"
import "./portfolio.css"

const useStyles = makeStyles(theme => ({
  root: {
    background: "#2d545e",
    // background: "linear-gradient(to top, #e1b382, #c89666, #2d545e, #12343b)",
    padding: "50px 0px",
    color: "white",
  },
  paperContainer: {
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  paper: {
    width: "300px",
    height: "250px",
    textAlign: "center",
    paddingBottom: "10px",
    borderRadius: "10px",
    marginTop: "30px",
  },
  img: {
    width: "100%",
    height: "250px",
    borderRadius: "10px",
  },
  tooltipTitle: {
    fontSize: "15px",
    padding: "5px 0px",
  },
}))

const Portfolio = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            projects {
              title
              desc
              projectUrl
              githubUrl
              url
            }
          }
        }
      }
    }
  `)

  interface Props {
    title: string
    desc: string
    url: string
    githubUrl: string
    projectUrl: string
  }

  return (
    <div id="portfolio" className={classes.root}>
      <Pulse cascade={true}>
        <Typography variant="h4" align="center">
          RECENT PROJECTS
        </Typography>
        <Grid container>
          <Grid item xs={1} sm={1} />

          <Grid item xs={10} sm={10}>
            <Grid container className={classes.paperContainer} spacing={1}>
              {data.allContentfulPortfolio.edges[0].node.projects.map(
                (project: Props) => (
                  <Grid item key={project.title}>
                    <Tooltip
                      title={
                        <span className={classes.tooltipTitle}>
                          {project.desc}
                        </span>
                      }
                      placement="top"
                    >
                      <Paper className={classes.paper}>
                        <div className="imgcontainer">
                          <img
                            src={project.url}
                            alt={project.title}
                            className={`${classes.img} imgcustom`}
                          />
                          <div className="middlecustom">
                            <div className="textcustom">
                              <Tooltip
                                title={
                                  <span className={classes.tooltipTitle}>
                                    View Demo
                                  </span>
                                }
                                placement="top"
                              >
                                <a
                                  href={project.projectUrl}
                                  target="_blank"
                                  className="text-dark"
                                  rel="noreferrer"
                                >
                                  <VisibilityIcon
                                    fontSize="large"
                                    style={{ marginRight: "10px" }}
                                  />
                                </a>
                              </Tooltip>
                              <Tooltip
                                title={
                                  <span className={classes.tooltipTitle}>
                                    View source code
                                  </span>
                                }
                                placement="top"
                              >
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  className="text-dark"
                                  rel="noreferrer"
                                >
                                  <GitHubIcon fontSize="large" />
                                </a>
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                      </Paper>
                    </Tooltip>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
          <Grid item xs={1} sm={1} />
        </Grid>
      </Pulse>
    </div>
  )
}

export default Portfolio
