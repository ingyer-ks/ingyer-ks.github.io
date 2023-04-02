import * as React from "react"
import { Link, graphql } from "gatsby"

import { Seo } from "@/components/common"
import Layout from "@/components/Layout"
import { PageProps } from "@/definitions"

const BlogIndex: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const categoryList: string[] = []
  data.allMdx.edges.map(post => {
    post.node.fields.category
      .split(",")
      .map((category: string) => category.trim())
      .filter((category: string) => category.length > 0)
      .map(category => categoryList.push(category))
  })
  const resources = [...new Set(categoryList)]
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All categories" />
      <article itemScope itemType="http://schema.org/Article">
        <div id="categoryTableDiv" className="grid">
          {resources.map(item => (
            <div className="categoryItem">
              <h2 style={{ fontSize: "2em" }}>
                <Link
                  to={`/categories/` + item}
                  itemProp="url"
                  className="rounded-md focus:outline-none focus:ring-4 focus:ring-skin-focus"
                >
                  <span itemProp="headline">{item}</span>
                </Link>
              </h2>
            </div>
          ))}
        </div>
      </article>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            category
          }
        }
      }
    }
  }
`
