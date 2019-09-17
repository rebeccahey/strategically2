import React from "react";
// react components for routing our app without refresh
import classNames from "classnames";

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
import backend_development from "assets/img/backend_development.jpg";


class Alternate1 extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: '30px', paddingRight: '30px'}, position: 'relative', backgroundColor: '#fff', paddingTop: '30px'}}>
      <div css={{padding: "0px!important"}} className={classes.section}>
        <div css={{'@media (min-width: 300px) and (max-width: 2000px)':
          {padding: "0px!important"},backgroundColor: "#fff", padding: "0px!important"}} className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "20px", paddingRight: "20px", paddingBottom: "0px"}, '@media (min-width: 800px)': {paddingLeft: "70px"}}}>
                <h2 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center", fontSize: "2.3rem", marginTop: "50px"}}} >Backend Development</h2>
                <h6 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}, '@media (min-width: 800px)': {textAlign: "left"}}}>_________</h6>
                <h5 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}}}>Bullet-proof your business logic with reliable backend development that you can count on, always. </h5>
                <div css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}, '@media (min-width: 800px)': {textAlign: "left"}}}>
              <Link to="./development/node">
              <Button css={{'@media (min-width: 300px) and (max-width: 800px)': {fontSize: "1.7rem", marginRight: "0px!important"}}} color="primaryweb" size="lg">
            Node JS
            </Button>
            </Link>
                </div>
               </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <img style={{ width: `80%`,}}
                src={backend_development}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(Alternate1);