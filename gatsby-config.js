const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';


require('dotenv').config({
    path: `.env.${activeEnv}`,
});


module.exports = {
    siteMetadata: {
        title: 'Brumate Help Center',
        description: 'Brumate',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-eslint',
        'gatsby-plugin-breakpoints',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                display: 'minimal-ui',
            },
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: 'b1jnxgqy6w4b',
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
            },
        },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    ],
};
