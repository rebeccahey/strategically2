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


// import alternate4 from "assets/img/alternate4.jpg";
const query = graphql`
  query {
    file(name: { eq: "alternate4" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

class Alternate4 extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div css={{'@media (min-width: 300px) and (max-width: 800px)':
          {padding: "0px!important"}}} className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">

            <div css={{'@media (min-width: 300px) and (max-width: 800px)': {display: "flex", flexFlow: "column"}, '@media (min-width: 800px)': {display: "flex", flexFlow: "row"}}}>

            <GridItem xs={12} sm={12} md={6} css={{'@media (min-width: 300px) and (max-width: 800px)': {order: "2"}}}>
              {/* <img style={{ width: "100%"}}
                src={alternate4}
                alt="content strategy agency"
              /> */}
              <StaticQuery
                query={query}
                render={data => (
                  <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt="content strategy agency"
                  />
                )}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6} css={{'@media (min-width: 300px) and (max-width: 800px)': {order: "1"}}}>
              <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "20px", paddingRight: "20px", paddingBottom: "0px", paddingTop: "0px"}, '@media (min-width: 800px)': {paddingRight: "50px", paddingTop: "0px"}}}>
                <h2 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center", fontSize: "2.3rem", marginTop: "0px"}}}>We scale content creation for authority blogs</h2>
                <h6 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}, '@media (min-width: 800px)': {textAlign: "left"}}}>_______________</h6>
                <p
        css={{
          "@media (min-width: 300px) and (max-width: 800px)": {
            textAlign: "center",
          },
        }}
      >
        <img style={{ width: `35%`,}}
   src="/assets/images/Website_Planet.svg" alt=""></img>
      </p>
                <h5 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}}}>"Working with Strategically has been an amazing experience. They are professional, hard-working, and extremely dedicated. I wouldn’t hesitate to recommend."
                </h5>
                <div css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}, '@media (min-width: 800px)': {textAlign: "left"}}}>
                  <Link to="./strategy">
                  <Button css={{'@media (min-width: 300px) and (max-width: 800px)': {fontSize: "1.7rem"}}} color="primary" size="lg">
                    View Our Work
                  </Button>
                  </Link>
                </div>
              </div>
           </GridItem>
           </div>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(Alternate4);
