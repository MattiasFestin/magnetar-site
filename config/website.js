const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Magnetar - Development reimagined', // Navigation and Site Title
  siteTitleAlt: 'Magnetar', // Alternative Site title for SEO
  siteTitleShort: 'Magnetar', // short_name for manifest
  siteHeadline: 'Solving the problems of today and tomorrow', // Headline for schema.org JSONLD
  siteUrl: 'https://www.magnetar.se', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Information site about the company magnetar',
  author: 'magnetar', // Author for schema.org JSONLD

  siteFBAppID: '446989362527881', // Facebook App ID - Optional
  userTwitter: '@WeAreMagnetar', // Twitter Username
  ogSiteName: 'WeAreMagnetar', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-35874527-3',

  // Manifest and Progress color
  themeColor: '#6c63ff',
  backgroundColor: '#2017B3'
};
