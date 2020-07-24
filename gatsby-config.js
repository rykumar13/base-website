const config = require('./src/config.js');

module.exports = {
  siteMetadata: {
    title: `Rajiv Kumar | Software Engineer`,
    description: `Child theme and starter from gatsby-theme-catalyst-core`,
    author: `Rajiv Kumar`,
    siteUrl: `http://localhost:8000/`, //Change to you site address, required for sitemap.xml and robots.txt file
    menuLinks: [
      {
        name: `Not Used`, //Placeholder due to graphql
        link: `#` //Placeholder due to graphql
      }
    ],
    anchorLinks: [
      {
        name: `about`,
        link: `#section1`
      },
      {
        name: `experience`,
        link: `#section2`
      },
      {
        name: `contact`,
        link: `#section3`
      }
    ],
    socialLinks: [
      {
        name: `e-mail`,
        url: `rykumar13@gmail.com`,
        location: `footer`
      },
      {
        name: `Github`,
        url: `https://www.github.com/rykumar13`,
        location: `all`
      },
      {
        name: `Twitter`,
        url: `https://www.twitter.com/`,
        location: `footer`
      }
    ]
  },
  plugins: [
    `gatsby-theme-catalyst-onepage`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-onepage`,
        short_name: `catalyst-onepage`,
        start_url: `/`,
        background_color: `#0a192f`,
        theme_color: `#0a192f`,
        display: `minimal-ui`,
        icon: `src/images/logo-512.png` // This path is relative to the root of the site.
      }
    }
  ]
};
