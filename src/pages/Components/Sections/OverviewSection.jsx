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
import alternate1 from "assets/img/alternate1.jpg";


class OverviewSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
             <h4>Overview</h4>
             <h6>It’s easy for a design-driven company like ours to quickly adapt new methodologies and refine problem-solving skills through iteration, trial, and error. For Roche, a $30 billion dollar pharmaceutical giant with over 80,000 employees worldwide, change is a bit slower.</h6>
             <h6>The Roche Global Market Insights team spent nearly two weeks in our office in San Diego (in addition to months of consultation) as we provided hands-on training through a series of workshops, ending with a real-world five day Design Sprint. The goal: to empower the Roche team so they could return to their organization with design-thinking methodologies that could transform the way their teams solve problems.</h6>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(OverviewSection);
