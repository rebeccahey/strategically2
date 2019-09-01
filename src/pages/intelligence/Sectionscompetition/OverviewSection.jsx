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
             <p>To get ahead on the web today you need to be better than them. The more you know about who your competitors are and what they're up to, the better chance you have at positioning your product and your website to steal their market share and outperform them.</p>
             <h4>What is competitive intelligence?</h4>
             <p>Competitive intelligence gives you the upper hand. With a little prodding in the right places we can gather insights such as:</p>
             <p><ul>
              <li>What do people like or dislike the most about top competitors?</li>
              <li>What do they want to see more or less of from them?</li>
              <li>Who is talking about them and where are they talking?</li>
              <li>What are people searching for around competitors' brands? What is in demand?</li>
              <li>What product and/or website enhancements are they currently planning?</li>
              </ul></p>
              <h4>How can competitive intelligence drive brand positioning?</h4>
              <p>Consider these questions:</p>
              <p><ul>
               <li>If you knew what people liked most about your competitors, what makes them sharable, linkable, popular, how could you take that to the next level?</li>
               <li>If you knew what people dislike about your competitors, how could you avoid the same mistakes? How could you use this information to your advantage in your advertising?</li>
               <li>How could you re-prioritise your efforts if you knew what product and/or website features people wanted to see most out of your direct competitors (and which ones they're already considering implementing)?</li>
               <li>Similarly, if you knew what people want more or less of from your industry, how could you position yourself to meet those needs?</li>
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
