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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p css={{ textAlign: "center" }}>
            Movet diceret lucilius quo at, at his causae nonumes. No menandri
            postulant eam, ius id tale oratio mentitum. In mea doctus utroque
            luptatum.
          </p>
        </Box>
      </GridItem>

      <GridContainer
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "16px", marginBottom: "24px"}}
      >
        <GridItem xs={6} md={3}>
          <StyledButton href="#saas">SaaS</StyledButton>
        </GridItem>
        <GridItem xs={6} md={3}>
          <StyledButton href="#seo">SEO</StyledButton>
        </GridItem>
        <GridItem xs={6} md={3}>
          <StyledButton href="#cro">CRO</StyledButton>
        </GridItem>
        <GridItem xs={6} md={3}>
          <StyledButton href="#social">Social</StyledButton>
        </GridItem>
      </GridContainer>

      <BlogCategory title="SaaS" sectionID="saas" />
      <BlogPost
        title="What Exactly Does Customer Experience (CX) Mean? And How Can We Measure It?"
        excerpt="Movet diceret lucilius quo at, at his causae nonumes. No menandri
        postulant eam, ius id tale oratio mentitum. In mea doctus utroque
        luptatum."
        linkURL="https://www.abtasty.com/blog/what-is-cx-how-to-measure-it/"
        imageURL="/assets/images/blog1.jpg"
        logoURL="/assets/images/abtasty-logo-1.svg"
      />
      <BlogPost
        title="A sample blog post title"
        excerpt="Movet diceret lucilius quo at, at his causae nonumes. No menandri
        postulant eam, ius id tale oratio mentitum. In mea doctus utroque
        luptatum."
        imageURL="/assets/images/blog2.jpg"
        logoURL="/assets/images/abtasty-logo-1.svg"
      />

      <BlogCategory title="SEO" sectionID="seo" />
      <BlogPost
        title="A sample blog post title"
        excerpt="Movet diceret lucilius quo at, at his causae nonumes. No menandri
        postulant eam, ius id tale oratio mentitum. In mea doctus utroque
        luptatum."
        imageURL="/assets/images/blog2.jpg"
        logoURL="/assets/images/abtasty-logo-1.svg"
      />
      <BlogPost
        title="A sample blog post title"
        excerpt="Movet diceret lucilius quo at, at his causae nonumes. No menandri
        postulant eam, ius id tale oratio mentitum. In mea doctus utroque
        luptatum."
        imageURL="/assets/images/blog1.jpg"
        logoURL="/assets/images/abtasty-logo-1.svg"
      />
    </GridContainer>
    <Footer />
  </>
)

export default withStyles(componentsStyle)(Work)
