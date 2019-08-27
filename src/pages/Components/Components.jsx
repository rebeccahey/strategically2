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
import SectionBasics from "./Sections/SectionBasics.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";
import SectionTabs from "./Sections/SectionTabs.jsx";
import Alternate1 from "./Sections/Alternate1.jsx";
import Alternate2 from "./Sections/Alternate2.jsx";
import Alternate3 from "./Sections/Alternate3.jsx";
import Alternate4 from "./Sections/Alternate4.jsx";
import SectionNotifications from "./Sections/SectionNotifications.jsx";
import SectionTypography from "./Sections/SectionTypography.jsx";
import SectionJavascript from "./Sections/SectionJavascript.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import SectionExamples from "./Sections/SectionExamples.jsx";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
import SectionLogin from "./Sections/SectionLogin.jsx";
import SectionDownload from "./Sections/SectionDownload.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import Typing from 'react-typing-animation';

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Strategically"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 200,
            color: "primary"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                  <h1 css={{'@media (min-width: 300px) and (max-width: 350px)': {paddingTop: '75px', marginTop: "0px", fontSize: "40px"},'@media (min-width: 350px) and (max-width: 800px)': {paddingTop: "0px", marginTop: "0px", fontSize: "50px"}}}>We design extraordinary customer experiences</h1>
                  <h3 css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "20px", paddingRight: "20px", fontSize: "20px"}, '@media (min-width: 800px)': {paddingLeft: "75px", paddingRight: "75px"}}}>
                    We deliver meaningful and lasting results for clients by improving the experiences of their users. Learn more about our unique approach to services and broad portfolio of work.
                  </h3>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
        <Alternate1 />
        <Alternate2 />
        <Alternate3 />
        <Alternate4 />
        <SectionExamples />
    </div>
        <div className={classes.conatinerCta}>
          <GridContainer style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#2A2C2D"}}>>
            <GridItem>
                <h1 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center", paddingLeft: "10px", paddingRight: "10px",
                fontSize: "70px"}, '@media (min-width: 800px)': {textAlign: "center",
                paddingLeft: "200px", paddingRight: "200px"}}}>Ready to speak with a B2B growth specialist?</h1>
                <h3 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center", paddingLeft: "30px", paddingRight: "30px"}, '@media (min-width: 800px)': {textAlign: "center",
                paddingLeft: "300px", paddingRight: "300px"}}}>
                  We deliver meaningful and lasting results for clients by improving the experiences of their users. Learn more about our unique approach to services.
                </h3>
                <Button color="primary" size="lg">
                  Learn More
                </Button>
            </GridItem>
          </GridContainer>
        <Footer/>
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
