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
import OverviewSection from "./Sectionsintelligence/OverviewSection.jsx";
import SectionExamples from "./Sectionsintelligence/SectionExamples.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import { Helmet } from 'react-helmet';

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
      <Helmet>
      <title>SEO Competitive Intelligence | Strategically.co</title>
      <meta name="description" content="Do you know your target audiences? Do you know what they need, what they want? Do you know what they’re into, where they're interacting online and who they really are?" />
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
              '@media (min-width: 800px)': {textAlign: "left", paddingLeft: "200px", paddingRight: "360px", fontSize: "70px"}}}>Competitive Intelligence & Positioning</h1>
              <h3 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "left", paddingLeft: "30px", paddingRight: "30px"}, '@media (min-width: 800px)': {textAlign: "left",
              paddingLeft: "200px", paddingRight: "300px"}}}>
              Great business decisions are made when keen insight meets reliable data.
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
          fontSize: "70px"}, '@media (min-width: 800px)': {textAlign: "center",
          paddingLeft: "240px", paddingRight: "240px"}}}>Let's create amazing content together</h1>
              <Link to="./contact">
              <Button color="primary" size="lg">
                Get in Touch
              </Button>
              </Link>
          </GridItem>
        </GridContainer>
        <Footer/>
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
