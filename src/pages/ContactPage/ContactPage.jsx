import React from "react"
// nodejs library that concatenates classes

// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx"
import contactPageStyle from "assets/jss/material-kit-react/views/ContactPageStyle.jsx"

import { Helmet } from "react-helmet"

// Sections for this page
import WorkSection from "./Sections/WorkSection.jsx"

class ContactPage extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Helmet>
          <title>Contact Us | Strategically.co</title>
          <meta
            name="description"
            content="Contact us today! Speak with one of our search engine optimisation experts."
          />
        </Helmet>
        {/* <div className={classNames(classes.main, classes.mainRaised2)}> */}
        {/* <Link to="./"> */}
        <Header color="primary" brand="Strategically" />
        {/* </Link> */}
        <div className={classes.container}>
          <WorkSection />
        </div>
        {/* </div> */}
      </div>
    )
  }
}

export default withStyles(contactPageStyle)(ContactPage)
