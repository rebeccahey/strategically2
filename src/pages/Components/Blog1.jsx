import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionBasics from "./Sections/SectionBasics.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";
import SectionTabs from "./Sections/SectionTabs.jsx";
import OverviewSection from "./Sections/OverviewSection.jsx";
import Alternate1 from "./Sections/Alternate1.jsx";
import Alternate2 from "./Sections/Alternate2.jsx";
import Alternate3 from "./Sections/Alternate3.jsx";
import Alternate4 from "./Sections/Alternate4.jsx";
import SectionNotifications from "./Sections/SectionNotifications.jsx";
import SectionTypography from "./Sections/SectionTypography.jsx";
import SectionJavascript from "./Sections/SectionJavascript.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import SectionExamples from "./Sections/SectionExamples.jsx";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
import SectionLogin from "./Sections/SectionLogin.jsx";
import SectionDownload from "./Sections/SectionDownload.jsx";

import SEO_Strategy_Part1 from "assets/img/SEO_Strategy_Part1.jpg";
import SEO_Strategy_Part1_2 from "assets/img/SEO_Strategy_Part1_2.jpg";
import SEO_Strategy_Part1_3 from "assets/img/SEO_Strategy_Part1_3.jpg";
import SEO_Strategy_Part1_4 from "assets/img/SEO_Strategy_Part1_4.jpg";
import SEO_Strategy_Part1_5 from "assets/img/SEO_Strategy_Part1_5.jpg";
import SEO_Strategy_Part1_6 from "assets/img/SEO_Strategy_Part1_6.jpg";
import SEO_Strategy_Part1_7 from "assets/img/SEO_Strategy_Part1_7.jpg";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import Typing from 'react-typing-animation';

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Strategically"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 200,
            color: "primary"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/ServiceImage.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                  <h1 style={{ textAlign: "left"}}>Understanding business goals, audiences and value propositions</h1>
                  <h6 style={{ color: "#ffffff", textAlign: "left"}}>_________</h6>
                  <h5 style={{ color: "#ffffff", textAlign: "left"}}>SEO Strategy: Part One</h5>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
               <h4 div style={{ marginTop: "3rem"}}>The 7 steps to a killer SEO strategy</h4>
               <h6>An SEO strategy is a data-backed blueprint to generate pre-qualified leads to your website using organic traffic.</h6>
               <h6>An effective SEO strategy organises your website’s content and architecture by topic to support your business goals, meet your customer needs and inform Google of a users searching intent.</h6>
               <h6>The pillars of an SEO strategy are:</h6>
               <ul>
               <li><h6>Understanding your business goals, customer needs and value proposition</h6></li>
               <li><h6>Keyword research based on target audience</h6></li>
               <li><h6>Opportunity and gap analysis</h6></li>
               <li><h6>Diagnostics to review the performance of your website (if available) and prioritize SEO efforts</h6></li>
               <li><h6>Competitive analysis (external link analysis, promotion tactics, and website architecture)</h6></li>
               <li><h6>Website architecture and wireframes development that satisfy audience needs and promote site engagement</h6></li>
               <li><h6>Content strategy</h6></li>
               </ul>
               <h6>Throughout this 7 article series, we’re going to walk through the exact steps we take to prepare a strategy document for our clients — and provide you with the techniques required to build your own.</h6>

               <h6>Grab a coffee, open excel and let’s start building your blueprint for online success!</h6>

               <h4>Step One — Understanding Business Goals, Audiences and Value Propositions</h4>

               <h4>Why Audiences &amp; Goals for SEO?</h4>

               <h6>Optimization is more than just meta tags and links. Search is a marketing channel, and that channel caters to particular audiences with specific needs to be met while also fulfilling your website goals.</h6>

               <h6>Define your searcher audiences, business value propositions, how your business differentiates from the competition, and the goals you want to meet through your business and especially through your website.</h6>

               <h6>That information serves a basis for the rest of the work that will be done in content audits, strategies and/or workflows being done on your site.</h6>

               <h6>These three blocks are referenced throughout the site optimization process:</h6>
               <img
                 src={SEO_Strategy_Part1}
                 alt="..."
                 className={
                   classes.imgRounded +
                   " " +
                   classes.imgFluid
                 }
               />
               <h4>1 Understanding the business goals</h4>

               <h6>The first step when preparing an SEO strategy is to understand the goals of the business. To be successful, an SEO strategy must be tightly aligned with both the primary and secondary goals of the business.</h6>

               <h6>Throughout the optimization process it is important to know and understand these goals, and make sure that while we’re looking at ways to drive traffic to the site, the conversions for these goals should always be considered. Driving traffic without meeting your goals is not proper optimization.</h6>
               <ul>
               <li><h6>What are the primary/secondary goals of the website?</h6></li>
               <li><h6>How are these goal reported/quantified?</h6></li>
               <li> <h6>Is this currently reported in analytics or some other way?</h6></li>
               <li><h6>Rinse, repeat, until you have a set of goals similar to the example below:</h6></li>
               </ul>
               <h6 id="toc_25">Primary Business Goals and Conversion Metrics:</h6>
               <img
                 src={SEO_Strategy_Part1_2}
                 alt="..."
                 className={
                   classes.imgRounded +
                   " " +
                   classes.imgFluid
                 }
               />
               <h6 id="toc_26">Dig a little deeper and learn what the secondary goals of the business are. Here is how our example client may answer:</h6>
               <h6 id="toc_27">Secondary Business Goals and Conversion Metrics:</h6>
               <img
                 src={SEO_Strategy_Part1_3}
                 alt="..."
                 className={
                   classes.imgRounded +
                   " " +
                   classes.imgFluid
                 }
               />
               <h6>It is important to consider the business goals in order of priority (primary, secondary, etc) as this will be reflected in the website architecture section of the strategy.</h6>

               <h6>Goals of lower priority still have a place on the website. However, they won’t take up prime real estate on, for example, the header, home page or primary CTA’s, and they’ll be placed in less valuable places on the website.</h6>
               <h4>2 Value Proposition &amp; Differentiator</h4>
               <h6>It’s likely you have competition online.</h6>
               <ul>
                 <li><h6>What makes you unique?</h6></li>
                 <li><h6>What makes you valuable?*</h6></li>
               </ul>

               <h6 id="toc_37">These values and differentiators are key ingredients to finding and capitalizing on your niche in the search channel. They are also assets that should be conveyed in search results displays and in key areas on the site to help attract relevant audiences and coerce the conversion process.</h6>

               <h6 id="toc_38">Going back to the example client, let’s learn about their value proposition and differentiator.</h6>

               <h6 id="toc_39">Example Value Proposition</h6>

               <h6 id="toc_40">The school educates the physiotherapists at every stage of their career: from their first encounter with physiotherapy at the clinic to their Master’s and Doctoral degrees and their credits to maintain their license certification. The school is modern, efficient and organised.</h6>

               <h6 id="toc_41">Example Differentiation</h6>

               <h6 id="toc_42">- Provides quality education at each stage of the physiotherapist career.</h6>

               <h6>Based in a beautiful and thriving city that gives unique partnership and learning opportunities for students at local hospitals, clinics and educational facilities.</h6>

               <h6 id="toc_44">- In operation since 1964.</h6>

               <h6 id="toc_45">- In 1990 became the first school to receive national accreditation.</h6>

               <h6 id="toc_46">- Has participated in clinical trials of acupuncture effectiveness with a local Hospital and a Hospital Acute Rehabilitation Unit.</h6>

               <h6 id="toc_47">- Consistently high pass rates on state and national licensing boards.</h6>

               <h6 id="toc_48">- The doctoral program is one of the first in the nation and is one of just five seven programs nationwide to receive accreditation or pre-accreditation.</h6>

               <h6 id="toc_49">Your turn! Ask yourself, giving as much detail as possible:</h6>

               <h6 id="toc_50">*</h6>

               <h6 id="toc_51">- What is your value proposition?</h6>

               <h6 id="toc_52">- What is your differentiator?*</h6>

               <h4 id="toc_53">3 Your audiences &amp; their needs</h4>

               <h6 id="toc_54">Driving traffic might be a waste of time if it’s not qualified or relevant. Your core audiences and their specific needs are translated to specific search traffic opportunities.</h6>

               <h6 id="toc_55">Which audiences are most relevant, which have the highest priority, what type of opportunities exist to reach these audiences via the search channel, and how well are you doing that now?</h6>

               <h6 id="toc_56">Here’s how our example client could describe their 4 customer personas…</h6>

               <h6 id="toc_57">Audience or persona 1 profile: potential master’s students</h6>

               <h6 id="toc_58">Audience/persona description:</h6>

               <h6 id="toc_59">Potential Master’s students who are in the process of choosing a school or getting more information on how to become a physiotherapist. Usually, someone who has had a previous and personal experience with physiotherapy that is meaningful to them. Some are out of state and others are local to the London area.</h6>

               <h6 id="toc_60">- Average age: 32 yo.</h6>

               <h6 id="toc_61">- Average income: unknown.</h6>

               <h6 id="toc_62">- Male/Female breakdown: M: 22%; F: 78%</h6>

               <h6 id="toc_63">Audience/persona needs profile:</h6>
               <img
                 src={SEO_Strategy_Part1_4}
                 alt="..."
                 className={
                   classes.imgRounded +
                   " " +
                   classes.imgFluid
                 }
               />
               <h6 id="toc_64">Audience or persona 2 profile: practising acupuncturist considering doctoral</h6>

               <h6 id="toc_65">Audience/persona description:</h6>

               <h6 id="toc_66">Practising physiotherapist who is in the process of considering a Doctoral program. Most are local to the London area.</h6>

               <h6 id="toc_67">- Local and non-local prospective students.</h6>

               <h6 id="toc_68">- Average age: 37 yo.</h6>

               <h6 id="toc_69">- Average income: unknown.</h6>

               <h6 id="toc_70">- Male/ Female breakdown: M: 44%; F: 56%</h6>

               <h6 id="toc_71">- Audience/persona needs profile:</h6>
               <img
                 src={SEO_Strategy_Part1_5}
                 alt="..."
                 className={
                   classes.imgRounded +
                   " " +
                   classes.imgFluid
                 }
               />
               <h6 id="toc_72">Audience or persona 3 profile: CEU seeker</h6>

               <h6 id="toc_73">Audience/persona description:</h6>

               <h6 id="toc_74">A physiotherapist looking for state required a course to complete to maintain a license. These are working professionals, ease and price matter to them. Most are local to London area. They want easy parking, low cost, convenient class times along with relevant and interesting classes.</h6>

               <h6 id="toc_75">- Average age: unknown.</h6>

               <h6 id="toc_76">- Average income: unknown.</h6>

               <h6 id="toc_77">- Gender breakdown: Male unknown; Female: predominant.</h6>

               <h6 id="toc_78">- Audience/persona needs profile:</h6>
               <img
                 src={SEO_Strategy_Part1_6}
                 alt="..."
                 className={
                   classes.imgRounded +
                   " " +
                   classes.imgFluid
                 }
               />
               <h6 id="toc_79">Audience or persona 4 profile: patient</h6>

               <h6 id="toc_80">Audience/persona description:</h6>

               <h6 id="toc_81">Local resident looking for a physiotherapist clinic. Might be willing to drive/bus for lower rates.</h6>

               <h6 id="toc_82">- Average age: unknown.</h6>

               <h6 id="toc_83">- Average income: unknown.</h6>

               <h6 id="toc_84">- Gender breakdown:</h6>

               <h6 id="toc_85">- Male: unknown; Female: unknown.</h6>

               <h6 id="toc_86">Audience/persona needs profile:</h6>
               <img
                 src={SEO_Strategy_Part1_7}
                 alt="..."
                 className={
                   classes.imgRounded +
                   " " +
                   classes.imgFluid
                 }
               />
               <h4 id="toc_87">Next Article: How to do in-depth keyword research.</h4>

               <h6 id="toc_88">Now we have a clear understanding of the business goals, customer needs and value proposition, we can use this to inform the research in the subsequent steps in the strategy.</h6>

               <h6 id="toc_89">In the next article, we’ll take a look at the best practices for doing keyword research. We’ll discuss how to categorize your keyword research and how to use it to inform the rest of your digital strategy.</h6>

               <h6 id="toc_90">Thanks for reading!</h6>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <SectionExamples />
    </div>
        <div className={classes.conatinerCta}>
          <GridContainer style={{ paddingTop: "80px", paddingBottom: "80px", backgroundColor: "#2A2C2D"}}>>
            <GridItem>
                <h1 style={{ textAlign: "center", paddingLeft: "200px", paddingRight: "200px"}}>Ready to speak with a B2B growth specialist?</h1>
                <h3 style={{ paddingLeft: "300px", paddingRight: "300px"}}>
                  We deliver meaningful and lasting results for clients by improving the experiences of their users. Learn more about our unique approach to services.
                </h3>
                <Button color="primary" size="lg">
                  Learn More
                </Button>
            </GridItem>
          </GridContainer>
        <Footer/>
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
