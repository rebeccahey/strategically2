import React from "react"
import GridItem from "components/Grid/GridItem.jsx"
import Box from "@material-ui/core/Box"

const BlogPost = ({ title, excerpt, imageURL, imageAlt, logoURL, logoAlt, linkURL }) => (
  // <a href={linkURL} target="_blank" rel="noreferrer noopener">
    <GridItem xs={12} md={6} textAlign="left">
      <Box maxWidth="400px" mx="auto" textAlign="left" px={3}>
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
            marginTop: "24px",
            height: "20px",
            width: "auto",
            filter: "grayscale(100%)",
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
        <Box component="p" fontSize={18}>
          {excerpt}
        </Box>
      </Box>
        <a href={linkURL} target="_blank" rel="noreferrer noopener">Read the full article</a>
    </GridItem>
  // </a>
)

export default BlogPost
