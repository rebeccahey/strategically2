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
        <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: '30px', paddingRight: '30px'}, position: 'relative', backgroundColor: '#fff', paddingTop: '30px'}}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
             <div style={{textAlign: "left"}}>
             <p>SEO content strategy starts with a comprehensive look at the entire industry you are trying to reach.</p>
             <p>It goes beyond auditing the search performance of the current site and includes strategy for how to attract, engage and convert qualified leads through organic search and other inbound marketing channels.</p>
             <p>Content strategy is the first step in search optimisation, where audience needs and competitive landscape determine the approach for content to build, how to build it, and how to market, measure and maintain it over time. This is especially important in competitive verticals online.</p>
             <h4>Organic SEO content strategy includes:</h4>
             <p>
             <ul>
              <li><strong>Audience targeting:</strong> Identifying, prioritising, and determining the demands of your audience(s) in search.</li>
              <li><strong>Competitive landscape analysis:</strong> Who's doing it right, what are they doing, and how can you do even better?</li>
              <li><strong>Opportunity analysis:</strong> Where are the largest opportunities and how are they prioritised?</li>
              <li><strong>Actionable recommendations:</strong> Strategy for meeting those opportunities based on current performance, competitive landscape and resources required to get there.</li>
              </ul>
              </p>
              <p><Link to="./contact">Get started today.</Link></p>
             </div>
          </GridItem>
          </GridContainer>
        </div>
        </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(OverviewSection);
