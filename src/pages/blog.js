import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"

import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import BlogPost from "components/BlogPost"
import BlogCategory from "components/BlogCategory"
import { Link } from "gatsby"

const StyledButton = withStyles({
  root: {
    backgroundColor: "#CACACA",
    borderRadius: 3,
    border: 0,
    color: "#000",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      color: "#FFF",
      backgroundColor: "#e83e33",
      borderColor: "#e83e33",
      boxShadow: "none",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button)

const Work = ({ classes, ...rest }) => (
  <>
    <Header
      brand="Strategically"
      rightLinks={<HeaderLinks />}
      fixed
      color="primary"
      {...rest}
    />
    <GridContainer justify="center" spacing={3}>
      <GridItem xs={12}>
        <Box mt={"108px"} maxWidth="800px" px={3} py={8} mx="auto">
          <h1
            css={{
              fontSize: "48px",
              color: "#000",
            }}
          >
          B2B & SaaS Content Marketing Blog </h1>
    </Box>
      </GridItem>
      <BlogPost
        title="The 7 Steps To A Killer SEO Strategy"
        linkURL="https://strategically.co/blog/seo-strategy"
        imageURL="/assets/images/seo1.jpg"
      />
      <BlogPost
        title="Business Goals, Audiences & Value Props"
        linkURL="https://strategically.co/blog/seo-strategy#understanding-business-goals-audiences-and-value-propositions"
        imageURL="/assets/images/seo2.jpg"
      />
      <BlogPost
        title="How to Do In-Depth Keyword Research"
        linkURL="https://strategically.co/blog/seo-strategy#keyword-research"
        imageURL="/assets/images/seo3.jpg"
      />
      <BlogPost
        title="Conducting Opportunity & Gap Analysis"
        linkURL="https://strategically.co/blog/seo-strategy#opportunity--gap-analysis"
        imageURL="/assets/images/seo4.jpg"
      />
      <BlogPost
        title="Who Are Your Competitors?"
        linkURL="https://strategically.co/blog/seo-strategy#who-are-your-competitors"
        imageURL="/assets/images/seo5.jpg"
      />
      <BlogPost
        title="Analysing the Competitive Landscape"
        linkURL="https://strategically.co/blog/seo-strategy#analysing-the-competitive-landscape"
        imageURL="/assets/images/seo6.jpg"
      />
      <BlogPost
        title="SEO Strategy & Recommendations"
        linkURL="https://strategically.co/blog/seo-strategy#seo-strategy--recommendations"
        imageURL="/assets/images/seo7.jpg"
      />
      <BlogPost
        title="Prioritisation and Cost Benefit Analysis"
        linkURL="https://strategically.co/blog/seo-strategy#Prioritisation-and-cost-benefit-analysis"
        imageURL="/assets/images/seo8.jpg"
      />
    </GridContainer>
    <div className={classes.conatinerCta}>
      <GridContainer style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#222222"}}>>
        <GridItem>
            <h1 css={{'@media (min-width: 300px) and (max-width: 800px)': {textAlign: "center", paddingLeft: "10px", paddingRight: "10px",
            fontSize: "70px"}, '@media (min-width: 800px)': {textAlign: "center",
            paddingLeft: "240px", paddingRight: "240px"}}}>Let's create amazing content together</h1>
            <Link to="./contact">
            <Button color="primary" size="lg">
              Get in Touch
            </Button>
            </Link>
        </GridItem>
      </GridContainer>
    </div>
  </>
)

export default withStyles(componentsStyle)(Work)
