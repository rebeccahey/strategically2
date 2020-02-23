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
import OverviewSection from "./Sectionsseo/OverviewSection.jsx";
import SectionExamples from "./Sectionsseo/SectionExamples.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import { Helmet } from 'react-helmet';

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
      <Helmet>
      <title>Next Level Search Engine Optimisation| Strategically.co</title>
      <meta name="description" content="A lot of people have a website or a developer, but no real plan. You don't need more features or a shiny new frontend. What you need is a plan. Our clients have one — do you?" />
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
              <h1 css={{'@media (min-width: 300px) and (max-width: 400px)': {textAlign: "left", paddingLeft: "25px", paddingRight: "40px", paddingTop: "500px",
              fontSize: "40px"},
              '@media (min-width: 400px) and (max-width: 800px)': {textAlign: "left", paddingLeft: "25px", paddingRight: "40px",
              fontSize: "60px"},
              '@media (min-width: 800px)': {textAlign: "left", paddingLeft: "200px", paddingRight: "260px", fontSize: "70px", paddingTop: "200px"}}}>Audience-Focused Organic Search Engine Marketing</h1>
              <h3 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "left", paddingLeft: "25px", paddingRight: "40px"}, '@media (min-width: 800px)': {textAlign: "left",
              paddingLeft: "200px", paddingRight: "200px"}}}>
              _______________</h3>
              <h3 css={{'@media (min-width: 300px) and (max-width: 400px)': {textAlign: "left", paddingLeft: "25px", paddingRight: "40px", paddingBottom: "450px"},
              '@media (min-width: 400px) and (max-width: 800px)': {textAlign: "left", paddingLeft: "25px", paddingRight: "40px"},
              '@media (min-width: 800px)': {textAlign: "left", paddingLeft: "200px", paddingRight: "200px", paddingBottom: "150px"}}}>
                Our SEO is purely white-hat, analytics driven and aimed at attracting and converting quality leads.
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
