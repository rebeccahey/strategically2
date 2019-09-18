import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
// react components for routing our app without refresh
import { Link } from "gatsby"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import exampleStyle from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx"

// import blog1 from "assets/img/blog1.jpg"
// import blog2 from "assets/img/blog2.jpg"

const query = graphql`
  query {
    allFile(filter: { name: { in: ["blog1", "blog2"] } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
const posts = [
  {
    title: "The 7 steps to a killer SEO strategy",
    excerpt:
      "An SEO strategy is a data-backed blueprint to generate pre-qualified leads to your website using organic traffic.",
    alt: "SEO keyword research",
    linkURL: "/blog/seo-strategy",
  },
  {
    title: "Analysing the competitive landscape",
    excerpt:
      "ALearn where your business stands in a competitive landscape, giving you the power to market your strength.",
    alt: "Competitive analysis for SEO",
    linkURL: "/blog/seo-strategy/#analysing-the-competitive-landscape",
  },
]

const BlogPost = ({ classes, linkURL, title, excerpt, image, alt }) => (
  <GridItem xs={12} sm={12} md={6}>
    <Link to={linkURL}>
      {/* <img
        src={blog1}
        alt="SEO keyword research"
        className={classes.imgBloÎg}
        css={{
          "@media (min-width: 300px) and (max-width: 800px)": {
            width: "100%!important",
          },
          "@media (min-width: 800px)": { width: "auto!important" },
        }}
      /> */}
      <Img
        fluid={image.childImageSharp.fluid}
        alt={alt}
        className={classes.imgBloÎg}
        css={{
          "@media (min-width: 300px) and (max-width: 800px)": {
            width: "100%!important",
          },
          "@media (min-width: 800px)": { width: "auto!important" },
        }}
      />
    </Link>
    <div style={{ textAlign: "center" }}>
      <h4
        css={{
          "@media (min-width: 300px) and (max-width: 800px)": {
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "15px",
            textAlign: "center",
          },
          "@media (min-width: 800px)": {
            paddingLeft: "70px",
            paddingRight: "70px",
            paddingTop: "15px",
            textAlign: "center",
          },
        }}
      >
        {title}
      </h4>
      <h5
        css={{
          "@media (min-width: 300px) and (max-width: 800px)": {
            paddingLeft: "30px",
            paddingRight: "30px",
            textAlign: "center",
          },
          "@media (min-width: 800px)": {
            paddingLeft: "100px",
            paddingRight: "100px",
            textAlign: "center",
          },
        }}
      >
        {excerpt}
      </h5>
      <Link to={linkURL}>
        <Button color="primary" size="lg">
          Read More
        </Button>
      </Link>
    </div>
  </GridItem>
)

class SectionExamples extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <StaticQuery
              query={query}
              render={data =>
                data.allFile.edges.map((edge, i) => (
                  <BlogPost
                    classes={classes}
                    linkURL={posts[i].linkURL}
                    title={posts[i].title}
                    excerpt={posts[i].excerpt}
                    image={edge.node}
                    alt={posts[i].alt}
                  />
                ))
              }
            />
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(exampleStyle)(SectionExamples)
