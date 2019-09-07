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
             <h4>Node JS Development</h4>
             <p>Built on Chrome's V8 JS engine, Node JS is a JavaScript runtime. It's lightweight and efficient because it uses an event-diven, non-blocking I/O model.</p>
             <h4>Blazing Fast Processing</h4>
             <p>Like Google Chrome, Node uses V8 JavaScript Runtime engine with a wrapper over the JavaScript engine to provide extra capabilities to build network applications. Written using C language, it is far faster than Ruby, Python and Perl.</p>
             <h4>Concurrent Request Handling</h4>
             <p>Thousands of concurrent connections can be handled with limited overhead on any individual process.</p>
             <h4>One Environment</h4>
             <p>As JavaScript is used on the web server and the browser, this reduces the mismatch between two programming environments. Also, duplicate form validation code can be shared between client and server.</p>
             <h4>Easy to learn</h4>
             <p>Node is JavaScript, which means existing JavaScript developers can easily and quickly get started with Node.</p>
             <h4>Large Community</h4>
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
