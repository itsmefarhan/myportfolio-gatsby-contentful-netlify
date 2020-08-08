import React, { useState } from "react"
import { Typography, Grid, Dialog, DialogTitle } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import { ErrorTwoTone, CheckCircle } from "@material-ui/icons"
import { Pulse } from "react-awesome-reveal"

const useStyles = makeStyles(theme => ({
  root: {
    background: "#2d545e",
    // background: "linear-gradient(to top, #e1b382, #c89666, #2d545e, #12343b)",
    padding: "50px 0px",
    color: "white",
  },
  typo: {
    marginTop: "30px",
  },
  formField: {
    margin: "10px 0px",
  },
  adjustMargin: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
    },
  },
}))

const ContactPage = () => {
  const classes = useStyles()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")
  const [open, setOpen] = useState(false)

  // On modal close
  const handleClose = () => setOpen(false)

  // Send form data to google sheet
  const sendData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch(
        `https://v1.nocodeapi.com/itsmefarhan/google_sheets/WwvADsQjkzUOUWBN`,
        {
          method: "post",
          body: JSON.stringify([[new Date().toString(), name, email, message]]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      await response.json()

      setStatus("Success")
    } catch (error) {
      console.error("Error:", error)
      setStatus("Something went wrong.")
    }
    setLoading(false)
    setOpen(true)
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div id="contact" className={classes.root}>
      <Grid container>
        <Grid item xs={1} sm={1} />
        <Grid item xs={10} sm={10}>
          <Pulse cascade={true}>
            <Typography variant="h4" align="center">
              CONTACT
            </Typography>
            <Grid container className={classes.typo}>
              <Grid item xs={12} sm={6}>
                {/* Map */}
                <div style={{ width: "100%" }}>
                  <iframe
                    title="location"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    scrolling="auto"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?hl=en&amp;q=Karachi,%20Pakistan+(Farhan%20Farooq)&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
                {/* End Map */}
                {/* Modal popup on form submission  */}
                {open ? (
                  <Dialog
                    aria-labelledby="simple-dialog-title"
                    open={open}
                    onClose={handleClose}
                  >
                    <DialogTitle id="simple-dialog-title">
                      {status === "Success" ? (
                        <>
                          <Typography align="center">
                            <CheckCircle
                              style={{ fontSize: "100px", color: "green" }}
                            />
                          </Typography>
                          Thank you for reaching us.
                        </>
                      ) : (
                        <>
                          <Typography align="center">
                            <ErrorTwoTone
                              color="error"
                              style={{ fontSize: "100px" }}
                            />
                          </Typography>
                          {status}
                        </>
                      )}
                    </DialogTitle>
                  </Dialog>
                ) : null}
                {/* End Modal */}
              </Grid>
              <Grid item xs={12} sm={2} />
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="body1"
                  style={{ marginBottom: "10%" }}
                  className={classes.adjustMargin}
                >
                  For queries please fill out the form or you can connect with
                  me via{" "}
                  <a
                    href="https://facebook.com/farhan.abbasi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon />
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://twitter.com/itsmefari"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                </Typography>
                {/* Enquiry Form */}
                <form onSubmit={sendData}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      rows={3}
                      id="message"
                      name="message"
                      className="form-control"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                    />
                  </div>
                  {loading ? (
                    <button
                      className="btn btn-dark btn-block"
                      type="button"
                      disabled
                    >
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span className=""> SUBMITTING...</span>
                    </button>
                  ) : (
                    <input
                      type="submit"
                      value="SUBMIT"
                      className="btn btn-block btn-dark"
                      disabled={!name || !email || !message}
                    />
                  )}
                </form>
                {/* End Enquiry Form */}
              </Grid>
            </Grid>
          </Pulse>
        </Grid>
        <Grid item xs={1} sm={1} />
      </Grid>
    </div>
  )
}

export default ContactPage
