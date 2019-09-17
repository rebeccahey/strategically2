import React from "react";
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import exampleStyle from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx";

import blog1 from "assets/img/blog1.jpg";
import blog2 from "assets/img/blog2.jpg";

class SectionExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <a href="https://medium.com/strategically/step-2-keyword-research-based-on-the-target-audience-7037db2c1280">
                <img
                  src={blog1}
                  alt="SEO keyword research"
                  className={
                    classes.imgBlog
                  }
                />
                </a>
                <div style={{ textAlign: "center"}}>
                <h4 css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "20px",paddingRight: "20px",paddingTop: "15px",
                textAlign: "center"}, '@media (min-width: 800px)': {paddingLeft: "70px",
                paddingRight: "70px",paddingTop: "15px",textAlign: "center"}}}>The complete guide to keyword research</h4>
                <h5 css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "30px",paddingRight: "30px",textAlign: "center"}, '@media (min-width: 800px)': {paddingLeft: "100px",paddingRight: "100px",textAlign: "center"}}}>The essential process to reverse engineer website architecture and content strategy based on available search demand.</h5>
                <a href="https://medium.com/strategically/step-2-keyword-research-based-on-the-target-audience-7037db2c1280">
                <Button color="primary" size="lg">
                    Read More
                </Button>
                </a>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <a href="https://medium.com/strategically/step-5-analysing-the-competitive-landscape-11b7db46e9e2">
                <img
                  src={blog2}
                  alt="Competitive analysis for SEO"
                  className={
                    classes.imgBlog
                  }
                />
                </a>
                <div style={{ textAlign: "center"}}>
                <h4 css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "20px",paddingRight: "20px",paddingTop: "15px",
                textAlign: "center"}, '@media (min-width: 800px)': {paddingLeft: "70px",
                paddingRight: "70px",paddingTop: "15px",textAlign: "center"}}}>Analysing the digital competitive landscape</h4>
                <h5 css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "30px",paddingRight: "30px",textAlign: "center"}, '@media (min-width: 800px)': {paddingLeft: "100px",paddingRight: "100px",textAlign: "center"}}}>Learn where your business stands in a competitive landscape, giving you the power to market your strength.</h5>
                <a href="https://medium.com/strategically/step-5-analysing-the-competitive-landscape-11b7db46e9e2">
                <Button color="primary" size="lg">
                    Read More
                </Button>
                </a>
                </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(SectionExamples);
