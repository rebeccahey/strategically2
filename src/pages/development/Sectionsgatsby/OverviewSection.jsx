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
             <h4>What are static site generators such as Gatsby?</h4>
             <p>Dynamic sites require client-server interaction, causing slow load speeds, security issues and increased hosting costs.</p>
             <p>On the other hand, because static sites contain fixed content, coupled with the absence of a server, the issues associated with dynamic sites are mitigated. </p>
             <p>Static Site Generators are tools which are used to efficiently and effectively develop static sites. Technologies like Gatsby and Jekyll are on the rise along with the use of static sites. </p>
             <h4>Why do we love developing websites using Gatsby?</h4>
             <p>It is a robust, reliable and fast static site generator, rendering static content on the web using React JS.</p>
             <p>Website content is created as React components and is rendered to the DOM as static CSS, JavaScript and HTML. If you need to extend or modify Gatsby’s existing functionality, you can use plugins. </p>
             <p>Gatsby is not only robust, but the static content can also be sourced from a variety of sources. Formats include, but are not limited to, markdown, CSV, along with well-known CMS programs WordPress and Drupal. </p>
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
