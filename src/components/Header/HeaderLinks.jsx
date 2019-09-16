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
    <CustomDropdown
      noLiPadding
      buttonText="Development"
      buttonProps={{
        className: classes.navLink,
        color: "transparent"
      }}
      dropdownList={[
        <Link to="./web/node" className={classes.dropdownLink}>
          Node JS
        </Link>,
        <Link to="./web/react" className={classes.dropdownLink}>
          React JS
        </Link>,
        <Link to="./web/gatsby" className={classes.dropdownLink}>
          Gatsby JS
        </Link>
      ]}
    />
    </ListItem>
    <ListItem className={classes.listItem}>
    <CustomDropdown
      noLiPadding
      buttonText="SEO"
      buttonProps={{
        className: classes.navLink,
        color: "transparent"
      }}
      dropdownList={[
        <Link to="./seo/audit" className={classes.dropdownLink}>
          SEO Site Audit
        </Link>,
        <Link to="./seo/strategy" className={classes.dropdownLink}>
          SEO Content Strategy
        </Link>,
        <Link to="./seo/in-house" className={classes.dropdownLink}>
          In-House SEO Setup
        </Link>
      ]}
    />
    </ListItem>
    <ListItem className={classes.listItem}>
    <CustomDropdown
      noLiPadding
      buttonText="Content Strategy"
      buttonProps={{
        className: classes.navLink,
        color: "transparent"
      }}
      dropdownList={[
        <Link to="./strategy/content" className={classes.dropdownLink}>
          Content Strategy
        </Link>,
        <Link to="./strategy/content-marketing" className={classes.dropdownLink}>
          Content Marketing Strategy
        </Link>
      ]}
    />
    </ListItem>
    <ListItem className={classes.listItem}>
    <CustomDropdown
      noLiPadding
      buttonText="Competitive Analysis"
      buttonProps={{
        className: classes.navLink,
        color: "transparent"
      }}
      dropdownList={[
        <Link to="./intelligence/competition" className={classes.dropdownLink}>
          Competitive Landscape
        </Link>,
        <Link to="./intelligence/audience" className={classes.dropdownLink}>
          Audience Targeting
        </Link>,
      ]}
    />
  </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/contact">
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
