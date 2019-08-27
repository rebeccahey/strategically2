/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

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
              <a
                href="https://strategically.co/"
                css={{color: '#1e2122', display: 'block', position: 'relative', fontWeight: '700', textDecoration: 'none', '@media (min-width: 300px) and (max-width: 800px)': {fontSize: '14px'}, '@media (min-width: 800px)': {fontSize:'18px'}}}
                target="_blank"
              >
                Home
              </a>
            </li>
            <li css={{display: 'inline-block', width: 'auto', '@media (min-width: 300px) and (max-width: 800px)': {paddingLeft:'10px'}, '@media (min-width: 800px)': {paddingLeft:'20px'}}}>
              <a
                href="https://medium.com/strategically/step-1-understanding-business-goals-audiences-and-value-propositions-55feb4a1128c"
                css={{color: '#1e2122', display: 'block', position: 'relative', fontWeight: '700', textDecoration: 'none', '@media (min-width: 300px) and (max-width: 800px)': {fontSize: '14px'}, '@media (min-width: 800px)': {fontSize:'18px'}}}
                target="_blank"
              >
                Strategy Process
              </a>
            </li>
            <li css={{display: 'inline-block', width: 'auto', '@media (min-width: 300px) and (max-width: 800px)': {paddingLeft:'10px'}, '@media (min-width: 800px)': {paddingLeft:'20px'}}}>
              <a
                href="https://strategically.co/contact"
                css={{color: '#1e2122', display: 'block', position: 'relative', fontWeight: '700', textDecoration: 'none', '@media (min-width: 300px) and (max-width: 800px)': {fontSize: '14px'}, '@media (min-width: 800px)': {fontSize:'18px'}}}
                target="_blank"
              >
                Contact
              </a>
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
