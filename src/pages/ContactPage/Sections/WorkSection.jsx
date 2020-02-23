import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";


class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;


    return (
      <div className={classes.section}>
      <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: '30px', paddingRight: '30px'}}}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 style={{ textAlign: "center", marginTop: "0px"}}>Get in touch</h2>
            <h3 style={{ textAlign: "center", color: "#1E2122"}}>
            Send your questions below, message us on live chat or call us on 07882 090 659. We look forward to hearing from you.
            </h3>
            <form name="contact" action="/" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    name="name"
                    type="text"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    name="email"
                    type="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  name="message"
                  type="text"
                    formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridContainer justify="flex-start">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary" type="submit">Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
