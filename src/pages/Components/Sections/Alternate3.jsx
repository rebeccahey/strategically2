import React from "react";
// react components for routing our app without refresh
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import exampleStyle from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx";

// import alternate3 from "assets/img/alternate3.jpg";
const query = graphql`
  query {
    file(name: { eq: "alternate3" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`


class Alternate3 extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div css={{'@media (min-width: 300px) and (max-width: 800px)':
          {padding: "0px!important"}}} className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "20px", paddingRight: "20px", paddingBottom: "0px", paddingTop: "0px"}, '@media (min-width: 800px)': {paddingLeft: "70px", paddingTop: "0px"}}}>
                <h2 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center", fontSize: "2.3rem", marginTop: "-100px"}}}>We scale lead generation for consulting companies</h2>
                <h6 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}, '@media (min-width: 800px)': {textAlign: "left"}}}>_______________</h6>
                <h4 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}}}>03: Acquisition</h4>
                <h5 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}}}>We unlock untapped growth potential for high-ticket consultancy companies & SaaS businesses by building effective paid and organic lead generation funnels.</h5>
                <div css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}, '@media (min-width: 800px)': {textAlign: "left"}}}>
                  <Link to="./contact">
                  <Button css={{'@media (min-width: 300px) and (max-width: 800px)': {fontSize: "1.7rem"}}} color="primary" size="lg">
                    Get in Touch
                  </Button>
                  </Link>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div style={{ paddingRight: "0px"}}>
                {/* <img style={{ width: "100%"}}
                  src={alternate3}
                  alt="lead generation for B2B and SaaS companies"
                /> */}
                <StaticQuery
                query={query}
                render={data => (
                  <Img
                    style={{ marginLeft: "30px"}}
                    fluid={data.file.childImageSharp.fluid}
                    alt="lead generation for B2B and SaaS companies"
                  />
                )}
              />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(Alternate3);
