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
import OverviewSection from "./Sectionstest/OverviewSection.jsx";
import SectionExamples from "./Sectionstest/SectionExamples.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import Typing from 'react-typing-animation';

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
      <Link to="./">
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
        </Link>
        <Parallax image={require("assets/img/ServiceImage.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
              <h1 css={{'@media (min-width: 300px) and (max-width: 400px)': {textAlign: "left", paddingLeft: "25px", paddingRight: "40px", paddingTop: "500px",
              fontSize: "40px"},
              '@media (min-width: 400px) and (max-width: 800px)': {textAlign: "left", paddingLeft: "25px", paddingRight: "40px",
              fontSize: "60px"},
              '@media (min-width: 800px)': {textAlign: "left", paddingLeft: "200px", paddingRight: "260px", fontSize: "70px", paddingTop: "200px"}}}>Audience-focused organic search engine marketing</h1>
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
        <GridContainer style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#2A2C2D"}}>>
          <GridItem>
              <h1 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center", paddingLeft: "10px", paddingRight: "10px",
              fontSize: "60px"}, '@media (min-width: 800px)': {textAlign: "center",
              paddingLeft: "200px", paddingRight: "200px"}}}>Are you ready to 10X your growth?</h1>
              <h3 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center", paddingLeft: "30px", paddingRight: "30px"}, '@media (min-width: 800px)': {textAlign: "center",
              paddingLeft: "300px", paddingRight: "300px"}}}>
              We help you grow faster with strategy, software and data, a whole lot of data.
              </h3>
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