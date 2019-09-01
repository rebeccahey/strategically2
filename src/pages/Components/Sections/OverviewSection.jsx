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
             <h4>Step 1: Keyword research</h4>
             <h6>We take apart your vertical to find the most valuable ranking opportunities. Then we design you a bespoke seo strategy that get you the traffic, links and rankings that drive big growth.</h6>
             <h4>Step 2: Competitive analysis</h4>
             <h6>Knowing where your business stands in a competitive landscape gives you the power to market your strengths, capitalize on your competitorsʼ weaknesses and take full advantage of your business opportunities. Using powerful research tools and keen insights, we deliver data-backed a dossier that would make James Bond proud. </h6>
             <h4>Step 3: Content Strategy</h4>
             <h6>Sure, great content is the heart and soul of any website but planning for and creating great content isn't easy. That's where we come in. We provide a clear, data backed strategy for your website's content that supports your business goals as well as giving your users what they need. (We make sure to keep the robots happy, too.)</h6>
             <h4>Search Optimisation</h4>
             <h6>You get it. Search engine optimization is central to the success of your business. Now you just need a partner who gets it, too. Our SEO is purely white-hat, analytics driven, and aimed at attracting and converting quality leads. </h6>
             <h6>Strategically delivers the absolute best in SEO. If you are interested in learning more about how we can help your business’ web presence, we are readily available to talk.</h6>
             <h6>We are 100% UK based. Call 020 3673 0554 today or contact us.</h6>
          </GridItem>
          </GridContainer>
        </div>
        </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(OverviewSection);
