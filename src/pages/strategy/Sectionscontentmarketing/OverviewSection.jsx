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
             <h4>1. Focus on Audience</h4>
             <div style={{textAlign: "left"}}>
             <p>
             <ul>
              <li>Define audiences.</li>
              <li>Clarify audience needs, demands and sentiment.</li>
              <li>Determine where target audiences are engaging online.</li>
              </ul>
              </p>
              </div>
              <h4>2. Focus on Competition</h4>
              <div style={{textAlign: "left"}}>
              <p>
              <ul>
               <li>Define the competition. Determine who is popular among your audiences and why.</li>
               <li>Analyse competitive content strategies and marketing strategies (including social media and search).</li>
               </ul>
               </p>
               </div>
               <h4>3. Carve a Niche</h4>
               <div style={{textAlign: "left"}}>
               <p>
               <ul>
                <li>Develop an advantageous brand value proposition and niche for your content.</li>
                </ul>
                </p>
                </div>
                <h4>4. Design a Strategy for Content and Marketing It</h4>
                <div style={{textAlign: "left"}}>
                <p>
                <ul>
                 <li>Determine how to make the most of your brand strengths and capitalise on competition weaknesses.</li>
                 <li>Determine content to create, timelines and resources for creation, and where and how to market the content.</li>
                 <li>Prioritise content creation and marketing based on highest demand and biggest opportunities.</li>
                 </ul>
                 </p>
                 </div>
             <p>  <Link to="./contact">Get started today.</Link></p>
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
