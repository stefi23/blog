module.exports = {
  siteMetadata: {
    title: `Stefi's Shorts`,
    description: `Personal blog about travel, life in Barcelona and much more`,
    author: `Stefi Rosca`,
    image: "/static/0feebc4873fc9cac64f7e74ae2bfa064/0e329/banner.jpg",
    twitter: "@stefania_rosca",
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stefi Rosca`,
        short_name: `Stefi Rosca`,
        start_url: `/`,
        background_color: `#352D39`,
        theme_color: `#352D39`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-social9-socialshare",
      options: {
        content: "626fa16b98164446b87e23e1c8ba3f90",
        async: true,
        defer: true,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  // pathPrefix: `/blog`,
}
