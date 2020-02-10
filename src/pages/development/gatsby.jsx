import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// react components for routing our app without refresh
import { Link } from "gatsby"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import OverviewSection from "./Sectionsgatsby/OverviewSection.jsx"
import SectionExamples from "./Sectionsgatsby/SectionExamples.jsx"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"

import { Helmet } from "react-helmet"

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Helmet>
          <title>Gatsby JS Development Agency | Strategically.co</title>
          <meta
            name="description"
            content="Based on React, Gatsby is a free and open source framework for building lightning fast websites and apps."
          />
        </Helmet>
        <Header
          brand="Strategically"
          rightLinks={<HeaderLinks />}
          fixed
          color="opaque"
          changeColorOnScroll={{
            height: 100,
            color: "primary",
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/Gatsby_JS_development.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <h1
                  css={{
                    "@media (min-width: 300px) and (max-width: 400px)": {
                      textAlign: "left",
                      paddingLeft: "25px",
                      paddingRight: "40px",
                      fontSize: "40px",
                    },
                    "@media (min-width: 400px) and (max-width: 800px)": {
                      textAlign: "left",
                      paddingLeft: "25px",
                      paddingRight: "40px",
                      fontSize: "60px",
                    },
                    "@media (min-width: 800px)": {
                      textAlign: "left",
                      paddingLeft: "200px",
                      paddingRight: "360px",
                      fontSize: "70px",
                    },
                  }}
                >
                  Gatsby JS Development Agency
                </h1>
                <h3
                  css={{
                    "@media (min-width: 300px) and (max-width: 800px)": {
                      textAlign: "left",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                    },
                    "@media (min-width: 800px)": {
                      textAlign: "left",
                      paddingLeft: "200px",
                      paddingRight: "300px",
                    },
                  }}
                >
                  Based on React, Gatsby is a free and open source framework for
                  building lightning fast websites and apps.
                </h3>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <OverviewSection />
          <SectionExamples />
        </div>
        <div className={classes.conatinerCta}>
          <GridContainer
            style={{
              paddingTop: "80px",
              paddingBottom: "80px",
              backgroundColor: "#222222",
            }}
          >
            >
            <GridItem>
              <h1
                css={{
                  "@media (min-width: 300px) and (max-width: 800px)": {
                    textAlign: "center",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    fontSize: "60px",
                  },
                  "@media (min-width: 800px)": {
                    textAlign: "center",
                    paddingLeft: "200px",
                    paddingRight: "200px",
                  },
                }}
              >
                Are you ready to 10X your growth?
              </h1>
              <h3
                css={{
                  "@media (min-width: 300px) and (max-width: 800px)": {
                    textAlign: "center",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  },
                  "@media (min-width: 800px)": {
                    textAlign: "center",
                    paddingLeft: "300px",
                    paddingRight: "300px",
                  },
                }}
              >
                We help you grow faster with strategy, software and data, a
                whole lot of data.
              </h3>
              <Link to="./contact">
                <Button color="primary" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
          <Footer />
        </div>
      </div>
    )
  }
}

export default withStyles(componentsStyle)(Components)
