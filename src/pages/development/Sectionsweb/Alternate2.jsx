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

import frontend_development from "assets/img/frontend_development.jpg";


class Alternate1 extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: '30px', paddingRight: '30px'}, position: 'relative', backgroundColor: '#fff', paddingTop: '30px'}}>
      <div css={{padding: "0px!important"}} className={classes.section}>
        <div css={{'@media (min-width: 300px) and (max-width: 2000px)':
          {padding: "0px!important"},backgroundColor: "#fff", padding: "0px!important"}} className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6} css={{'@media (min-width: 300px) and (max-width: 800px)': {order: "2"}}}>
              <img style={{ width: `80%`,}}
                src={frontend_development}
                alt="frontend development"
                css={{'@media (min-width: 300px) and (max-width: 800px)': {width: "130vw"}}}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6} css={{'@media (min-width: 300px) and (max-width: 800px)': {order: "1"}, backgroundColor: "#fff"}}>
            <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "20px", paddingRight: "20px", paddingBottom: "0px", paddingTop: "0px"}, '@media (min-width: 800px)': {paddingRight: "70px", paddingTop: "0px"}}}>
                <h2 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center", fontSize: "2.3rem", marginTop: "50px"}}} >Frontend Development</h2>
                <h6 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}, '@media (min-width: 800px)': {textAlign: "left"}}}>_________</h6>
                <h5 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}}}>Our frontend development is a blend of clean code, impeccable design and extreme usability, creating an experience your customers will love.</h5>
                <div css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}, '@media (min-width: 800px)': {textAlign: "left"}}}>
              <Link to="./development/react">
              <Button css={{'@media (min-width: 300px) and (max-width: 800px)': {fontSize: "1.7rem", marginRight: "0px!important"}}} color="primaryweb" size="lg">
            React JS
            </Button>
            </Link>
            <Link to="./development/gatsby/">
            <Button css={{'@media (min-width: 300px) and (max-width: 800px)': {fontSize: "1.7rem", marginRight: "0px!important"}}} color="primaryweb" size="lg">
          Gatsby
          </Button>
          </Link>
                </div>
               </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(Alternate1);
