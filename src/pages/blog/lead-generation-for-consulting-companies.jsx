import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import OverviewSectionLeadGen from "./Sectionsstep7/OverviewSectionLeadGen.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import { Helmet } from 'react-helmet';

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
      <Helmet>
<title>Lead Generation for Consulting Companies | Strategically.co</title>
<meta name="description" content="In this article we will discuss some of the tactics that can be used to generate leads in the consulting niche." />
</Helmet>
      <Header
        brand="Strategically"
        rightLinks={<HeaderLinks />}
        fixed
        color="primary"
        {...rest}
      />
        <div className={classNames(classes.main, classes.mainRaised)}>
        <OverviewSectionLeadGen />
    </div>
        <div className={classes.conatinerCta}>
        <GridContainer style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#222222"}}>>
          <GridItem>
              <h1 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center", paddingLeft: "10px", paddingRight: "10px",
              fontSize: "60px"}, '@media (min-width: 800px)': {textAlign: "center",
              paddingLeft: "200px", paddingRight: "200px"}}}>Let's create amazing content together</h1>
              <Link to="./contact">
              <Button color="primary" size="lg">
                Get in Touch
              </Button>
              </Link>
          </GridItem>
        </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
