module.exports = {
  siteMetadata: {
    title: `Ingyerlog v2`,
    author: {
      name: `ingyer ks`,
      summary: `전자정보방송통신에 대해 공부하는 ingyer ks입니다.`,
    },
    description: `전기 전자 정보 방송 통신 공무원/군무원 기출문제 해설`,
    siteUrl: `https://ingyerlog.kr/`,
    social: {
      github: `ingyer-ks`,
    },
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/answers`,
        name: `answer`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        rehypePlugins: [require('rehype-katex'), { strict: 'ignore' }],
        remarkPlugins: [require("remark-math")],
        extensions: [".mdx", ".md"],
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 500,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
              sandbox: 'allow-same-origin allow-scripts allow-presentation', // Optional: iframe sandbox options - Default: undefined
            },
          },
          "gatsby-remark-responsive-iframe",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `A blog by Sridatta`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/profile-pic.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-clarity`,
      options: {
        clarity_project_id: "gct6axljb9",
        enable_on_dev_env: false
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-MJQQSCBQDN",
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
          // Defaults to https://www.googletagmanager.com
          origin: "https://www.googletagmanager.com",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
}
