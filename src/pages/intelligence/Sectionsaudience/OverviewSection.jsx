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
        <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: '30px', paddingRight: '30px'}}}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
             <div style={{textAlign: "left"}}>
             <p>Are you driving leads that aren't qualified, or just need to get more? How well do you really know your audiences and what they're looking for? Strategically can help you:</p>
              <p><ul>
              <li>Discover exactly who your target audiences are, so you can focus specifically on those people who will convert.</li>
              <li>Determine where your audiences are spending most of their time online, so you can target them there.</li>
              <li>Discover exactly what those audiences demand.</li>
              <li>Attract and convert them through your website and inbound marketing strategies.</li>
              </ul></p>
              </div>
             <p><Link to="./contact">Get started today.</Link></p>
          </GridItem>
          </GridContainer>
        </div>
        </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(OverviewSection);
