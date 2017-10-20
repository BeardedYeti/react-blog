module.exports = {
  siteMetadata: {
    title: `Colin Smith - Blog`,
    author: `Colin Smith`
  },
  plugins: [
  	`gatsby-plugin-catch-links`,
  	`gatsby-plugin-react-helmet`,
  	{
  		resolve: `gatsby-source-filesystem`,
  		options: {
  			path: `${__dirname}/src/pages`,
  			name: 'pages',
  		},
  	}
  ],
}
