const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

exports.onCreateWebpackConfig = ({ loaders, actions }) => {
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
              frontmatter {
                title
                description
                tags
                date
                type
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
  }

  const tags = {}
  if (posts.length > 0) {
    posts.filter(({ node }) => node.frontmatter.tags).forEach(({ node }) => {
      const tagsList = node.frontmatter.tags
          .split(",")
          .map(tag => tag.trim())
          .filter(tag => tag.length > 0)

      tagsList.forEach(tag => {
          if (!tags[tag]) {
            tags[tag] = []
          }
          tags[tag].push(node.slug)
      })
  })

  Object.keys(tags).forEach(tag => {
      createPage({
          path: `/tags/${tag}`,
          component: path.resolve(`./src/templates/tag.tsx`),
          context: {
              tag,
          }
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
      tags: String
      date: Date @dateformat
      type: String
    }

    type Fields {
      slug: String
    }
  `)
}
