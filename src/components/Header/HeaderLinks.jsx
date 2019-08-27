/*eslint-disable*/
import React from "react";
import classNames from "classnames";

// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
    <ListItem className={classes.listItem}>
      <Button
        href="https://medium.com/strategically/step-1-understanding-business-goals-audiences-and-value-propositions-55feb4a1128c"
        color="transparent"
        target="_blank"
        className={classes.navLink}
      >
       Strategy Process
      </Button>
    </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="./ContactPage/ContactPage">
          <Button
            color="transparent"
            target=""
            css={{'@media (min-width: 300px) and (max-width: 800px)': {color: "#4b5665!important"}, '@media (min-width: 800px)': {color: "#fff!important"}}}
            className={classes.navLink}
          >
           Contact
          </Button>
        </Link>
        
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
