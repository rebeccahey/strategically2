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

import alternate2 from "assets/img/alternate2.jpg";
import profile from "assets/img/profile.jpg";

class Alternate2 extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div css={{'@media (min-width: 300px) and (max-width: 800px)':
          {padding: "0px!important"}, backgroundColor: "#fff"}} className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center" style={{display: 'block'}}>
            <div css={{'@media (min-width: 300px) and (max-width: 800px)': {backgroundColor: "#fff", display: "flex", flexFlow: "column"}, '@media (min-width: 800px)': {backgroundColor: "#fff", display: "flex", flexFlow: "row"}}}>

            <GridItem xs={12} sm={12} md={6} css={{'@media (min-width: 300px) and (max-width: 800px)': {order: "2"}}}>
              <img
                src={alternate2}
                css={{'@media (min-width: 300px) and (max-width: 800px)': {width: "130vw"}}}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6} css={{'@media (min-width: 300px) and (max-width: 800px)': {order: "1"}, backgroundColor: "#fff"}}>
              <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: "20px", paddingRight: "20px", paddingBottom: "0px", paddingTop: "0px"}, '@media (min-width: 800px)': {paddingRight: "70px", paddingTop: "0px"}}}>
                <h2 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center", fontSize: "2.3rem", marginTop: "-50px"}}}>Frontend Web Development</h2>
                <h6 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}, '@media (min-width: 800px)': {textAlign: "left"}}}>_________</h6>
                <h5 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}}}>Frontend development sits at the intersection of three pillars: clean code, beautiful design and intuative usability. We guarantee all three.</h5>
                <div css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center"}, '@media (min-width: 800px)': {textAlign: "left"}}}>
                  <Link to="./contact">
                  <Button css={{'@media (min-width: 300px) and (max-width: 800px)': {fontSize: "1.7rem"}}} color="primary" size="lg">
                    React Development
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

export default withStyles(exampleStyle)(Alternate2);
