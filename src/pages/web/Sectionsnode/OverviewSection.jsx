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
             <h4>Why we love Node JS</h4>
             <p>We love Node.js because it is a light, scalable, and cross-platform method to execute code. Exceptionally efficient due to its event-driven I/O model, it's the best way for businesses to increase coding efficiency and improve website performance.</p>
             <h4>Node JS is FAST</h4>
         <p>Node JS is written in C language, making it far faster than Ruby, Python and Perl. Node Js can handle thousands of concurrent connections with limited overhead on any individual process delivering incredible performance. </p>
        <h4>It’s all JavaScript</h4>
        <p>As JavaScript is used on the web server and the browser, this reduces the mismatch between two programming environments. Also, duplicate form validation code can be shared between client and server.</p>
        <h4>Large community</h4>
        <p>JavaScript is, arguably, the most popular coding language. This means there's a large community to access help and support.</p>
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
