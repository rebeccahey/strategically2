import React from "react"
import Box from "@material-ui/core/Box"
import GridItem from "components/Grid/GridItem.jsx"

const BlogCategory = ({ title, sectionID }) => (
  <GridItem xs={12} id={sectionID}>
    <Box
      component="h2"
      fontWeight="fontWeightBold"
      fontSize={32}
      textAlign="center"
    >
      {title}
    </Box>
  </GridItem>
)

export default BlogCategory
