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
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import OverviewSection from "./Sectionscompetition/OverviewSection.jsx";
import SectionExamples from "./Sectionscompetition/SectionExamples.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import { Helmet } from 'react-helmet';

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
      <Helmet>
<title>Competitive Landscape Analysis | Strategically.co</title>
<meta name="description" content="To get ahead on the web today you need to be better than them." />
</Helmet>
      <Header
        brand="Strategically"
        rightLinks={<HeaderLinks />}
        fixed
        color="opaque"
        changeColorOnScroll={{
          height: 100,
          color: "primary"
        }}
        {...rest}
      />
        <Parallax image={require("assets/img/ServiceImage.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
              <h1 css={{'@media (min-width: 300px) and (max-width: 400px)': {textAlign: "left", paddingLeft: "25px", paddingRight: "40px",
              fontSize: "40px"},
              '@media (min-width: 400px) and (max-width: 800px)': {textAlign: "left", paddingLeft: "25px", paddingRight: "40px",
              fontSize: "60px"},
              '@media (min-width: 800px)': {textAlign: "left", paddingLeft: "200px", paddingRight: "360px", fontSize: "70px"}}}>Competitive Landscape Analysis</h1>
              <h3 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "left", paddingLeft: "30px", paddingRight: "30px"}, '@media (min-width: 800px)': {textAlign: "left",
              paddingLeft: "200px", paddingRight: "300px"}}}>
              Know your enemy.
              </h3>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
        <OverviewSection />
        <SectionExamples />
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
