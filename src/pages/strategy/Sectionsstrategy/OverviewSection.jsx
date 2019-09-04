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
             <p>Sure, great content is the heart and soul of any website but planning for and creating great content isn't easy. That's where we come in.</p>
             <p>We provide a clear, data backed strategy for your website's content that supports your business goals as well as giving your users what they need. (We make sure to keep the robots happy, too.)</p>
             <h4>Content Strategy</h4>
             <p>Don't waste your time and resources on content that doesn't attract and convert. Be extraordinary.</p>
             <p>Create content that your audiences will share, link to, engage with, return to, and most importantly, value more than your competitors.  <Link to="./strategy/content">Learn more.</Link></p>
             <h4>Content Marketing</h4>
             <p>Great content digs right smack into the heart of the interests and desires of your target audiences, and for that reason it can market itself. But even great content needs a marketing strategy.</p>
             <p>Who are those target audiences, what are those interests and desires, where are these people hanging out and how can you get your great content in front of them? <Link to="./strategy/content-marketing">Learn more.</Link></p>
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
