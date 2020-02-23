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
import RegularButton from "components/CustomButtons/Button.jsx"
import BlogPost from "components/BlogPost"
import BlogCategory from "components/BlogCategory"
import { Link } from "gatsby"

import blog1 from "assets/img/blog1.jpg"
import blog2 from "assets/img/blog2.jpg"

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
            We write blog posts and white papers for B2B SaaS and marketing companies.  </h1>
          <p css={{ textAlign: "center" }}>
          Our clients include wonderful companies like AB Tasty, Gmelius, Bubblegum Search and WebsitePlanet.
          </p>
    </Box>
      </GridItem>
      <GridContainer
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "-10px", marginBottom: "14px"}}
      >
        <GridItem xs={6} md={3}>
          <StyledButton href="#SaaS">SaaS</StyledButton>
        </GridItem>
        <GridItem xs={6} md={3}>
          <StyledButton href="#SEO">SEO</StyledButton>
        </GridItem>
        <GridItem xs={6} md={3}>
          <StyledButton href="#CRO">CRO</StyledButton>
        </GridItem>
        <GridItem xs={6} md={3}>
          <StyledButton href="#social">SEM</StyledButton>
        </GridItem>
      </GridContainer>

      <BlogCategory title="SaaS Portfolio" sectionID="SaaS" />
      <BlogPost
        title="Your Guide to Organizational Alignment (And Why It's Important)"
        linkURL="https://gmelius.com/blog/guide-to-organizational-alignment"
        imageURL="/assets/images/blog4.png"
        logoURL="/assets/images/gmelius.svg"
      />
      <BlogPost
        title="How to Onboard a New Remote Team Member"
        linkURL="https://gmelius.com/blog/how-to-onboard-a-new-remote-team-member"
        imageURL="/assets/images/blog3.png"
        logoURL="/assets/images/gmelius.svg"
      />
      <BlogPost
        title="Too Many Emails and Meetings? Here's the Solution"
        linkURL="https://gmelius.com/blog/too-many-emails-and-meetings"
        imageURL="/assets/images/blog5.png"
        logoURL="/assets/images/gmelius.svg"
      />
      <BlogPost
        title="The Power of Email Automation and How Gmelius Helps"
        linkURL="https://gmelius.com/blog/the-power-of-email-automation"
        imageURL="/assets/images/blog6.png"
        logoURL="/assets/images/gmelius.svg"
      />
      <BlogPost
        title="How to Effectively Welcome a New Team Member"
        linkURL="https://gmelius.com/blog/how-to-welcome-a-new-team-member"
        imageURL="/assets/images/blog7.png"
        logoURL="/assets/images/gmelius.svg"
      />
      <BlogPost
        title="How Adding Gmail Notes in Your Emails Can Improve Your Business"
        linkURL="https://gmelius.com/blog/email-notes-in-gmail"
        imageURL="/assets/images/blog8.png"
        logoURL="/assets/images/gmelius.svg"
      />
      <BlogCategory title="SEO Portfolio" sectionID="SEO" />
      <BlogPost
        title="A 10-Step SEO Plan to Rank Higher in 2020"
        linkURL="https://www.bubblegumsearch.com/blog/seo-plan/"
        imageURL="/assets/images/blog9.png"
        logoURL="/assets/images/bubblegum.svg"
      />
      <BlogPost
        title="Mobile SEO Audit in 10 Easy Steps (FREE Checklist)"
        linkURL="https://www.bubblegumsearch.com/blog/mobile-seo-audit/"
        imageURL="/assets/images/blog10.png"
        logoURL="/assets/images/bubblegum.svg"
      />
      <BlogPost
        title="10 WordPress SEO Tips & Tricks to Boost Rankings"
        linkURL="https://www.bubblegumsearch.com/blog/wordpress-seo-tips/"
        imageURL="/assets/images/blog11.png"
        logoURL="/assets/images/bubblegum.svg"
      />
      <BlogPost
        title="Shopify SEO: The Ultimate Beginner’s Guide to Higher Rankings"
        linkURL="https://www.bubblegumsearch.com/blog/shopify-seo/"
        imageURL="/assets/images/blog12.png"
        logoURL="/assets/images/bubblegum.svg"
      />
      <BlogPost
        title="SEO ROI: How to Prove the Value of Your Organic Marketing"
        linkURL="https://www.bubblegumsearch.com/blog/seo-roi-how-to-prove-value-organic-marketing/"
        imageURL="/assets/images/blog13.png"
        logoURL="/assets/images/bubblegum.svg"
      />
      <BlogPost
        title="The 7 Steps To A Killer SEO Strategy: The Ultimate Guide"
        linkURL="https://strategically.co/blog/seo-strategy"
        imageURL="/assets/images/blog14.png"
        logoURL="/assets/images/Strategically.svg"
      />
      <BlogCategory title="CRO & Ecommerce Portfolio" sectionID="CRO" />
      <BlogPost
        title="5 Effective Ways to Increase the Average Order Value of Your Ecommerce Store"
        linkURL="https://www.adscale.com/2020/02/06/5-highly-effective-ways-to-increase-the-average-order-value-of-your-ecommerce-store/"
        imageURL="/assets/images/blog16.png"
        logoURL="/assets/images/adscale.svg"
      />
      <BlogPost
        title="Ecommerce Trends in 2020: What Do We Predict?"
        linkURL="https://www.adscale.com/2020/02/17/ecommerce-trends-in-2020-what-do-we-predict/"
        imageURL="/assets/images/blog15.jpg"
        logoURL="/assets/images/adscale.svg"
      />
      <BlogPost
        title="What Does Customer Experience Mean? And How Can We Measure It?"
        linkURL="https://www.abtasty.com/blog/what-is-cx-how-to-measure-it/"
        imageURL="/assets/images/blog17.png"
        logoURL="/assets/images/ab_tasty.svg"
      />
      <BlogPost
        title="The Essential Website Optimization Tools that Every Marketer Needs"
        linkURL="https://www.abtasty.com/blog/5-website-optimization-tools/"
        imageURL="/assets/images/blog23.png"
        logoURL="/assets/images/ab_tasty.svg"
      />
      <BlogPost
        title="Decision Fatigue and Its Effect on Website Conversion Rates"
        linkURL="https://www.abtasty.com/blog/decision-fatigue-website-conversion-rates/"
        imageURL="/assets/images/blog24.png"
        logoURL="/assets/images/ab_tasty.svg"
      />
      <BlogPost
        title="A Guide to Website Personalization in 2020"
        linkURL="https://www.abtasty.com/blog/website-personalization-2020/"
        imageURL="/assets/images/blog27.png"
        logoURL="/assets/images/ab_tasty.svg"
      />
      <BlogPost
        title="6 Behavioral Targeting Success Stories (and How You Can Copy Them)"
        linkURL="https://www.abtasty.com/blog/behavioral-targeting-wins/"
        imageURL="/assets/images/blog28.png"
        logoURL="/assets/images/ab_tasty.svg"
      />
      <BlogPost
        title="The Ultimate Guide to Growth Hacking in 2020"
        linkURL="https://www.abtasty.com/blog/what-is-growth-hacking/"
        imageURL="/assets/images/blog25.png"
        logoURL="/assets/images/ab_tasty.svg"
      />
      <BlogCategory title="Social Media Portfolio" sectionID="social" />
      <BlogPost
        title="How to Get More Instagram Followers for Your Retail Brand"
        linkURL="https://www.abtasty.com/blog/instagram-followers/"
        imageURL="/assets/images/blog26.png"
        logoURL="/assets/images/ab_tasty.svg"
      />
      <BlogPost
        title="Social Pilot: A Solid Social Media Scheduler, But Does It Do Enough?"
        linkURL="https://www.websiteplanet.com/social-media-tools/socialpilot/"
        imageURL="/assets/images/blog19.png"
        logoURL="/assets/images/Website_Planet.svg"
      />
      <BlogPost
        title="Sendible: Sendible’s Feature-Rich, but Is the Price Right?"
        linkURL="https://www.websiteplanet.com/social-media-tools/sendible/"
        imageURL="/assets/images/blog18.png"
        logoURL="/assets/images/Website_Planet.svg"
      />
      <BlogPost
        title="Hootsuite – Helpful or Hyped?"
        linkURL="https://www.websiteplanet.com/social-media-tools/hootsuite/"
        imageURL="/assets/images/blog20.png"
        logoURL="/assets/images/Website_Planet.svg"
      />
      <BlogPost
        title="eClincher:Is eClincher a Hootsuite Beater?"
        linkURL="https://www.websiteplanet.com/social-media-tools/eclincher/"
        imageURL="/assets/images/blog21.png"
        logoURL="/assets/images/Website_Planet.svg"
      />
      <BlogPost
        title="Sprout Social: A Pricey Social Media Dashboard for Businesses"
        linkURL="https://www.websiteplanet.com/social-media-tools/sprout-social/"
        imageURL="/assets/images/blog22.png"
        logoURL="/assets/images/Website_Planet.svg"
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
