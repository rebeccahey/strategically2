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
             <h4>What is Content Strategy?</h4>
             <p>
             <ul>
              <li>Content strategy determines exactly what to produce (editorial content, videos, tools, etc.) to attract new visitors, retain and engage existing audiences, and promote natural sharing and links to your website.</li>
              <li>Research that goes into content strategy typically also provides insights and feedback that can go into making a better product.</li>
              </ul>
              </p>
              <h4>Why Content Strategy?</h4>
              <p>Building it does not always mean they will come (and engage, and buy, and share). Content without strategy can be a monumental waste of valuable time and resources.</p>
              <p>The right content can:</p>
              <p>
              <ul>
               <li>Tap into your target audiences interests, desires and emotions.</li>
               <li>Attract and engage new visitors and highly qualified leads.</li>
               <li>Create brand advocates who talk about and share your content and brand assets beyond your website.</li>
               </ul>
               </p>
             </div>
             <p><Link to=".strategy/content-marketing">Learn more about the Strategically content strategy process.</Link></p>
          </GridItem>
          </GridContainer>
        </div>
        </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(OverviewSection);
