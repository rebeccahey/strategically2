import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

class SectionPills2 extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={6}>
              <img
                          src={profileImage}
                          className={classes.img}
                          alt="profile"
                        />
              </GridItem>
              <GridItem xs={12} sm={12} md={8} lg={6}>
              <div className={classes.title}>
                <h2>We scale high‑growth SaaS startups</h2>
              </div>
              <div className={classes.title}>
                <h3>
                  <strong>QUIP</strong>
                </h3>
              </div>
              <p> We’ve been Quip’s UX design team from initial traction through their $750MM acquisition by Salesforce. </p>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills2);
