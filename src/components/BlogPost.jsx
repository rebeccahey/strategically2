import React from "react"
import GridItem from "components/Grid/GridItem.jsx"
import Box from "@material-ui/core/Box"
import Button from "components/CustomButtons/Button.jsx"
import { Link } from "gatsby"

const BlogPost = ({ title, excerpt, imageURL, imageAlt, logoURL, logoAlt, linkURL }) => (
  // <a href={linkURL} target="_blank" rel="noreferrer noopener">
    <GridItem xs={12} md={6} textAlign="left">
      <Box maxWidth="500px" mx="auto" textAlign="left" px={3}>
        <img
          src={imageURL}
          alt={imageAlt}
          css={{
            maxWidth: "100%",
            height: "auto",
            "@media (min-width: 300px) and (max-width: 800px)": {
              width: "100%!important",
            },
            "@media (min-width: 800px)": { width: "auto!important" },
          }}
        />
        <img
          src={logoURL}
          alt={logoAlt}
          css={{
            marginTop: "14px",
            height: "40px",
            width: "auto",
          }}
        />
        <Box
          component="h3"
          fontWeight="fontWeightBold"
          fontSize={24}
          my={2}
          color="#000"
          textAlign="left"
        >
          {title}
        </Box>
        <a href={linkURL}>
                      <Button
                        css={{
                          "@media (min-width: 300px) and (max-width: 800px)": {
                            fontSize: "1.7rem",
                          },
                        }}
                        color="primary"
                        size="lg"

                      >
                        Read Article
                      </Button> </a>
      </Box>
    </GridItem>
  // </a>
)

export default BlogPost
