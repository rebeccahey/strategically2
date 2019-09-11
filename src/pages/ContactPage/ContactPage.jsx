import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaPlay } from 'react-icons/fa';

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import contactPageStyle from "assets/jss/material-kit-react/views/ContactPageStyle.jsx";

import { Helmet } from 'react-helmet';

// Sections for this page
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class ContactPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div css={{'@media (min-width: 300px) and (max-width: 800px)':
        {padding: "0px!important"},backgroundColor: "#fff", padding: "0px!important"}} className={classes.section}>
      <Helmet>
      <title>Contact Us | Strategically.co</title>
      <meta name="description" content="Strategy and software to help you grow faster" />
      </Helmet>
        <div className={classNames(classes.main, classes.mainRaised2)}>
          <Link to="./">
          <Header
          color="white"
          brand="Strategically"
           />
           </Link>
          <div className={classes.container}>
        <WorkSection />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(contactPageStyle)(ContactPage);
