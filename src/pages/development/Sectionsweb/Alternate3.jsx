import React from "react";
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
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

// import mobile_development from "assets/img/mobile_development.jpg";
const query = graphql`
  query {
    file(name: { eq: "mobile_development" }) {
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
              <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "20px", paddingRight: "20px", paddingBottom: "0px", paddingTop: "150px"}, '@media (min-width: 800px)': {paddingLeft: "70px", paddingTop: "0px"}}}>
                <h2 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center", fontSize: "2.3rem", marginTop: "-100px"}}}>Mobile Development</h2>
                <h6 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}, '@media (min-width: 800px)': {textAlign: "left"}}}>_________</h6>
                <h5 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}}}>We work with clients in variety of industries to build innovative, beautiful and user-friendly iOS and Android applications.</h5>
                <div css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}, '@media (min-width: 800px)': {textAlign: "left"}}}>
                  <Link to="./development/react">
                  <Button css={{'@media (min-width: 300px) and (max-width: 800px)': {fontSize: "1.7rem"}}} color="primary" size="lg">
                    React Native
                  </Button>
                  </Link>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div style={{ paddingRight: "0px"}}>
                {/* <img style={{ width: "80%"}}
                  src={mobile_development}
                  alt="mobile development"
                /> */}
                <StaticQuery
                query={query}
                render={data => (
                  <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt="mobile development"
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
