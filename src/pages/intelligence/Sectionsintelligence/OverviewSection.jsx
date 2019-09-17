import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import exampleStyle from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx";

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
             <p>Strategically combines top tier tools and fervent data nerds to gather and organise information about your customers and competitors.</p>
             <p>So if digging through a mountain of data isn’t your idea of a good time, have no fear, we actually get a little excited about this.</p>
             <h4>Competitive Landscape Analysis</h4>
             <p>What do you really know about your competitors and what they're doing on the web?</p>
             <p>It's nearly impossible to position yourself to move ahead of them if you don't know what's making them successful and where their weaknesses are.</p>
             <p>Competitive intel from Strategically dives deep into website features, content, popularity measures (social media activity and site user behaviors), and brand sentiment (what people like or don't like).</p>
             <p>This determines which competitors have the upper hand, and why and how you can take actions to not only compete, but stride ahead.  <Link to="./intelligence/competition/">Learn more.</Link></p>
             <h4>Audience Targeting</h4>
             <p>Do you know your target audiences? Do you know what they need, what they want? Do you know what they’re into, where they're interacting online, and who they really are?</p>
             <p>If you don't know your audiences and their specific needs right now, your likely not attracting and converting them as well as you should be.</p>
             <p> And, you may be missing the mark in your marketing messaging, while the competition snatches them up and takes them away.</p>
             <p>Strategically can help you define your audiences, determine what they need/want the most and craft content strategies to attract and convert those audiences. <Link to="./intelligence/audience/">Learn more.</Link></p>
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
