const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

exports.onCreateWebpackConfig = ({
  loaders,
  actions,
  stage,
  plugins,
  getConfig,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /canvas/,
          use: loaders.null(),
        },
      ],
    },
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  })

  if (stage === "build-javascript") {
    // get current webpack config
    const config = getConfig()
    // our new cssnano options
    // are still based on default preset
    const options = {
      cssProcessorPluginOptions: {
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true,
            },
            calc: false,
            reduceTransforms: false,
            minifySelectors: false,
          },
        ],
      },
    }
    // find CSS minimizer
    const minifyCssIndex = config.optimization.minimizer.findIndex(
      minimizer =>
        minimizer.constructor.name === "OptimizeCssAssetsWebpackPlugin"
    )
    // if found, overwrite existing CSS minimizer with the new one
    if (minifyCssIndex > -1) {
      config.optimization.minimizer[minifyCssIndex] = plugins.minifyCss(options)
    }
    // replace webpack config with the modified object
    actions.replaceWebpackConfig(config)
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMdx(limit: 2000) {
          edges {
            node {
              id
              slug
              fields {
                haspdf
              }
              frontmatter {
                title
                description
                etc
                year
                organization
                level
                subject
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.edges

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].node.id
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].node.id
      createPage({
        path: post.node.slug,
        component: path.resolve(`./src/templates/BlogPost.tsx`),
        context: {
          id: post.node.id,
          previousPostId,
          nextPostId,
        },
      })
    })

    const etc = {}
    posts
      .filter(({ node }) => node.frontmatter.etc)
      .forEach(({ node }) => {
        etc[node.frontmatter.etc] ? etc[node.frontmatter.etc].push(node.slug) : etc[node.frontmatter.etc] = []

        Object.keys(etc).forEach(etc => {
          createPage({
            path: `/etc/${etc}`,
            component: path.resolve(`./src/templates/etc.tsx`),
            context: {
              etc,
            },
          })
        })
      })


    const years = {}
    posts
      .filter(({ node }) => node.frontmatter.year)
      .forEach(({ node }) => {
        years[node.frontmatter.year] ? years[node.frontmatter.year].push(node.slug) : years[node.frontmatter.year] = []

        Object.keys(years).forEach(year => {
          createPage({
            path: `/year/${year}`,
            component: path.resolve(`./src/templates/year.tsx`),
            context: {
              year,
            },
          })
        })
      })

    const organizations = {}
    posts
      .filter(({ node }) => node.frontmatter.organization)
      .forEach(({ node }) => {
        organizations[node.frontmatter.organization] ? organizations[node.frontmatter.organization].push(node.slug) : organizations[node.frontmatter.organization] = []

        Object.keys(organizations).forEach(organization => {
          createPage({
            path: `/org/${organization}`,
            component: path.resolve(`./src/templates/organization.tsx`),
            context: {
              organization,
            },
          })
        })
      })

    const levels = {}
    posts
      .filter(({ node }) => node.frontmatter.level)
      .forEach(({ node }) => {
        levels[node.frontmatter.level] ? levels[node.frontmatter.level].push(node.slug) : levels[node.frontmatter.level] = []

        Object.keys(levels).forEach(level => {
          createPage({
            path: `/level/${level}`,
            component: path.resolve(`./src/templates/level.tsx`),
            context: {
              level,
            },
          })
        })
      })

    const subjects = {}
    posts
      .filter(({ node }) => node.frontmatter.subject)
      .forEach(({ node }) => {
        subjects[node.frontmatter.subject] ? subjects[node.frontmatter.subject].push(node.slug) : subjects[node.frontmatter.subject] = []

        Object.keys(subjects).forEach(subject => {
          createPage({
            path: `/subject/${subject}`,
            component: path.resolve(`./src/templates/subject.tsx`),
            context: {
              subject,
            },
          })
        })
      }
      )
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })

    createNodeField({
      name: `haspdf`,
      node,
      value: node.frontmatter.etc ? "n" : "y",
    })

  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "Mdx" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
    }

    type Author {
      name: String
      summary: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Social {
      github: String
    }

    type Frontmatter {
      title: String
      description: String
      etc: String
      year: String
      organization: String
      level: String
      subject: String
    }

    type Fields {
      slug: String
      haspdf: String
    }
  `)
}
