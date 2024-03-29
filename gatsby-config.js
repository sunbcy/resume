module.exports = {
  pathPrefix: '/resume',
  siteMetadata: {
    title: 'Resume Generator',
    githubUrl: 'https://github.com/visiky/resume.git',
    author: 'visiky',
    contact: 'https://github.com/visiky',
  },
  flags: {
    DEV_SSR: false,
  },
  // scripts: {
  //   develop: 'PORT=8000 template=template1 user=bcy gatsby develop'
  //   // port: 8000, // 默认端口号
  //   // host: 'localhost?template=template1&user=bcy', // 指定主机地址并拼接请求参数
  // },
  plugins: [
    {
      // https://developers.google.com/analytics/devguides/collection/gtagjs?hl=zh_CN
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingIds: ['G-2K3PH6MKBG'],
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        strictMath: true,
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'font-family': 'roboto-regular, Arial',
            'primary-color': '#2f5785',
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-pnpm',
  ],
};
