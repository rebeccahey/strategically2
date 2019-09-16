import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import exampleStyle from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx";

import landing from "assets/img/landing.jpg";
import profile from "assets/img/profile.jpg";
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
              <Link to="./blog/seo-strategy">
                <img
                  src={blog1}
                  alt="SEO keyword research"
                  className={
                    classes.imgBlog
                  }
                  css={{'@media (min-width: 300px) and (max-width: 800px)':{width: '100%!important'},'@media (min-width: 800px)':{width: 'auto!important'}}}
                />
                </Link>
                <div style={{ textAlign: "center"}}>
                <h4 css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "20px",paddingRight: "20px",paddingTop: "15px",
                textAlign: "center"}, '@media (min-width: 800px)': {paddingLeft: "70px",
                paddingRight: "70px",paddingTop: "15px",textAlign: "center"}}}>The 7 steps to a killer SEO strategy</h4>
                <h5 css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "30px",paddingRight: "30px",textAlign: "center"}, '@media (min-width: 800px)': {paddingLeft: "100px",paddingRight: "100px",textAlign: "center"}}}>An SEO strategy is a data-backed blueprint to generate pre-qualified leads to your website using organic traffic.</h5>
                <Link to="./blog/seo-strategy">
                <Button color="primary" size="lg">
                    Read More
                </Button>
                </Link>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Link to="./blog/seo-strategy/#analysing-the-competitive-landscape">
              <img
                  src={blog2}
                  alt="Competitive analysis for SEO"
                  className={
                    classes.imgBlog
                  }
                  css={{'@media (min-width: 300px) and (max-width: 800px)':{width: '100%!important'},'@media (min-width: 800px)':{width: 'auto!important'}}}
                />
                </Link>
                <div style={{ textAlign: "center"}}>
                <h4 css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "20px",paddingRight: "20px",paddingTop: "15px",
                textAlign: "center"}, '@media (min-width: 800px)': {paddingLeft: "70px",
                paddingRight: "70px",paddingTop: "15px",textAlign: "center"}}}>Analysing the competitive landscape</h4>
                <h5 css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "30px",paddingRight: "30px",textAlign: "center"}, '@media (min-width: 800px)': {paddingLeft: "100px",paddingRight: "100px",textAlign: "center"}}}>Learn where your business stands in a competitive landscape, giving you the power to market your strength.</h5>
                <Link to="./blog/seo-strategy/#analysing-the-competitive-landscape">
                <Button color="primary" size="lg">
                    Read More
                </Button>
                </Link>
                </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(SectionExamples);
