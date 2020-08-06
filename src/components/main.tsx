import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Typist from "react-typist"
import Helmet from "./head"
import MainImg from "../images/main.jpg"

const useStyles = makeStyles(() => ({
  img: {
    backgroundImage: `url(${MainImg})`,
    height: "100vh",
    backgroundAttachment: "fixed",
    backgroundSize: "100%",
    color: "white",
  },
  typo: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontWeight: "bold",
  },
  myIcon: {
    position: "absolute",
    bottom: "0%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    background: "white",
    borderRadius: "30px",
    width: "50px",
    height: "50px",
  },
}))

interface Props {
  node: {
    mainText1: string
    mainText2: string
    mainText3: string
  }
}

const Main = () => {
  const classes = useStyles()

  const [count, setCount] = useState(1)

  useEffect(() => {
    setCount(1)
  }, [count])

  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            mainText1
            mainText2
            mainText3
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet title="Main" />
      <div className={classes.img}>
        {count
          ? data.allContentfulPortfolio.edges.map((edge: Props, i: number) => {
              const { mainText1, mainText2, mainText3 } = edge.node
              return (
                <Typist
                  onTypingDone={() => setCount(0)}
                  key={i}
                  avgTypingDelay={50}
                >
                  <Typography variant="h2" className={classes.typo}>
                    {mainText1}
                  </Typography>
                  <Typist.Backspace delay={1000} count={mainText1.length} />
                  <Typist.Delay ms={500} />
                  <Typography variant="h4" className={classes.typo}>
                    {mainText2}
                  </Typography>
                  <Typist.Backspace delay={1000} count={mainText2.length} />
                  <Typist.Delay ms={500} />
                  <Typography variant="h4" className={classes.typo}>
                    {mainText3}
                  </Typography>
                  <Typist.Backspace delay={1000} count={mainText3.length} />
                </Typist>
              )
            })
          : ""}
        <a href="#skills">
          <ExpandMoreIcon className={classes.myIcon} />
        </a>
      </div>
    </>
  )
}
export default Main
