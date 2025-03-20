const path = require('path');
require('dotenv').config();







module.exports = {
  // flags: {
  //   PRESERVE_WEBPACK_CACHE: true,
  //   FAST_REFRESH: true,
  // },
  siteMetadata: {
    title: `Innovazy`,
    description: `We Offer Innovative, Creative and Advanced IT Solutions to Businesses and Industries around the Globe`,
    // image: `/gatsby-icon.png`,
    siteUrl: `https://www.innovazy.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    '@vercel/gatsby-plugin-vercel-builder',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
  
  
    "gatsby-transformer-remark",
   
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },

    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-233111220-1",
        head: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
