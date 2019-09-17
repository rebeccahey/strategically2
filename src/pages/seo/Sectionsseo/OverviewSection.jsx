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
             <h4>Search Engine Optimisation</h4>
             <p>You get it. Search engine optimisation is central to the success of your business. Now you just need a partner who gets it, too. </p>
             <p>Our SEO is purely white-hat, analytics driven and aimed at attracting and converting quality leads. Strategically delivers the absolute best in SEO.</p>
             <h4>Competitive Intelligence</h4>
             <p>Knowing where your business stands in a competitive landscape gives you the power to market your strengths, capitalise on your competitorsʼ weaknesses and take full advantage of your business opportunities. Using powerful research tools and keen insights, we deliver a dossier that would make James Bond proud. <Link to="./intelligence">Learn more.</Link></p>
             <h4>SEO Website Evaluation</h4>
             <p>Tackle SEO low-hanging fruit. Get a comprehensive, actionable and prioritised SEO evaluation of your existing website that focuses on building measurable long-term success. <Link to="./seo/audit">Learn more.</Link></p>
             <h4>SEO Content Strategy</h4>
             <p>Formulate a content strategy focused on attracting, engaging and converting your core audiences from search. For when you're serious about SEO. <Link to="./seo/strategy">Learn more.</Link></p>
             <h4>In-House SEO Setup</h4>
             <p>Save time, money and everyone a lot of headaches when you're running a well-oiled SEO machine. <Link to="./seo/in-house">Learn more.</Link></p>
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
