/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Net Frontier - Website Design Made Simple',
    titleTemplate: '%s Website Design Made Simple',
    description:
      'Do you need a new website? We design super fast, user friendly, technologically advanced websites, hand-coded to help your business thrive online',
    siteUrl: 'https://www.netfrontier.co.uk',
    url: 'https://www.netfrontier.co.uk',
    // No trailing slash allowed!
    defaultImage: '/src/images/Net-Frontier-Default.jpg',
    image: '/src/images/Net-Frontier-Default.jpg',
    logo: '/src/images/logo/android-chrome-512x512.png',
    author: {
      name: 'Daniel Couzens',
      minibio: `
       A highly skilled and enthusiastic web developer who is constantly developing new skills and strategies to ensure Net Frontier and their clients stay ahead of the curve.
      `,
    },
    organization: {
      name: 'Net Frontier',
      url: 'https://www.netfrontier.co.uk/about/',
      logo: './images/logo/android-chrome-512x512.png',
    },
    social: {
      twitter: '@net_frontier',
      fbAppID: '',
    },
    categories: [
      {
        slug: 'test',
        name: 'Test Category',
      },
    ],
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Net Frontier',
        short_name: 'Net Frontier',
        start_url: '/',
        background_color: '#ea7857',
        theme_color: '#ea7857',
        display: 'standalone',
        icon: 'src/images/icon.png',
        icons: [
          {
            src: `/images/logo/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/images/logo/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/about/`,
          `/services/`,
          `/prices/`,
          `/our-process/`,
          `/blog/`,
          `/faq/`,
          `/contact/`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://stats.g.doubleclick.net',
          'https://www.google.co.uk',
          'https://www.google.com',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['300'],
              fontDisplay: 'swap',
            },
            {
              family: 'Ubuntu',
              variants: ['300', '700'],
              fontDisplay: 'swap',
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `background`,
        path: `${__dirname}/src/images/background`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hero`,
        path: `${__dirname}/src/images/hero`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/images/work`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stock`,
        path: `${__dirname}/src/images/stock`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GA_TRACKING_ID,
          // Setting this parameter is optional
          cookieFlags: 'Secure;SameSite=None',
          anonymize: true,
        },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        // },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.netfrontier.co.uk/',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/success`,
          `/offline-plugin-app-shell-fallback`,
        ],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
         
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
  ],
}
