import * as React from "react"
import { Link, graphql } from "gatsby"

import { Seo } from "@/components/common"
import Layout from "@/components/Layout"
import { PageProps } from "@/definitions"

const BlogIndex: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const yearList: string[] = []
  data.allMdx.edges.map(post => {
    yearList.push(post.node.frontmatter.year)
  })
  const resources = [...new Set(yearList)]
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="연도별" />
      <article itemScope itemType="http://schema.org/Article">
        <div id="TableDiv" className="grid">
          {resources.map(item => (
            <div className="Item">
              <h2 style={{ fontSize: "2em" }}>
                <Link
                  to={`/year/` + item}
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
    allMdx {
      edges {
        node {
          frontmatter {
            year
            title
          }
        }
      }
    }
  }
`
