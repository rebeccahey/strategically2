import React from "react";
// react components for routing our app without refresh
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
        <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: '30px', paddingRight: '30px'}, position: 'relative', backgroundColor: '#fff', paddingTop: '30px'}}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
             <div style={{textAlign: "left"}}>
             <h4>React Development</h4>
             <p>Released in 2013, React is a powerful JavaScript library for building user interfaces. Developed by Facebook, it's popular with startups and Fortune 500 companies.
             <p>It is fast, open-source and search engine friendly with components which can be reused. We love it because we can quickly build better products for our clients</p>
             <h4>The React Framework</h4>
             <p>The React framework means developers can reuse components on multiple pages on a website. This not only saves time, but also improves the cohesion of the user experience by standardising common elements.</p>
             <p>Valuable time is saved, allowing developers to focus on application architecture and business logic. In addition, one-way bindings make data flows easier to understand, spot issues and debug.</p>
             <p>Web pages can render faster as the use of a Virtual dom means other JavaScript frameworks, like JQuery, are not required. As faster website load speeds are important SEO signals, this benefits the SEO of your website.</p>
             <h4>React Native</h4>
             <p>Use React Native to build mobile apps on iOS and Andriod. By using existing React code, you can launch quickly and have less code to maintain in the long term.</p>
             <p>The time it takes to build mobile apps is significantly reduced by the ability to reuse elements of the same codebase for mobile and web applications.</p>
             </p>
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
