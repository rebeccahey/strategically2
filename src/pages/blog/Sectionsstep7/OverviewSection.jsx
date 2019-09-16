import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import exampleStyle from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx";

import landing from "assets/img/landing.jpg";
import profile from "assets/img/profile.jpg";
import SEO_strategy_cost_benefit from "assets/img/SEO_strategy_cost_benefit.jpg";


class OverviewSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
        <div css={{'@media (min-width: 300px) and (max-width: 800px)': {paddingLeft: '30px', paddingRight: '30px'}, position: 'relative', backgroundColor: '#fff', paddingTop: '30px'}}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
             <div style={{textAlign: "left"}}>
             <h2>The 7 Steps To A Killer SEO Strategy</h2>
             <p>An SEO strategy is a data-backed blueprint to generate pre-qualified leads to your website using organic traffic.</p>
             <p>An effective SEO strategy organises your website’s content and architecture by topic to support your business goals, meet your customer needs and inform Google of a users searching intent.</p>
             <p>Throughout this 7 step article, we’re going to walk through the exact steps we take to prepare a strategy document for our clients — and provide you with the techniques required to build your own.</p>
             <h4>Table of contents:</h4>
             <p>
             <ul>
             <li>Step 1:  <a href="#understanding-business-goals-audiences-and-value-propositions">Understanding your business goals, customer needs and value proposition</a></li>
             <li>Step 2:  <a href="#keyword-research">Keyword research</a></li>
             <li>Step 3:  <a href="#opportunity--gap-analysis">Opportunity and gap analysis</a></li>
             <li>Step 4:  <a href="#who-are-your-competitors">Defining your competitors</a></li>
             <li>Step 5:  <a href="#analysing-the-competitive-landscape">Analysing your competitors</a></li>
             <li>Step 6:  <a href="#seo-strategy--recommendations">Findings and recommendations</a></li>
             <li>Step 7:  <a href="#Prioritisation-and-cost-benefit-analysis">Priorities and cost benefit analysis</a></li>
             <p id="understanding-business-goals-audiences-and-value-propositions">Grab a coffee, open excel and let’s start building your blueprint for online success!</p>
             </ul></p>
             <h2>Step One: Business Goals, Audiences and Value Propositions</h2>
             <p>Optimization is more than just meta tags and links. Search is a marketing channel, and that channel caters to particular audiences with specific needs to be met while also fulfilling your website goals.</p>
             <p>Define your searcher audiences, business value propositions, how your business differentiates from the competition, and the goals you want to meet through your business and especially through your website.</p>
             <p>That information serves a basis for the rest of the work that will be done in content audits, strategies and/or workflows being done on your site.</p>
             <p>These three blocks are referenced throughout the site optimization process:</p>
             <p><img style={{ width: `100%`,}}
             src="https://miro.medium.com/max/672/0*Sp4U4f7rwti-5O22.png" alt=""></img></p>
             <h4 id="understanding-the-business-goals">#1 Understanding the business goals</h4>
             <p>The first step when preparing an SEO strategy is to understand the goals of the business. To be successful, an SEO strategy must be tightly aligned with both the primary and secondary goals of the business.</p>
             <p>Throughout the optimization process it is important to know and understand these goals, and make sure that while we’re looking at ways to drive traffic to the site, the conversions for these goals should always be considered. Driving traffic without meeting your goals is not proper optimization.</p>
             <p>
             <ul>
             <li><em>What are the primary/secondary goals of the website?</em></li>
             <li><em>How are these goal reported/quantified?</em></li>
             <li><em>Is this currently reported in analytics or some other way?</em></li>
             </ul>
             </p>
             <p>Rinse, repeat, until you have a set of goals similar to the example below:</p>
             <p>Primary Business Goals and Conversion Metrics:</p>
             <p><img style={{ width: `100%`,}}
	             src="https://miro.medium.com/max/641/0*6Ufq0gzhcLWOoL3k.png" alt=""></img></p> <p>Dig a little deeper and learn what the secondary goals of the business are. Here is how our example client may answer:</p>
             <p>Secondary Business Goals and Conversion Metrics:</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/644/0*PAVGUSD5MZOvfEc2.png" alt=""></img></p><p>It is important to consider the business goals in order of priority (primary, secondary, etc) as this will be reflected in the website architecture section of the strategy.</p>
             <p>Goals of lower priority still have a place on the website. However, they won’t take up prime real estate on, for example, the header, home page or primary CTA’s, and they’ll be placed in less valuable places on the website.</p>
             <p><em>How would you fill out these tables?</em></p>
             <p>Primary goals and conversion metrics</p>
             <p><img style={{ width: `100%`,}}
	             src="https://miro.medium.com/max/640/0*LQW0VO4Yr3kc_SVh.png" alt=""></img></p><p>Secondary goals and conversion metrics</p>
               <p><img style={{ width: `100%`,}}
  	            src="https://miro.medium.com/max/640/0*w0slgMmU5soOOc1I.png" alt=""></img></p><h4 id="value-proposition--differentiator">#2 Value Proposition &amp; Differentiator</h4>
             <p>It’s likely you have competition online.</p>
             <p>
             <ul>
             <li><em>What makes you unique?</em></li>
             <li><em>What makes you valuable?</em></li>
             </ul>
             </p>
             <p>These values and differentiators are key ingredients to finding and capitalizing on your niche in the search channel. They are also assets that should be conveyed in search results displays and in key areas on the site to help attract relevant audiences and coerce the conversion process.</p>
             <p>Going back to the example client, let’s learn about their value proposition and differentiator.</p>
             <p>Example Value Proposition</p>
             <p>The school educates the physiotherapists at every stage of their career: from their first encounter with physiotherapy at the clinic to their Master’s and Doctoral degrees and their credits to maintain their license certification. The school is modern, efficient and organised.</p>
             <p>Example Differentiation</p>
             <p>
             <ul>
             <li>Provides quality education at each stage of the physiotherapist career.</li>
             <li>Based in a beautiful and thriving city that gives unique partnership and learning opportunities for students at local hospitals, clinics and educational facilities.</li>
             <li>In operation since 1964.</li>
             <li>In 1990 became the first school to receive national accreditation.</li>
             <li>Has participated in clinical trials of acupuncture effectiveness with a local Hospital and a Hospital Acute Rehabilitation Unit.</li>
             <li>Consistently high pass rates on state and national licensing boards.</li>
             <li>The doctoral program is one of the first in the nation and is one of just five seven programs nationwide to receive accreditation or pre-accreditation.</li>
             </ul>
             </p>
             <p>Your turn! Ask yourself, giving as much detail as possible:</p>
             <p>
             <ul>
             <li><em>What is your value proposition?</em></li>
             <li><em>What is your differentiator?</em></li>
             </ul>
             </p>
             <h4 id="your-audiences--their-needs">#3 Your audiences &amp; their needs</h4>
             <p>Driving traffic might be a waste of time if it’s not qualified or relevant. Your core audiences and their specific needs are translated to specific search traffic opportunities.</p>
             <p>Which audiences are most relevant, which have the highest priority, what type of opportunities exist to reach these audiences via the search channel, and how well are you doing that now?</p>
             <p>Here’s how our example client could describe their 4 customer personas…</p>
             <p>Audience or persona 1 profile: potential master’s students</p>
             <p>Audience/persona description:</p>
             <p>Potential Master’s students who are in the process of choosing a school or getting more information on how to become a physiotherapist.</p>
             <p>Usually, someone who has had a previous and personal experience with physiotherapy that is meaningful to them. Some are out of state and others are local to the London area.</p>
             <p>
             <ul>
             <li>Average age: 32 yo.</li>
             <li>Average income: unknown.</li>
             <li>Male/Female breakdown: M: 22%; F: 78%</li>
             </ul>
             </p>
             <p>Audience/persona needs profile:</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/638/0*Pbx-6dk2Kvm8P_HQ.png" alt=""></img></p> <p>Audience or persona 2 profile: practising acupuncturist considering doctoral</p>
             <p>Audience/persona description:</p>
             <p>Practising physiotherapist who is in the process of considering a Doctoral program. Most are local to the London area.</p>
             <p>
             <ul>
             <li>Local and non-local prospective students.</li>
             <li>Average age: 37 yo.</li>
             <li>Average income: unknown.</li>
             <li>Male/ Female breakdown: M: 44%; F: 56%</li>
             </ul>
             </p>
             <p>Audience/persona needs profile:</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/644/0*miwNIOFoM-N_EilS.png" alt=""></img></p><p>Audience or persona 3 profile: CEU seeker</p>
             <p>Audience/persona description:</p>
             <p>A physiotherapist looking for state required a course to complete to maintain a license. These are working professionals, ease and price matter to them. Most are local to London area. They want easy parking, low cost, convenient class times along with relevant and interesting classes.</p>
             <p>
             <ul>
             <li>Average age: unknown.</li>
             <li>Average income: unknown.</li>
             <li>Gender breakdown: Male unknown; Female: predominant.</li>
             </ul>
             </p>
             <p>Audience/persona needs profile:</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/639/0*eremWXXHi8c8GEwb.png" alt=""></img></p><p>Audience or persona 4 profile: patient</p>
             <p>Audience/persona description:</p>
             <p>Local resident looking for a physiotherapist clinic. Might be willing to drive/bus for lower rates.</p>
             <p>
             <ul>
             <li>Average age: unknown.</li>
             <li>Average income: unknown.</li>
             <li>Gender breakdown:</li>
             <li>Male: unknown; Female: unknown.</li>
             </ul>
             </p>
             <p>Audience/persona needs profile:</p>
             <p><img style={{ width: `100%`,}}
 	           src="https://miro.medium.com/max/635/0*85nQ2Mjq1H568NES.png" alt=""></img></p>
             <p id="keyword-research"> Armed with your business goals and customer personas, let's move on to conducting in-depth keyword research.</p>
             <h2>Step Two: How to Do In-Depth Keyword Research</h2>
             <p>Now we have a clear understanding of the business goals, customer needs and value proposition, we can use this to inform the research in the subsequent steps in the strategy.</p>
             <p>In this step, we’ll take a look at the best practices for doing keyword research. We’ll discuss how to categorize your keyword research and how to use it to inform the rest of your digital strategy.</p>
             <h4 id="step-2-—-keyword-research-based-on-the-target-audience">Keyword research based on the target audience</h4>
             <p>The  <a href="#understanding-business-goals-audiences-and-value-propositions"> last step covered business goals, customer needs and value proposition</a>. This has given us a clear idea of what the business wants to achieve and who their customers are.</p>
             <p>We can use that information to begin our research into the relevant search available.</p>
             <p>The purpose of keyword research is to determine and discover the topics relevant to what you can provide, determine the best keywords to target and incorporate, and eventually to prioritize content and topics based on relevance and search volume.</p>
             <p>Keyword research is a fundamental section of the strategy. Whilst not overly complicated, it forms the basis for much of the later sections of the strategy document. It’s really important to take your time to do methodical, in-depth research, instead of rushing through it. Trust me, you’ll thank me later.</p>
             <p>Open up excel, we’re diving in!</p>
             <h4 id="create-your-seed-list">#1 Create your seed list</h4>
             <p>Begin your keyword research with a seed list. This is a list of keywords or categories you immediately see are related to your business.</p>
             <p>If your business is already online, you can quickly and easily find a seed list of keywords by reviewing your existing products and product categories.</p>
             <p>Or if you’re a new business, start by reviewing similar companies to yours online or just brainstorming ideas.</p>
             <p>For this step, we’re going to use a fictitious business which sells organic cotton luxury bedding as our example client.</p>
             <p>A quick glance at a couple of competitors websites shows me the following categories in the main menu:</p>
             <p>
             <ul>
             <li>Sheet sets</li>
             <li>Duvet covers</li>
             <li>Sheets</li>
             <li>Pillow cases</li>
             <li>Blankets</li>
             <li>Quilts</li>
             <li>Baby</li>
             <li>Pillows</li>
            </ul>
            </p>
            <h4 id="expand-keyword-research">#2 Expand keyword research</h4>
             <p>The beauty of keyword research is you can go as detailed as you like, there is no right or wrong way. You can expand your seed list by considering your customer personas, combination keywords or competitor keywords.</p>
             <p><em>Customer personas</em></p>
             <p>Use your customer personas (<a href="#understanding-business-goals-audiences-and-value-propositions">prepared in step one</a>) to expand your keyword research. The benefit of this technique is you keep your keyword research laser focused on your customer needs.</p>
             <p>A customer persona for our luxury bedding store could be:</p>
             <p>Cathy, a new mum looking for bedding for her soon to be born baby. It is her first child and she wants the best quality she can afford. She has read about chemicals in materials and wants organic, regardless of price.</p>
             <p>Keyword ideas or categories for Cathy:</p>
             <p>
             <ul>
             <li>Organic</li>
             <li>Crib</li>
             <li>Baby</li>
             <li>Luxury</li>
             <li>Chemical free</li>
             <li>Safe bedding for babies</li>
             </ul>
             </p>
             <p><em>Combine keywords</em></p>
             <p>Brainstorm other categories of keywords which could be relevant to this store, for example:</p>
             <p>
             <ul>
             <li>Bed sheet sizes: king, super king, california king, single, twin</li>
             <li>Hand feel: soft, silky, cool, warm</li>
             <li>Fit: Flat, fitted</li>
             <li>Origin: Made in the US, Egyptian</li>
             <li>Quality: luxury, high end, hotel quality, best</li>
             <li>Buy terms: For sale, clearance, buy now</li>
             <li>Children: baby, toddler, girl, boy</li>
             <li>Gender: men, women</li>
             <li>Thread count: 400, 500, 750</li>
             <li>Material: Cotton, silk, percale, sateen</li>
             <li>Colours: Black, grey, white</li>
             </ul>
             </p>
             <p>Then consider the relevant combinations of keywords. For example:</p>
             <p>
             <ul>
             <li>Size + Sheet type: King size sheet set</li>
             <li>Origin + product: Sheets sets made in the USA</li>
             </ul>
             </p>
             <p><em>Competitor keywords</em></p>
             <p>A great way to find relevant keywords is to spy on the competition. Use Google’s Keyword Planner to generate keyword suggestions from a URL.</p>
             <p>Select “Search for new keywords using a phrase, website or category” and enter one of your competitors’ keywords.</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/582/0*AFGOJ7KAUnMrTv8o.png" alt=""></img></p><p>In this example, I’ve used <a href="http://brooklinen.com">brooklinen.com</a>. A quick search found almost 2500 keyword suggestions.</p>
             <p>If you see a lot of terms which include the business name, remove them from the list by add the brand name as a negative keyword.</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/642/0*c2v2PdeGSU20CI4g.png" alt=""></img></p><p>Rinse and repeat for multiple competitors for a never‐ending stream of fresh keyword ideas.</p>
             <p>Always consider your business goals</p>
             <p>It is always important to consider the business goals and customer needs when you are preparing your keyword research.</p>
             <p>If your value prop is high end, luxury sheets, don’t waste time researching keywords related to cheap, bargain and so on. If your customer personas are children only, don’t waste time researching for adults.</p>
             <p>Keyword research takes time to do well, so make sure before you get going that every seed keyword or category is valuable to the business.</p>
             <h4 id="prepare-your-spreadsheet">#3 Prepare your spreadsheet</h4>
             <p>Next open up a fresh document in Google Sheets or Excel. Create a tab for each of the categories above.</p>
             <p>Add an extra tab called Content Ideas. And one called Seed List.</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/664/0*r_6RENeX7t8kgspA.png" alt=""></img></p><h4 id="conduct-keyword-research">#4 Conduct keyword research</h4>
             <p>There are lots of tools out there to conduct keyword research. Some paid, some free. We tend to use a combination of  <a href="https://keywordtool.io/">KeywordTool.io</a>  and  <a href="https://ads.google.com/intl/en_uk/home/tools/keyword-planner/">Google Keyword Planner</a>.</p>
             <p>Go to <a href="http://KeywordTool.io">KeywordTool.io</a>.</p>
             <p><a href="http://KeywordTool.io">KeywordTool.io</a> uses Google’s Autocomplete engine to provide a list of possible variations for searched keywords. This makes it an excellent resource for finding long tail keywords.</p>
             <p>Enter a seed keyword into <a href="http://KeywordTool.io">KeywordTool.io</a>’s search. For this example, I’ve searched “sheet sets”.</p>
             <p>Make sure to set the location to the area you are targeting, as there can be differences by location for the search terms people use.</p>
             <p><img style={{ width: `100%`,}}
 	           src="https://miro.medium.com/max/652/0*bds1tN_p9uZlrhHp.png" alt=""></img></p><p><a href="http://KeywordTool.io">KeywordTool.io</a> has found 361 unique keyword variations.</p>
             <p>Select “Copy to Clipboard” and head over to Google Keyword Planner.</p>
             <p>Login to your Google Ads account and head over to Google’s Keyword planner.</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/677/0*GI_47JvT7jgpIq_I.png" alt=""></img></p><p>Select “Get search volume data and trends”. Copy and paste the terms from <a href="http://KeywordTool.io">KeywordTool.io</a> in to Google Ads.</p>
              <p><img style={{ width: `100%`,}}
 	            src="https://miro.medium.com/max/512/0*plX7gX3jlaG4LTvi.png" alt=""></img></p><p>Paste the keywords copied from <a href="http://KeywordTool.io">KeywordTool.io</a> and select “Get Search Volume”.</p>
             <p>Select “Download” and select “Segment Statistics by Month”</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/612/0*n5fe86VppnxTYW_f.png" alt=""></img></p><p>Once this document is downloaded, you can now copy and paste the data into your spreadsheet in the “sheet set” tab.</p>
             <p>Continue this process for all the tabs in your keyword research are complete.</p>
             <h4 id="refine-your-list-of-keywords">#5 Refine your list of keywords</h4>
             <p>You now have a large spreadsheet chockablock with juicy keywords. Unfortunately, there will be some by-catch of words which are not valuable to your business, too competitive or have little to no search volume.</p>
             <p>This stage of the keyword research is to remove unnecessary keywords from your spreadsheet.</p>
             <p><em>Negative keywords</em></p>
             <p>Scan through each tab and find the keywords which do not meet the business goals or customer needs. In the example of our luxury bedding ecommerce store, delete all terms related to cheap, bargain, clearance, as they do not meet the business goals.</p>
             <p><em>Competitive</em></p>
             <p>Order the tab from high to low in the column labelled “Competition”. One equals the most competitive, and zero is the least competitive.</p>
             <p>Consider any terms higher up the scale and decide whether it makes sense for your business to try to compete. If not, delete them.</p>
             <p><em>Low search volume</em></p>
             <p>Whilst we are big believers in soaking up the search from certain low volume keywords, it is definitely a fine balancing act between resources and the potential benefit.</p>
             <p>For example, 10 people per month searching for high intent buy term “buy sheets online now”, is much more valuable than 10 people per month searching for “how to clean sheet sets”.</p>
             <p>This comes down to a judgement call.</p>
             <h4 id="final-word…">Final word on keyword research</h4>
             <p>There is no right way to conduct keyword research. You can go as deep or as high level as you want. You can add as many categories as you need and you can always remove them in the research shows they are not relevant or not searched for enough.</p>
             <p>Certainly the deeper you dig, the more insight you will get. It also reduces the need to revisit this section of the strategy in the future.</p>
             <p id="opportunity--gap-analysis">The main takeaway from the keyword research is to understand the available demand for topics/categories your business cares about. This will then be used to inform the strategy, your website architecture and your content plan.</p>
             <h2>Step Three: Opportunity &amp; Gap Analysis</h2>
             <p>In  <a href="#keyword-research">step two</a>  we discussed how to conduct in-depth keyword to uncover the demand for topics your business is interested in. The next step in our SEO strategy is to discover the gaps and opportunities in your existing online presence.</p>
             <p>If you don’t have an existing website or your business is just starting, you have my permission to skip this step!</p>
             <p>However, for existing businesses a gap and opportunity analysis is an excellent way to use Google search volume data and your existing traffic data to get a clear picture of the strengths and weaknesses of your websites performance.</p>
             <p>Like the keyword research in step two, this is a fairly hefty chunk of work to undertake. But once complete, you’ll have some actionable recommendations to improve the performance of your website. Trust me, you’ll thank us later.</p>
             <h4 id="what-are-gaps-and-opportunities">What are gaps and opportunities?</h4>
             <h4 id="gaps">Gaps</h4>
             <p>Gaps are areas where there is demand for your product or service but you have a relatively low share of the visits to your site from organic search.</p>
             <p>For example, if keyword [whale watching tour] has a monthly search volume of 10,000 however your website only gets 10 referrals per month from the search term, that would equate to a very poor click through rate of 0.1% and would signal a significant gap on your websites performance.</p>
             <h4 id="opportunities">Opportunities</h4>
             <p>Opportunities are similar to gaps however instead of looking for keywords which have low click through rate, we will be looking for keywords which currently generate no referral traffic to your site.</p>
             <p>By determining what search terms your website does not currently attract, you can find opportunities to build out content and website architecture to meet the demand and soak up extra search.</p>
             <h4 id="guide-to-opportunity-and-gap-analysis">Guide to opportunity and gap analysis</h4>
             <p>This part of the Strategically is designed to be a step by step guide to conducting your opportunity and gap analysis. At the end of this step you not only will have masses of data on how your site is performing, you can then analyse the data to find actionable recommendations to improve your performance.</p>
             <p>Lastly, it’s important to always conduct your research whilst circling back to the business goals and customer needs. The core purpose of this strategy is to build out your website to meet your business goals, satisfy your customers, and please the google bots. All the opportunities, gaps, and recommendations which are extrapolated from this step are worth nothing unless they meet these goals.</p>
             <p><em>Sounds good, right? That’s enough small talk, let’s get started!</em></p>
             <p>Depending how deep you went in step two, you may have a significant number of tabs, each with extensive keywords. If this is the case, you need to decide if you are going to conduct the opportunity analysis for every keyword or just a sample from each tab.</p>
             <p>Unless you have no time restraints, I would highly recommend the latter, as long as you consider the following caveats when selecting your sample:</p>
             <p>
             <ul>
             <li>Do not only do the keywords you already know are successful. Whilst this will make you feel good and it will probably please your CEO, CTO, CMO and so on, it’s not the aim of the strategy.</li>
             <li>Decide a pattern for your sample of keywords, do not choose them at random. For example, pick the top 10 keywords with the highest search volume, or pick 3 high volume, 3 medium volume, and 3 low volume. The pattern will likely depend on your business goals.</li>
             <li>Lastly, whatever method you choose for your sample, keep it consistent across every tab.</li>
             </ul>
             </p>
             <p>Re-open the keyword research spreadsheet which you built in step two. You should have a column for keywords and a column for estimated search volume. We are going to build out this spreadsheet with some more data.</p>
             <p>In your keyword research spreadsheet, open up the first tab. Create two extra columns titled: Google Referrals and Click Through Rate. Do this for every tab.</p>
             <p>The click through rate column is the percentage of google search volume that clicked into your page. It can be calculated by adding the following formula in the first cell in the click through rate:</p>
             <p><em>= Google Referrals / Traffic * 100</em></p>
             <p><img style={{ width: `100%`,}}
 	           src="https://miro.medium.com/max/652/0*gz3oqEHY9do_Q4eN.png" alt=""></img></p><p>Once the formula is added in the first cell, copy and paste it into the the rest of the cells in the column.</p>
             <p>Head on over to your Google Analytics account to find the referral traffic which comes from Google for each keyword. This can be done with the following steps:</p>
             <p>
             <ul>
             <li>Login to Google Analytics</li>
             <li>Select Acquisition from the left hand menu</li>
             <li>Select All Traffic</li>
             <li>Select Organic Traffic</li>
             <li>Then enter the keyword you want to find the referral volume for</li>
             </ul>
             </p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/627/0*0N8aeihxumpSk8A2.png" alt=""></img></p><p>Once you have the google referral number for a specific search term, go back to your spreadsheet and enter it in the corresponding Google Referral cell for that keyword.</p>
             <p>The click through rate will automatically populate in the next cell.</p>
             <p>Rinse, repeat until you have completed the process for all the tabs in your keyword research document.</p>
             <p>Easy!</p>
             <h4 id="understanding-the-data">Understanding the data</h4>
             <p>If you’re a data nerd, like us, this is the fun part.</p>
             <p>You now have a large spreadsheet which shows the estimated google search volume per month, the amount of google referral traffic your website receives per month, and the estimated click through rate to your website.</p>
             <p>The next step is to use this data to find gaps and opportunities in your existing websites performance, and then to make actionable recommendations for improvement.</p>
             <p>Sort the click through rate column from low to high. By ordering the click through rate column, you can pick out search terms which have gaps or opportunities.</p>
             <p>Your spreadsheet should look something like the table below. The gaps are search terms which have search available but your existing referral traffic is relatively low.</p>
             <p>We use click through rate to inform this, for example, if you’re only get 2 clicks per month, but those 2 clicks equate to 35% click through rate, that’s OK. On the other hand, if you’re getting 2 clicks out of a possible 2000, that signals a gap in performance.</p>
             <p><img style={{ width: `100%`,}}
 	           src="https://miro.medium.com/max/637/0*12qtChftTUUZx9m0.png" alt=""></img></p><p>The gaps are highlighted in red above. By grouping them together, we can see that is a pattern that the search terms which are related to Victoria Whale Watching terms all have gaps. Make a note of the gap for further analysis. Remember, the job of the strategy is to pull out findings like this and to make actionable recommendations for improvement</p>
             <p>
             <ul>
             <li><em>Why is the click through rate low?</em></li>
             <li><em>What can be done to improve it?</em></li>
             <li><em>Is it valuable for the business to improve this?</em></li>
             </ul>
             </p>
             <p>Next, review the spreadsheet for opportunities. Opportunities are areas where there is search volume, however, the website is not (yet!) soaking up any referral traffic. It signals potential areas for your business to expand into.</p>
             <p>Going back to our example client, the table shows Whale Watching Tours as a keyword which has search volume but no referral traffic. We’d recommend this as a great opportunity.</p>
             <p>Why?</p>
             <p>Because as well as looking for opportunities, we also want to make sure the work required to improve it is worthwhile. Therefore, it’s also important to consider the type of keyword with a gap or opportunity.</p>
             <p>
             <ul>
             <li><em>Is it a buy term?</em></li>
             <li><em>Is there good intent to do business?</em></li>
             <li><em>Is it applicable to the business goals?</em></li>
             </ul>
             </p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/637/0*VDv34k724V7Hs4a2.png" alt=""></img></p>
             <h4 id="expanding-the-analysis">Expanding the analysis</h4>
             <p>By now, your keyword research document should be starting to fill out with lots of juicy information and recommendations to improve your websites performance. Throughout the research phase, it’s important to start making a note of your findings.</p>
             <p>From the two examples above, I would have made a note of the following two recommendations:</p>
             <p>
             <ul>
             <li>Gap: Victoria related search terms. There is a good volume of search but low click through rate.</li>
             <li>Opportunity: Whale watching tours currently receives no referral traffic but is a high intent keyword, of value to the business.</li>
             </ul>
             </p>
             <p>It is these findings which are the key to turning an SEO strategy from a chunk of research into an actionable strategy for success.</p>
             <p>By grouping the keywords into categories in step two, it is possible to extrapolate core areas for improvement.</p>
             <p>Sticking with our fictitious tour operator business, we can see:</p>
             <p>
             <ul>
             <li>Good organic search traffic for popular Vancouver Whale Watching queries.</li>
             <li>But the business receives less traffic for head Vancouver traffic</li>
             <li>Therefore, there is good opportunity to drive more Vancouver search traffic</li>
             </ul>
             </p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/510/0*1iSuIND2uPZugeq1.png" alt=""></img></p><p>Here’s a sample of Vancouver Whale Watching head term keyword sample:</p>
              <p><img style={{ width: `100%`,}}
 	            src="https://miro.medium.com/max/477/0*JG3t2zNRjH-NofjG.png" alt=""></img></p><p>Noticeably, the site received 1,891 impressions and only 16 clicks in 3 months for Google search results for Vancouver queries.</p>
              <p><img style={{ width: `100%`,}}
 	            src="https://miro.medium.com/max/620/0*HJ5h5uyTQ0WnmFLB.png" alt=""></img></p><p>This data presents the opportunities for the business and recommendations to attract and include Vancouver traffic would discuss:</p>
             <p>
             <ul>
             <li><em>Which Vancouver terms are the most relevant and most important to target?</em></li>
             <li><em>How can the site attract and engage more of those Vancouver visitors?</em></li>
             <li><em>Why aren’t currently ranking pages driving more clicks?</em></li>
             </ul>
             </p>
             <p>This type of analysis and recommendations should be done in each and every category (tab) of search terms which was found to be relevant to your business in step two. The aim is to find gaps and opportunities, which will add revenue to your business.</p>
             <h4 id="congratulations-for-making-it-this-far">Congratulations for making it this far!</h4>
             <p>We never said it would be easy but it certainly will be worthwhile. So far, you’ve got a good grasp on your business goals and customer needs from <a href="#understanding-business-goals-audiences-and-value-propositions">step 1,</a> the available search in <a href="#keyword-research">step two </a>and the possibilities to fill the gaps and opportunities in  <a href="#opportunity--gap-analysis">step 3.</a></p>
             <p id="who-are-your-competitors">In the next step will dig into your competition — how to find them and how to learn from them.</p>
             <h2>Step Four: Who Are Your Competitors?</h2>
             <p>Welcome back! Give yourselves a pat on the back for making it this far.</p>
             <p>So far, we’ve covered in detail:</p>
             <p>
             <ul>
             <li><a href="#understanding-business-goals-audiences-and-value-propositions"> Step 1: Your business goals, customer needs and value proposition</a></li>
             <li><a href="#keyword-research">Step 2: In-depth keyword research based on relevant categories for your business</a></li>
             <li><a href="#opportunity--gap-analysis">Step 3: Opportunities and gaps in your current website performance</a></li>
             </ul>
             </p>
             <p>Phew! You’ll be pleased to know that you’ve done the vast majority of the grunt work and your strategy research is starting to come together.</p>
             <h4 id="finding-your-competitors-in-the-search-engines">Finding your competitors in the search engines</h4>
             <p>This is a short and sweet step focusing solely on how to find your competitors in the search engines.</p>
             <p>Whilst most companies have a good idea of who their competitors are, for the sake of an SEO strategy it is important to only consider your competitors in the search engines.</p>
              <p>Whilst you may have different competitors in the real world, we are only concerned with the companies who are beating you to the top of the SERPs.</p>
             <p>If we know which businesses are ranking in the top spots on Google, we can dissect the strategies and techniques that they are employing to get there. We then have a really clear understanding what it takes to rank your website and beat the competition.</p>
             <p>Also, by revisiting the categories of keywords which are important to your business (identified in step 2) we can learn who is ranking in each and every area of your business, not just one overarching category.</p>
             <p>For a wooden accessory company, the categories may be, for example:</p>
             <p>
             <ul>
             <li>Wooden sunglasses</li>
             <li>Wooden bow-ties</li>
             <li>Wooden watches</li>
             </ul>
             </p>
             <h4 id="prepare-your-spreadsheet">#1 Prepare your spreadsheet</h4>
             <p>Let’s start by creating a fresh spreadsheet and calling it competitor research. In step 5 we’ll get into the nitty gritty of analysing these companies. However, for now, we are only going to make notes on who the competition are.</p>
             <h4 id="do-a-google-search">#2 Do a google search</h4>
             <p>Too easy, right! Simply take your keyword/product/category and google it. Here is what comes up if I google Wooden Watches:</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/500/0*OgXf36WkUZiFNN9L.png" alt=""></img></p><h4 id="use-moz’s-keyword-explorer-tool">#3 Use Moz’s Keyword Explorer tool</h4>
             <p>Again do a quick search for Wooden Watch in the Keyword Explorer tool. Quickly you’ll be presented with a table of the top websites ranking for that keyword.</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/637/0*JRWupr7IMLULMyjj.png" alt=""></img></p><h4 id="compare-the-data">#4 Compare the data</h4>
             <p>Create a table in your spreadsheet to list of the top websites based on both your Google search your Keyword explorer results.</p>
             <p>Add the results from the searches above. Ask yourself about the findings:</p>
             <p>
             <ul>
             <li><em>Are there any companies up consistently?</em></li>
             <li><em>Who are the top 5 companies in each category?</em></li>
             <li><em>Are big companies like Amazon and Ebay blocking out lots of spots (consider removing these from your analysis in step 5 as their results will likely muddy your research)?</em></li>
             </ul>
             </p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/648/0*VxzLAsvmOwxgeI5p.png" alt=""></img></p>
             <p>Both Google and Moz found <a href="http://woodwatch.com">woodwatch.com</a> and <a href="http://treehut.co.uk">treehut.co.uk</a> in the top 4 rank. We can hone in on these companies as core competitors in the next part of our strategy.</p>
             <h4 id="repeat">#4 Repeat</h4>
             <p>Repeat steps 1, 2 and 3 for each of categories as determined by your initial keyword research.</p>
             <h4 id="that’s-all-folks.">That’s all folks.</h4>
             <p id="analysing-the-competitive-landscape">You’ve now built up a data backed list of companies which are your competitors in the SERP’s. We’ll use this list in the next step to learn how they are ranking so well and how we can learn from.</p>
             <h2>Step Five: Analysing the competitive landscape</h2>
             <p>In   <a href="#who-are-your-competitors">step four</a>  we researched who your competitors are in the search engines, not just for your business as a whole, but for specific categories of your service or product.</p>
             <p>It was a relatively quick step to discover who the top dogs are for each of the categories or tabs identified in your keyword research.</p>
             <p>We now have a list of top competitors who are ranking for search terms related to important business services or products. Using this information, we can now build up a picture of what they are doing to achieve the highly coveted positions in Google.</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/597/0*D7da50khUEnto1rX.png" alt=""></img></p><p>If your goal is to be ranked in the top 5 on Google for the categories relevant to your business, then you need to dissect what, why, and how the other guys are doing it. That’s where competitive analysis comes in. This step will give you an understanding of how to conduct your own competitive analysis.</p>
             <p>Be warned, this step is not for the faint hearted. It takes time and effort to undertake effectively.</p>
             <h4 id="analysing-the-competition">Analysing the competition</h4>
             <p>This part of the strategy analyzes the current external linking landscape, comparing your site with other top-ranking sites for the topics you care about. With an understanding of what the link profiles look like across sites, we have a better idea of what it may take to get quality links, where to get them from, and how.</p>
             <p>The document provides recommendations for prompting visitors to link to and share your content more often as well as ideas for outreach and promotion that can help build a stronger, more contextually relevant link profile.</p>
             <p>When we see link profiles with red flags, this document will also provide recommendations for potential link cleanup.</p>
             <h4 id="what-we-look-for-and-why">What we look for and why</h4>
             <p>Analyzing the competition around a topic gives us a sense of what the competition is doing to attract and engage audiences for the topics you care about.</p>
             <h4 id="the-features-on-a-site-can-be-used-as-a-way-to-attract-and-engage-visitors.">The features on a site can be used as a way to attract and engage visitors.</h4>
             <p>For example, a site that provides a calculator or any sort of tool that is useful to visitors may increase their chances of getting repeat visits, getting links and of visitors sharing the content with their social networks. It is important to understand what your competitors offer in order to provide something even more compelling to the same audiences.</p>
             <h4 id="popularity-is-the-new-seo">Popularity is the new SEO</h4>
             <p>Search engines are getting better  <em>every day</em>  at determining what people find valuable, which is driven more now by popularity than ever. Popularity can include natural links, social sharing, site engagement, bookmarking, and a host of other measures to determine what pages should rank for any query.</p>
             <h4 id="quality-is-important">Quality is important</h4>
             <p>Here are some of the quality checks Google recommends for site owners:</p>
             <p>
             <ul>
             <li>Does the article provide original content or information, original reporting, original research, or original analysis?</li>
             <li>Does the page provide substantial value when compared to other pages in search results?</li>
             <li>Would you recognize this site as an authoritative source when mentioned by name?</li>
             <li>Is this the sort of page you’d want to bookmark, share with a friend, or recommend?</li>
             </ul>
             </p>
             <p>You can read more about this here:</p>
             <p><a href="http://googlewebmastercentral.blogspot.com/2011/05/more-guidance-on-building-high-quality.html">http://googlewebmastercentral.blogspot.com/2011/05/more-guidance-on-building-high-quality.html</a></p>
             <p>As we conduct the competitive analysis, make sure to keep these things in mind when evaluating the competition.</p>
             <h4 id="external-link-analysis">#1 External Link Analysis</h4>
             <p>Why external links are important</p>
             <p>A page carries a certain “importance” and relevance in a search engine. One very basic part of determining importance and relevance is by looking at the links that point to a page. The quantity, quality, and context of the links pointing to your site and your pages all play a very big role in search engine algorithms.</p>
             <p>Link Distribution</p>
             <p>Here are some definitions for terms we use in the following sections:</p>
             <p><em>Domain Authority (DA):</em></p>
             <p><em>Domain Authority represents SEOmoz/s best prediction about how a website will perform in search engine rankings. For more information, please refer to</em> <a href="https://moz.com/learn/seo/domain-authority"><em>https://moz.com/learn/seo/domain-authority</em></a></p>
             <p><em>Page Authority (PA):</em></p>
             <p><em>Page Authority predicts the likelihood of a single page to rank well, regardless of its content. Higher the Page Authority, greater is the potential for that individual page to rank well in search results. For more information on Page Authority, please review to</em> <a href="https://moz.com/learn/seo/page-authority"><em>https://moz.com/learn/seo/page-authority</em></a></p>
             <p>As we know the importance of backlinks, by studying the websites in the top 5 on Google and their backlink profile, we can build a picture of what is required in order for your website to compete.</p>
             <p>The “<em>external followed links</em>” are the total number of links from other sites to the subdomain and “<em>followed linking root domains</em>” is the total number of domains linking to the subdomain.</p>
             <p>There are oodles of tools out there that can help you analyse external links, however, our favourite is Open Site Explorer by Moz. It’s easy to use and easy to get started with.</p>
             <p>Here’s an example of external links across a selection of competing websites:</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/672/0*G_g_B1O67JbZzKH7.png" alt=""></img></p><p>Head over  <a href="https://analytics.moz.com/pro/link-explorer">Moz’s Link Explorer</a> and begin your own competitive analysis. Enter a competitors domain in to the ‘root domain’ field to learn about a specific websites backlink profile.</p>
             <p><img style={{ width: `100%`,}}
	             src="https://miro.medium.com/max/1286/0*7q8uM5Y-Hovy9N69.png" alt=""></img></p>
             <p>Select Compare Link Profiles on the left hand side to compare more than one domain at a time.</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/958/0*UVX1UHU1h8vELSSC.png" alt=""></img></p>
             <p>Head over to your spreadsheet and start taking notes of the external links for your own business and your competitors. The more information you gather, the better.</p>
             <p>Ask yourself (and add the answers to your spreadsheet):</p>
             <p>
             <ul>
             <li><em>How many external links do my competitors have?</em></li>
             <li><em>How many internal links do my competitors have?</em></li>
             <li><em>What the domain Authority of my competitors sites?</em></li>
             <li><em>Search statistics: How many visits per month from how many keywords do my competitors sites have?</em></li>
             <li><em>Which websites are linking to the sites?</em></li>
             <li><em>What content is being linked to?</em></li>
             </ul>
             </p>
             <p>Don’t limit yourself to the information above. Goes as in-depth as you can. We want to know exactly what these websites are doing to rank in the top spots. We can then use this information to reverse-engineer your SEO stardom!</p>
             <p><img style={{ width: `100%`,}}
 	           src="https://miro.medium.com/max/557/0*XNFnWhEdOUi5VEyI.png" alt=""></img></p> <p>Here how an example company may compare to their competition:</p>
             <p>
             <ul>
             <li>Company 1 has 1,098 external links to it, Company 2 has 1,116 links, and Company 3 has 69 external links.</li>
             <li>Company 1 has 14,215 internal links, followed by Company 2 with only 28 internal links, and Company 3 with only 1 internal link.</li>
             <li>Company 1 spends more effort in content marketing as compared to the competitors.</li>
             <li>Company 1 has the highest number of external links and linking root domains as compared to other two.</li>
             </ul>
             </p>
             <h4 id="website-structure">#2 Website structure</h4>
             <p>Google places importance on page layout for SEO, URL structure, navigational structure and internal linking structure. For each of you competitors identified in  <a href="#who-are-your-competitors">step four</a>, analyse their website and landing pages.</p>
             <p>
             <ul>
             <li>What is their website architecture? What is their navigation structure?</li>
             <li>What landing pages are ranking for keywords?</li>
             <li>What is included on the pages which are landing. Consider features, links, content and so on.</li>
             </ul>
             </p>
             <p>Lets dig a bit deeper and see how this works with some example competitors…</p>
             <h4 id="website-architecture-and-site-navigation">Website architecture and site navigation</h4>
             <p>Here is the website structure for Competitor 1:</p>
             <p><img style={{ width: `100%`,}}
 	           src="https://miro.medium.com/max/553/0*X_5d3HMviG_vgSPE.png" alt=""></img></p><p>Here is the website structure for Competitor 2:</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/603/0*rJnEJ6DJq8UERg4O.png" alt=""></img></p><h4 id="landing-page-analysis">Landing page analysis</h4>
             <p>The next step is to compile a list of websites which appear for the target keywords on the first page of Google.</p>
             <p>This analysis helps us to understand what competitors are doing on the website to improve the relevancy of their website for the target keywords. We would use pieces of this analysis during the architecture development of your website.</p>
             <p>The first step is conduct a Google search for a keyword which is relevant to your business, for example, Wood Bow Tie.</p>
             <p>Here is the search result in Google:</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/549/0*UG52b5NhWi4NPhOK.png" alt=""></img></p>
              <p>Now analyse the page to see what techniques they are employing on page:</p>
              <p><img style={{ width: `100%`,}}
 	            src="https://miro.medium.com/max/600/0*ravNaNW3EniQ9YD8.png" alt=""></img></p>
              <p><img style={{ width: `100%`,}}
  	           src="https://miro.medium.com/max/580/0*tZzleFqtxssCkw4v.png" alt=""></img></p>
             <p>For our example competitor, here are some techniques they are employing to win in the SERPS:</p>
             <p>
             <ul>
             <li>Imagery of wooden bow ties</li>
             <li>Categorisation of bow ties</li>
             <li>Internal links:</li>
             <li>Authority symbols</li>
             <li>Trust symbols</li>
             <li>Customer reviews</li>
             </ul>
             </p>
             <p>Take the time to consider what your competitors are doing on there website as a whole (architecture, domain, navigation) and also on the landing pages which rank for important keywords for your business.</p>
             <h4 id="link-building-tactical-recommendations">#3 Link building tactical recommendations</h4>
             <p>Overview of Tactics</p>
             <p>By reviewing the links which your top-ranking competitors have, you can build up a picture of tactical recommendations for link building for you own business.</p>
             <p>We categorize the link building tactics below as basic, intermediate, and advanced based on the efforts and resources they require to implement.</p>
             <p>
             <ul>
             <li>Basic Tactics: A “basic” tactic is a tactic that can typically be implemented by your link building consultant (or in-house employee responsible for SEO) without the creation of additional resources (i.e. content, software, etc.) or extensive ongoing efforts (i.e. building a sustainable relationship with the targeted website) prior to actually receiving a link.</li>
             <li>Intermediate Tactics: An “intermediate” tactic is a tactic that may require outreach to existing websites, including associates / vendors related to your business, websites related to the personal background of the management team of the company, etc. As part of some intermediate tactics, ongoing monitoring of online content and the creation of content (articles, etc.) may be required as part of acquiring links. Intermediate tactics typically require the help of an experienced SEO consultant.</li>
             <li>Advanced Tactics: An “advanced” tactic is part of a comprehensive SEO campaign and is usually employed by a company that is aggressively focused on building sales online. While some parts of advanced tactics can be managed internally, an experienced outside SEO consultant is recommend to truly scale an advanced campaign.</li>
             </ul>
             </p>
             <h4>Overview of ways competitors get links</h4>
             <p>We the content marketing efforts used by competing websites to build their domain authority. This analysis will help us to fuel the content marketing strategy required to attract different audiences through search channel.</p>
             <p>This section takes a deep dive into the strategies used by the example competitors to attract traffic and links to the website.</p>
             <p>Here is a summary of the primary strategies:</p>
             <p>
             <ul>
             <li>Featured Section on Relevant Pages: Competitors such as Jord use featured sections on relevant pages of other websites to increase branding and referral visits to their website.</li>
             <li>Review Content by Bloggers: Competitors provide free watches to reviewers in order to get back links and quality referral traffic to their website.</li>
             </ul>
             </p>
             <p><img style={{ width: `100%`,}}
 	           src="https://miro.medium.com/max/444/0*9bOnRmJFvg4XND-r.png" alt=""></img></p><p>
             <ul>
             <li>Contests, Quizzes and Giveaways: These are great ways exploited by competitors to build visibility, engagement and traffic for their website. Jord watches gave away 1000’s of watches to be featured across good bloggers, get new audiences, branding, and links to their website.</li>
             </ul></p>
             <p><img style={{ width: `100%`,}}
 	            src="https://miro.medium.com/max/577/0*0ErgThYw_BN8icjh.png" alt=""></img></p>
              <p>
             <ul>
             <li>Themed Links: Competitors use themes such as weddings to giveaway free products and receive links from the target websites. For example, wedding photographers post pictures of weddings and link to the brands used.</li>
             <li>Directory Submission: Directory submission is another technique utilized to receive contextual links which help in raising the relevancy and domain authority.</li>
             </ul></p>
             <h4 id="to-conclude">To conclude</h4>
             <p>We’ve built up an in-depth picture of your competitors external linking landscape, their website architecture, landing pages and features, and picked up some tactical recommendations along the way. This information will be used to build up a document of strategical recommendations to help your company rank in the search engines.</p>
             <p id="seo-strategy--recommendations">The  <a href="#seo-strategy--recommendations">next and penultimate step</a>  in this series will round up all our research into one big, fat strategy document with findings and recommendations.</p>
             <h2>Step Six: SEO Strategy &amp; Recommendations</h2>
             <p>Hoorah! You’ve made it through the research part of the strategy. Now it’s time to pull it all together into an actionable strategy.</p>
             <p>Whilst it may sound like a daunting task, what we’re going to do is round up all the data from steps 1–5 and create a document which covers findings and strategic SEO recommendations.</p>
             <p>Easy peasy.</p>
             <h4 id="findings">Your Findings</h4>
             <p>By now you should have several spreadsheets full of juicy data all about your <a href="#understanding-business-goals-audiences-and-value-propositions"> business goals</a>, your <a href="#keyword-research">keywords</a>, your  <a href="#opportunity--gap-analysis">opportunities</a>  and your  <a href="#analysing-the-competitive-landscape">competition</a>. We’re going to revisit your notes from each step and make a compilation of the best bits to create a findings document.</p>
             <p>Let’s dive in!</p>
             <p>Step 1:  <a href="#understanding-business-goals-audiences-and-value-propositions"> Business goals, customer needs and value proposition document</a></p>
             <p>
             <ul>
             <li>Summarize the important information about your business goals. Is there anything this document should ignore because it is not relevant to your business goals?</li>
             <li>Include as much information as possible about your customers. What do they want? What are they looking for? What does the site need to provide them?</li>
             </ul>
             </p>
             <p>Step 2:  <a href="#keyword-research">Keyword research</a></p>
             <p>
             <ul>
             <li>Explain the groups of keywords you found. Why did they end up in this configuration? Is there a reason behind the groups?</li>
             <li>Did you find anything interesting in the data that was not obvious from the outset? Perhaps you found a significant demand for a new product that you had not considered before?</li>
             </ul>
             </p>
            <p>Step 3: <a href="#opportunity--gap-analysis">Opportunity &amp; gap analysis</a></p>
             <p>
             <ul>
             <li>What gaps did you find? Where is the company performing badly in relation to the available search?</li>
             <li>What opportunities did you find? Are there any opportunities which have not be addressed by the site?</li>
             <li>Where is the site doing well? Which pieces of content are performing well, and why?</li>
             </ul>
             </p>
             <p>Step 4:  <a href="#who-are-your-competitors">Competitors</a></p>
             <p>
             <ul>
             <li>Who are your competitors in the search engines?</li>
             <li>Who are your competitors for each category?</li>
             <li>Is there any overlap between categories?</li>
             <li>Is there a key player or several smaller competitors?</li>
             </ul>
             </p>
             <p>Step 5: <a href="#analysing-the-competitive-landscape">Competitive analysis</a></p>
             <p>
             <ul>
             <li>What is the link profile of your competitors? How do you stack up?</li>
             <li>What is the structure of your competitors websites? What is their URL and how is their navigation setup?</li>
             <li>What features / categories / links are included on the pages which are ranking?</li>
             <li>What is different about your competitors websites?</li>
             <li>Did you find anything else juicy about your competitors? Is there anywhere they are falling down? Any negative sentiment about them?</li>
             </ul></p>
             <p>That’s it!</p>
             <p>Pull all the useful information from the research documents into a summary. Don’t try to solve it at this point, just explain what you’ve found. Include data, screenshots where possible, but don’t make it overwhelming. If you need to do a deeper dive into the data, this should referenced in the spreadsheets, not included in the summary.</p>
             <h4 id="strategic-initiatives-to-meet-seo-goals">Strategic initiatives to meet SEO goals</h4>
             <p>Phew!</p>
             <p>Good work, now you’ve made it to the juicy bit. This is where we will provide actionable, data backed recommendations to improve the websites performance.</p>
             <p>Whilst that may sound complicated, throughout the research, we’ve naturally been pulling out bits of data which are relevant to the business. It’s now time to pull it all together and to provide clear recommendations.</p>
             <p>Every strategy / business / product is different. There is no one size fits all way to make recommendations in a strategy.</p>
             <p>However, you should be considering recommendations across topics such as:</p>
             <p>
             <ul>
             <li>Terminology</li>
             <li>Visuals/colours/design</li>
             <li>Website features</li>
             <li>Content</li>
             <li>Landing pages</li>
             <li>Website architecture</li>
             <li>Outreach and promotion</li>
             <li>External links</li>
             <li>Internal links</li>
             </ul></p>
             <p>Here is are some more in-depth examples, based on a made up client…</p>
             <h4 id="example-recommendation-1">Example recommendation 1:</h4>
             <p>Search term:</p>
             <p>Address optimization and content creation around terms: cold compress for headache and migraines</p>
             <p>Current:</p>
             <p>
             <ul>
             <li>No targeted landing page</li>
             <li>Company doesn’t rank for any query related to cold compress for headaches and migraines. There is no target landing page for this query.</li>
             </ul></p>
             <p>Recommendation:</p>
             <p>
             <ul>
             <li>Create new deep content pages (1000+ words) about:</li>
             <li>How to use cold compress for headaches</li>
             <li>Can cold compress help to get relief from headaches</li>
             <li>Cold compression therapy for migraine relief</li>
             <li>Can cold compression help to get relief from migraines</li>
             <li>Get links to these blogs by collaborating with other bloggers while creating the content.</li>
             <li>Do guest posts with links using ice therapy for migraines and headaches.</li>
             </ul>
             </p>
             <p>Site architecture:</p>
             <p><img style={{ width: `100%`,}}
	            src="https://miro.medium.com/max/530/0*vmwN7zKcnO-RdTLO.png" alt=""></img></p><h4 id="example-recommendation-2">Example recommendation 2:</h4>
             <p>Recommendation:</p>
             <p>Add a page dedicated to Headache</p>
             <p>Architecture:</p>
             <p>Create links to the resource subdirectories (types of headaches, causes of headaches, prevention tips, and remedies) so that search engines can discover and follow the links to the subdirectories.</p>
             <p>Page Type &amp; Content:</p>
             <p>Provide content with cross-linking on the pages to other related content. This will allow for a deeper crawl as well as provide more contextual clues as to which pages are related.</p>
             <p>Target landing page:</p>
             <p><a href="http://domain.com/headaches/">domain.com/headaches/</a></p>
             <p>Title:</p>
             <p>
             <ul>
             <li>Headache Types, Causes, Prevention and Remedies | Company Name</li>
             </ul></p>
             <p>Meta Description:</p>
             <p>
             <ul>
             <li>Suggested: Learn about headache types, causes, prevention tips and remedies to make the right decision in any situation.</li>
             </ul></p>
             <p>Integrating the target terms:</p>
             <p>
             <ul>
             <li>Page Heading:</li>
             <li>Suggested: Get Relief from Headaches: Learn about Headache types, causes, prevention tips and remedies.</li>
             </ul></p>
             <h4 id="over-to-you…">Over to you…</h4>
             <p>Now it’s your turn. Review your findings from steps 1 to 5 and pull out the recommendations you found to improve the websites performance.</p>
             <p>Go get em tiger!</p>
             <p id="Prioritisation-and-cost-benefit-analysis">In the next step, we'll organise your findings by priority and prepare a neat little cost benefit analysis on the strategy recommendations.</p>
             <h2>Step Seven: Prioritisation and cost benefit analysis</h2>
             <p>We’ve been on a colossal journey from researching  <a href="#understanding-business-goals-audiences-and-value-propositions"> business goals</a>  to  <a href="#keyword-research">keyword research</a>  to  <a href="#opportunity--gap-analysis">opportunity and gap analysis</a>  to  <a href="#analysing-the-competitive-landscape">competitive analysis</a>. You are now the proud owners of an uber-specific, laser-focused, data-backed SEO strategy for your business.</p>
             <p>However, we know that researching and delivering a data backed strategy for online success is only one piece of the puzzle.</p>
             <p>It’s what happens next which really matters for most businesses.</p>
             <p>Most startups, SAAS companies and e-commerce stores wouldn’t thank us if we waltzed in, dumped a 200 page strategy on their desk and then turned on our heels and left.</p>
             <p>They want to understand why all this information matters and, more importantly, what to do with it.</p>
             <p>The goal of a strategy is not to overload a business. It is to provide actionable steps, in order of priority, to take your business from its current position to reigning supreme on the web.</p>
             <p>The last (but most definitely not the least) step is to provide priorities and cost benefit analysis’ to the recommendations made in step six.</p>
             <p>We’ve come a long way together, but stick with us, there is one final step to complete.</p>
             <p>Ready? Let’s go!</p>
             <h4>Prioritize your recommendations</h4>
             <p>Sadly, in the real world, most companies don’t have the time or resources to complete every recommendation from an in-depth SEO strategy. They also need to get buy in from numerous departments, from the dev team to sales and management, the involvement is generally wide.</p>
             <p>Our job as SEO’s and strategists is not to ram through as many recommendations as possible, regardless of impact, resources or business goals. Our job is to ensure the company gets measurable results from the strategy, based on their business goals.</p>
             <p>If you’ve completed  <a href="#seo-strategy--recommendations">step six</a>, you will have a document jam packed full of recommendations. Take each one in term and order them in terms of priority.</p>
             <p>Consider each recommendation in terms of:</p>
             <p>#1 Impact:</p>
             <p>How much impact the change will have on your business.</p>
             <p>#2 Resources:</p>
             <p>Does the business have the resources in place to complete the recommendation? Is it feasible for the business to allocate resources to the change?</p>
             <p>#3 Business goals:</p>
             <p>Right back in  <a href="#understanding-business-goals-audiences-and-value-propositions">step one</a>  we hashed out the business goals. Keep your strategy on track by circling back to these goals.</p>
             <h4>Cost-benefit analysis</h4>
             <p>Another neat way to analyse the priority of the recommendations is to conduct a cost benefit analysis. Whilst we can’t guarantee the exact figures (and no SEO should), we do have some readily available data to build estimates upon.</p>
             <p>Let’s take an example of a website which is ranking poorly for ‘bed sheets for sale’ and build out a cost benefit analysis using data which is readily available online.</p>
             <p>According to  <a href="https://moz.com/blog/selling-seo-to-executives">Moz</a>, the number one spot on Google gets 32.8% of the clicks.</p>
             <p>If “bed sheets’ generates a search volume of 33,100 per month in America (thanks  <a href="https://app.neilpatel.com/en/ubersuggest/overview?keyword=bed%20sheets&amp;country=us">UberSuggest!</a>). The website in 1st place should be getting 10,857 clicks from that keyword.</p>
             <p>At a conversion rate of 2.63%, that would be 286 sales per month. Use the websites existing conversion rate or an  <a href="https://www.smartinsights.com/ecommerce/ecommerce-analytics/ecommerce-conversion-rates/">industry average found online</a>  for this step.</p>
             <p>If the store generates £30 profit per transaction, that would equate to £8566 profit per month.</p>
             <p>These are just example figures but they do serve to illustrate an example of how your position in the search engine helps your bottom line. They can form the basis of a cost-benefit analysis and can help to prioritize SEO recommendations, in order of importance for the business.</p>
             <p>Here’s one example of how a cost-benefit analysis could look for a online store:</p>
               <img style={{ width: `100%`,}}
                 src={SEO_strategy_cost_benefit}
                 alt="SEO strategy cost benefit analysis"
               />
            <h2>Hooray!</h2>
             <p>You’ve made it! You’ve successfully worked through the steps to conduct your very own SEO strategy.</p>
             <p>Together we’ve worked through:</p>
             <p>
             <ul>
             <li>Step 1:  <a href="#understanding-business-goals-audiences-and-value-propositions"> Understanding your business goals, customer needs and value proposition</a></li>
             <li>Step 2:  <a href="#keyword-research">Keyword research</a></li>
             <li>Step 3:  <a href="#opportunity--gap-analysis">Opportunity and gap analysis</a></li>
             <li>Step 4:  <a href="#who-are-your-competitors">Defining your competitors</a></li>
             <li>Step 5:  <a href="#analysing-the-competitive-landscape">Analysing your competitors</a></li>
             <li>Step 6:  <a href="#seo-strategy--recommendations">Findings and recommendations</a></li>
             <li>Step 7:  <a href="#Prioritisation-and-cost-benefit-analysis">Priorities and cost benefit analysis</a></li>
             </ul></p>
             <p>You’re now the proud owner of a clearly defined, data backed strategy to inform your online presence, along with recommendations and priorities.</p>
             <p>Whether you implement it straight away or chip away at it over the longer term, your strategy takes the guesswork out and allows you to focus on methodical implementation of recommendations based on data.</p>
             <p>Thanks for joining us on this epic journey. We hope you’ve enjoyed it.</p>
             </div>
          </GridItem>
          </GridContainer>
        </div>
        </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(OverviewSection);
