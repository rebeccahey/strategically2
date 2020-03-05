const path = require(`path`)

module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    title: "Strategically.co",
  },
  plugins: [
    {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-T35RVN5",
    },
  },
  {
    resolve: `gatsby-plugin-linkedin-insight`,
    options: {
      partnerId: `507715779`,

      // Include LinkedIn Insight in development.
      // Defaults to false meaning LinkedIn Insight will only be loaded in production.
      includeInDevelopment: false
    }
  }
  {
  resolve: `gatsby-plugin-facebook-pixel`,
  options: {
    pixelId: '1650318571874644',
  },
},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `img`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-127625937-1",
        head: false,
      },
    },
    {
     resolve: 'gatsby-plugin-crisp-chat',
     options: {
       websiteId: 'baad053f-4aa3-4ba7-81c2-540fe4ea2127',
       enableDuringDevelop: false, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
       defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
       enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
     },
       },
       {
    resolve: `gatsby-plugin-hotjar`,
    options: {
      id: '1700840',
      sv: 'h._hjSettings={hjid:1700840,hjsv:6}',
    },
  },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`pt-serif`],
        display: "swap",
      },
    },
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Strategically.co London B2B and SaaS SEO Agency",
        short_name: "Strategically.co",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/img/favicon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}
