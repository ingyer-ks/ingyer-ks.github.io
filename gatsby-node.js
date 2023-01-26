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
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 2000
        ) {
          edges {
            node {
              id
              slug
              fields {
                category
                haspdf
              }
              frontmatter {
                title
                description
                category
                date
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

    const categories = {}
    posts
      .filter(({ node }) => node.fields.category)
      .forEach(({ node }) => {
        const categoryList = node.fields.category
          .split(",")
          .map(category => category.trim())
          .filter(category => category.length > 0)

        categoryList.forEach(category => {
          if (!categories[category]) {
            categories[category] = []
          }
          categories[category].push(node.slug)
        })

        Object.keys(categories).forEach(category => {
          createPage({
            path: `/categories/${category}`,
            component: path.resolve(`./src/templates/category.tsx`),
            context: {
              category,
            },
          })
        })
      })
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

    if (!node.frontmatter.category) {
      const value = node.frontmatter.title.replace(/ /gi, ",")
      createNodeField({
        name: `category`,
        node,
        value,
      })
      createNodeField({
        name: `haspdf`,
        node,
        value: "y",
      })
    } else {
      const value = node.frontmatter.category
      createNodeField({
        name: `category`,
        node,
        value,
      })
      createNodeField({
        name: `haspdf`,
        node,
        value: "n",
      })
    }
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
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      github: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      category: String
    }

    type Fields {
      slug: String
      category: String
      haspdf: String
    }
  `)
}
