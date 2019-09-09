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
import Alternate1 from "./Sectionsweb/Alternate1.jsx";
import Alternate2 from "./Sectionsweb/Alternate2.jsx";
import Alternate3 from "./Sectionsweb/Alternate3.jsx";
import Alternate4 from "./Sectionsweb/Alternate4.jsx";
import SectionExamples from "./Sectionsweb/SectionExamples.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

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
        <Parallax image={require("assets/img/webdevelopment.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
              <h1 css={{'@media (min-width: 300px) and (max-width: 400px)': {textAlign: "center", paddingLeft: "25px", paddingRight: "25px",
              fontSize: "40px"},
              '@media (min-width: 400px) and (max-width: 800px)': {textAlign: "center", paddingLeft: "25px", paddingRight: "25px",
              fontSize: "60px"},
              '@media (min-width: 800px)': {textAlign: "center", paddingLeft: "180px", paddingRight: "180px", fontSize: "90px"}}}>Development Services</h1>
              <h3 css={{'@media (min-width: 300px) and (max-width: 400px)': {textAlign: "center", paddingLeft: "25px", paddingRight: "25px",
            fontSize: "20px"},
            '@media (min-width: 400px) and (max-width: 800px)': {textAlign: "center", paddingLeft: "25px", paddingRight: "25px",
            fontSize: "22px"},
            '@media (min-width: 800px)': {textAlign: "center", paddingLeft: "220px", paddingRight: "220px", fontSize: "22px"}}}>We build beautiful and functional software for B2B and SaaS companies by providing outstanding project management and software development expertise.</h3>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
        <Alternate1 />
        <Alternate2 />
        <Alternate3 />
        <SectionExamples />
    </div>
        <div className={classes.conatinerCta}>
          <GridContainer style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#222222"}}>>
            <GridItem>
                <h1 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center", paddingLeft: "10px", paddingRight: "10px",
                fontSize: "70px"}, '@media (min-width: 800px)': {textAlign: "center",
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
