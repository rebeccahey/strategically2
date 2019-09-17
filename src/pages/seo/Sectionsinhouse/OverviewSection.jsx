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
        <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: '30px', paddingRight: '30px'}, position: 'relative', backgroundColor: '#fff', paddingTop: '30px'}}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
             <h4>SEO Organisational Structure & Hiring</h4>
             <div style={{textAlign: "left"}}>
             <p>The systems and processes that are involved in creating content for the web are crucial for successful long term SEO.</p>
             <p>The larger the company, the more potential there is for fall-off, bottlenecks and lack of proper education that prevent successful results.</p>
             <p>Oftentimes just one area of internal lag in structure or process is all that is needed to thwart success.</p>
             <h4>An organisational audit typically looks at:</h4>
             <p>
             <ul>
              <li>Organisational structure and processes for teams/people involved in content strategy, development, publishing, optimisation and analysis.</li>
              <li>Gaps in performance and accountability.</li>
              <li>Types of reporting available and key metrics monitored.</li>
              <li>Systems used for publishing content (content management systems).</li>
              <li>Education and resources available to all team players.</li>
              <li>Strategy and processes for long-term search acquisition success for the company.</li>
              </ul>
              </p>
              </div>
             <h4>Teams can include:</h4>
             <div style={{textAlign: "left"}}>
             <p><ul>
             <li><strong>Product Managers</strong> (content strategy process & accountability)</li>
             <li><strong>Marketers</strong> (integrated campaign messaging – process for optimising campaign in search)</li>
             <li><strong>SEO teams</strong> (what they’re accountable for, how they interact with other teams, what resources are available to them, etc.)</li>
             <li><strong>Development/engineering teams</strong> (level of knowledge for optimisation (especially ensuring outdated/bad SEO isn’t being implemented, processes & accountability)</li>
             <li><strong>Quality Assurance</strong> (process for SEO QA checks)</li>
             <li><strong>Business Development</strong> (process & accountability for partner deals and content sharing that can affect search performance)</li>
             <li><strong>Accessibility</strong> (working in sync with SEO)</li>
             </ul></p>
             </div>
             <h4>SEO Training & Best Practices</h4>
             <p>Strategically's founder, Sam Franklin, has extensive experience training individuals at small businesses and teams at large corporations, so you can count on getting trustworthy knowledge, best practices, tools and tactics for long-term success.</p>
             <p><Link to="./contact">Get started today.</Link></p>
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
