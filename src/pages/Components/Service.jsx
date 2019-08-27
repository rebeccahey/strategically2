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
import OverviewSection from "./Sections/OverviewSection.jsx";
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
        <Parallax image={require("assets/img/ServiceImage.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                  <h1 style={{ textAlign: "left"}}>Using lean, agile design-thinking to improve the human condition</h1>
                  <h6 style={{ color: "#ffffff", textAlign: "left"}}>_________</h6>
                  <h5 style={{ color: "#ffffff", textAlign: "left"}}>It’s easy for a design-driven company like ours to quickly adapt new methodologies</h5>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
        <OverviewSection />
        <Alternate1 />
        <Alternate2 />
        <Alternate3 />
        <Alternate4 />
        <SectionExamples />
    </div>
        <div className={classes.conatinerCta}>
          <GridContainer style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#2A2C2D"}}>>
            <GridItem>
                <h1 style={{ textAlign: "center", paddingLeft: "200px", paddingRight: "200px"}}>Ready to speak with a B2B growth specialist?</h1>
                <h3 style={{ paddingLeft: "300px", paddingRight: "300px"}}>
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
