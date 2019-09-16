import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// React icons
import { FaPlay } from "react-icons/fa"

// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import contactPageStyle from "assets/jss/material-kit-react/views/ContactPageStyle.jsx"

import { Helmet } from "react-helmet"
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"

// Sections for this page
import WorkSection from "./Sections/WorkSection.jsx"

class ContactPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
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
