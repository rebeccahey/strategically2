import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"

import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import RegularButton from "components/CustomButtons/Button.jsx"
import BlogPost2 from "components/BlogPost2"
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
          B2B, Saas & Marketing Blog </h1>
    </Box>
      </GridItem>
      <BlogPost2
        title="The 7 Steps To A Killer SEO Strategy"
        excerpt="An effective SEO strategy organises your website’s content and architecture by topic to support your business goals, meet your customer needs and inform Google of a users searching intent."
        linkURL="./blog/seo-strategy"
        imageURL="/assets/images/seo1.jpg"
      />
      <BlogPost2
        title="Business Goals, Audiences & Value Props"
        excerpt="Optimization is more than just meta tags and links. Search is a marketing channel, and that channel caters to particular audiences with specific needs to be met while also fulfilling your website goals."
        linkURL="./blog/seo-strategy#understanding-business-goals-audiences-and-value-propositions"
        imageURL="/assets/images/seo2.jpg"
      />
      <BlogPost2
        title="How to Do In-Depth Keyword Research"
        excerpt="The purpose of keyword research is to determine topics relevant to what you provide, the best keywords to target and incorporate, and to prioritize content and topics based on relevance and search volume."
        linkURL="./blog/seo-strategy#keyword-research"
        imageURL="/assets/images/seo3.jpg"
      />
      <BlogPost2
        title="Conducting Opportunity & Gap Analysis"
        excerpt="For existing businesses a gap and opportunity analysis is an excellent way to use Google search volume data and your existing traffic data to get a clear picture of your website's strengths and weaknesses."
        linkURL="./blog/seo-strategy#opportunity--gap-analysis"
        imageURL="/assets/images/seo4.jpg"
      />
      <BlogPost2
        title="Who Are Your Competitors?"
        excerpt="If we know which businesses rank in the top spots, we can dissect the strategies and techniques they employ to get there. We then have a really clear understanding what it takes to rank your website and beat the competition."
        linkURL="./blog/seo-strategy#who-are-your-competitors"
        imageURL="/assets/images/seo5.jpg"
      />
      <BlogPost2
        title="Analysing the Competitive Landscape"
        excerpt="If your goal is to be ranked in the top 5 on Google for the categories relevant to your business, then you need to dissect what, why, and how the other guys are doing it. That’s where competitive analysis comes in."
        linkURL="./blog/seo-strategy#analysing-the-competitive-landscape"
        imageURL="/assets/images/seo6.jpg"
      />
      <BlogPost2
        title="SEO Strategy & Recommendations"
        excerpt="Now it’s time to pull it all together into an actionable strategy. It may sound like a daunting task, in this step, we will round up all the data from steps 1–5 and create a document of strategic SEO recommendations."
        linkURL="./blog/seo-strategy#seo-strategy--recommendations"
        imageURL="/assets/images/seo7.jpg"
      />
      <BlogPost2
        title="Prioritisation & Cost Benefit Analysis"
        excerpt="The goal of a strategy is not to overload a business. It is to provide actionable steps, in order of priority, to take your business from its current position to reigning supreme on the web."
        linkURL="./blog/seo-strategy#Prioritisation-and-cost-benefit-analysis"
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
            <RegularButton color="primary" size="lg">
              Get in Touch
            </RegularButton>
            </Link>
        </GridItem>
      </GridContainer>
    </div>
  </>
)

export default withStyles(componentsStyle)(Work)
