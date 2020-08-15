import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Typography,
  Grid,
  Paper,
  Tooltip,
  Tabs,
  Tab,
  useMediaQuery,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import VisibilityIcon from "@material-ui/icons/Visibility"
import GitHubIcon from "@material-ui/icons/GitHub"
import { Pulse } from "react-awesome-reveal"
import "./portfolio.css"

const useStyles = makeStyles(theme => ({
  root: {
    background: "#2d545e",
    padding: "50px 0px",
    color: "white",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "20px",
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
  const [value, setValue] = React.useState(0)

  const matches = useMediaQuery("(max-width:480px)")

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
      allContentfulProjects {
        edges {
          node {
            title
            description
            url
            githubUrl
            projectUrl
            categories
          }
        }
      }
    }
  `)

  interface Props {
    node: {
      title: string
      description: string
      url: string
      githubUrl: string
      projectUrl: string
      categories: any
    }
  }

  // Render tabs based on categories
  const renderTabs = () => {
    // Get categories
    let getCat = data.allContentfulProjects.edges.map(
      (edge: Props) => edge.node.categories
    )
    // Merge categories into single array
    let accCat = getCat.reduce((acc: [], it: string) => [...acc, ...it], [])
    // Get unique values from categories
    let setLabel = new Set(accCat)
    // Convert unique set into array
    let convertSet = Array.from(setLabel)

    return convertSet.map((a: any) => (
      <Tab label={a} value={a} key={a} style={{ fontWeight: "bold" }} />
    ))
  }

  // Render portfolio projects
  const renderData = (
    title: string,
    description: string,
    url: string,
    projectUrl: string,
    githubUrl: string
  ) => (
    <Grid item>
      <Tooltip
        title={<span className={classes.tooltipTitle}>{description}</span>}
        placement="top"
      >
        <Paper className={classes.paper}>
          <div className="imgcontainer">
            <img src={url} alt={title} className={`${classes.img} imgcustom`} />
            <div className="middlecustom">
              <div className="textcustom">
                <Tooltip
                  title={
                    <span className={classes.tooltipTitle}>View Demo</span>
                  }
                  placement="top"
                >
                  <a
                    href={projectUrl}
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
                    href={githubUrl}
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
  return (
    <div id="portfolio" className={classes.root}>
      <Pulse cascade={true}>
        <Typography variant="h4" align="center">
          RECENT PROJECTS
        </Typography>
        <div className={classes.tabs}>
          <Tabs
            value={value}
            onChange={(_, val) => setValue(val)}
            orientation={matches ? "vertical" : "horizontal"}
          >
            <Tab label="All" style={{ fontWeight: "bold" }} />
            {renderTabs()}
          </Tabs>
        </div>
        <Grid container>
          <Grid item xs={1} sm={1} />

          <Grid item xs={10} sm={10}>
            <Grid container className={classes.paperContainer} spacing={1}>
              {data.allContentfulProjects.edges.map((project: Props) => {
                let cond = project.node.categories.find(
                  (cat: string) => cat === value.toString()
                )
                return (
                  <Fragment key={project.node.title}>
                    {cond &&
                      renderData(
                        project.node.title,
                        project.node.description,
                        project.node.url,
                        project.node.projectUrl,
                        project.node.githubUrl
                      )}

                    {value === 0 &&
                      renderData(
                        project.node.title,
                        project.node.description,
                        project.node.url,
                        project.node.projectUrl,
                        project.node.githubUrl
                      )}
                  </Fragment>
                )
              })}
            </Grid>
          </Grid>
          <Grid item xs={1} sm={1} />
        </Grid>
      </Pulse>
    </div>
  )
}

export default Portfolio
