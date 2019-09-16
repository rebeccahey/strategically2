/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div css={{'@media (min-width: 300px) and (max-width: 800px)': {marginLeft: "auto", marginRight: "auto"}, '@media (min-width: 800px)': {marginLeft: "auto", marginRight: "auto"}, maxWidth: '100vw', paddingLeft: '0px', paddingRight: '0px'}}>
        <div css={{display: 'block'}}>
          <List className={classes.list} style={{textAlign: 'center'}}>
            <li css={{display: 'inline-block', width: 'auto', '@media (min-width: 300px) and (max-width: 800px)': {paddingLeft:'10px'}, '@media (min-width: 800px)': {paddingLeft:'20px'}}}>
              <Link to="./"
                css={{display: 'block', position: 'relative', fontWeight: '300', textDecoration: 'none', '@media (min-width: 300px) and (max-width: 800px)': {fontSize: '14px'}, '@media (min-width: 800px)': {fontSize:'18px'}}}
                target="_blank"
              >
                Home
              </Link>
            </li>
            <li css={{display: 'inline-block', width: 'auto', '@media (min-width: 300px) and (max-width: 800px)': {paddingLeft:'10px'}, '@media (min-width: 800px)': {paddingLeft:'20px'}}}>
            <Link to="./blog/seo-strategy"
              css={{display: 'block', position: 'relative', fontWeight: '300', textDecoration: 'none', '@media (min-width: 300px) and (max-width: 800px)': {fontSize: '14px'}, '@media (min-width: 800px)': {fontSize:'18px'}}}
              target="_blank"
            >
              Our Strategy Process
            </Link>
            </li>
            <li css={{display: 'inline-block', width: 'auto', '@media (min-width: 300px) and (max-width: 800px)': {paddingLeft:'10px'}, '@media (min-width: 800px)': {paddingLeft:'20px'}}}>
              <Link to="./contact"
                css={{display: 'block', position: 'relative', fontWeight: '300', textDecoration: 'none', '@media (min-width: 300px) and (max-width: 800px)': {fontSize: '14px'}, '@media (min-width: 800px)': {fontSize:'18px'}}}
                target="_blank"
              >
                Contact
              </Link>
            </li>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
