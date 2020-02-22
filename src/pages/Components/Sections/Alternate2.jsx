import React from "react"
// react components for routing our app without refresh
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Link } from "gatsby"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import exampleStyle from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx"

// import alternate2 from "assets/img/alternate2.jpg";
const query = graphql`
  query {
    file(name: { eq: "alternate2" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
class Alternate2 extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div
        css={{
          "@media (min-width: 300px) and (max-width: 800px)": {
            padding: "0px!important",
          },
          backgroundColor: "#fff",
        }}
        className={classes.section}
      >
        <div className={classes.container}>
          <GridContainer justify="center" style={{ display: "block" }}>
            <div
              css={{
                "@media (min-width: 300px) and (max-width: 800px)": {
                  backgroundColor: "#fff",
                  display: "flex",
                  flexFlow: "column",
                },
                "@media (min-width: 800px)": {
                  backgroundColor: "#fff",
                  display: "flex",
                  flexFlow: "row",
                },
              }}
            >
              <GridItem
                xs={12}
                sm={12}
                md={6}
                css={{
                  "@media (min-width: 300px) and (max-width: 800px)": {
                    order: "2",
                  },
                }}
              >
                {/* <img
                src={alternate2}
                alt="software development agency"
                css={{'@media (min-width: 300px) and (max-width: 800px)': {width: "130vw"}}}
              /> */}
                <StaticQuery
                  query={query}
                  render={data => (
                    <Img
                      fluid={data.file.childImageSharp.fluid}
                      alt="software development agency"
                      css={{
                        "@media (min-width: 300px) and (max-width: 800px)": {
                          order: "2",
                        },
                      }}
                    />
                  )}
                />
              </GridItem>
              <GridItem
                xs={12}
                sm={12}
                md={6}
                css={{
                  "@media (min-width: 300px) and (max-width: 800px)": {
                    order: "1",
                  },
                  backgroundColor: "#fff",
                }}
              >
                <div
                  css={{
                    "@media (min-width: 300px) and (max-width: 800px)": {
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      paddingBottom: "0px",
                      paddingTop: "0px",
                    },
                    "@media (min-width: 800px)": {
                      paddingRight: "70px",
                      paddingTop: "0px",
                    },
                  }}
                >
                  <h2
                    css={{
                      "@media (min-width: 300px) and (max-width: 800px)": {
                        textAlign: "center",
                        fontSize: "2.3rem",
                        marginTop: "-50px",
                      },
                    }}
                  >
                    We help tech brands simplify complex topics
                  </h2>
                  <h6
                    css={{
                      "@media (min-width: 300px) and (max-width: 800px)": {
                        textAlign: "center",
                      },
                      "@media (min-width: 800px)": { textAlign: "left" },
                    }}
                  >
                    _______________
                  </h6>
                  <p
                        css={{
                          "@media (min-width: 300px) and (max-width: 800px)": {
                            textAlign: "center",
                          },
                        }}
                      >
                        <img style={{ width: `35%`,}}
                   src="/assets/images/gmelius.svg" alt=""></img>
                      </p>
                  <h5
                    css={{
                      "@media (min-width: 300px) and (max-width: 800px)": {
                        textAlign: "center",
                      },
                    }}
                  >
                    “It’s been great working with Strategically. They quickly got an understanding of our industry: our solution, users, and goals. And produced great content, always on time."
                  </h5>
                  <div
                    css={{
                      "@media (min-width: 300px) and (max-width: 800px)": {
                        textAlign: "center",
                      },
                      "@media (min-width: 800px)": { textAlign: "left" },
                    }}
                  >
                    <Link to="./work#SaaS">
                      <Button
                        css={{
                          "@media (min-width: 300px) and (max-width: 800px)": {
                            fontSize: "1.7rem",
                          },
                        }}
                        color="primary"
                        size="lg"
                      >
                        View Our Work
                      </Button>
                    </Link>
                  </div>
                </div>
              </GridItem>
            </div>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(exampleStyle)(Alternate2)
