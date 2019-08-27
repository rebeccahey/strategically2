import { conatinerFluid } from "assets/jss/material-kit-react.jsx";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const exampleStyle = {
  section: {
    // padding: "70px 70px"
    paddingTop: "70px",
    paddingBottom: "70px",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  container: {
    ...conatinerFluid,
    textAlign: "center !important"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
