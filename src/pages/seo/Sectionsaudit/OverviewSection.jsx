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
             <h4>SEO Website Audits</h4>
             <div style={{textAlign: "left"}}>
             <p>Is your site set up to properly attract, engage and convert qualified leads from search? Do you feel like your SEO could be better but are not sure how? Are you unassumingly employing dangerous SEO tactics?</p>
             <p>An SEO site evaluation is an assessment of your current site's search engine optimization and it's ability to attract target audiences and convert them through search.</p>
             <p>It is an <strong>action-oriented audit</strong> of your <strong>current</strong> site's organic search performance that includes:</p>
             <p><ul>
              <li>Gap analysis of current content on the site (where are the biggest gaps and opportunities?)</li>
              <li>Performance/analytics analysis (how well are you meeting those opportunities through traffic and conversions now?)</li>
              <li>Prioritized recommendations for optimizing on-site and off-site to better attract and convert qualified leads through search.</li>
              </ul></p>
              </div>
             <p>
            <Link to="./contact">Get started today.</Link></p>
             <div>
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
