import * as React from "react"
import { Link, graphql } from "gatsby"

import { Seo } from "@/components/common"
import Layout from "@/components/Layout"
import { PageProps } from "@/definitions"

const BlogIndex: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const levelList: string[] = []
  data.allMdx.edges.map(post => {
    levelList.push(post.node.frontmatter.level)
  })
  const resources = [...new Set(levelList)]
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="급수별" />
      <article itemScope itemType="http://schema.org/Article">
        총 {resources.length - 1}개의 항목이 있습니다. 아래로 스크롤해보세요.
        <div
          id="TableDiv"
          className="grid"
          style={{
            gridAutoFlow: "column",
            overflow: "auto",
            height: "calc(100vh - 200px)",
            marginTop: "3vh",
          }}
        >
          {resources.map(item => (
            <div className="Item">
              <Link
                to={`/level/` + item}
                itemProp="url"
                className="rounded-md focus:outline-none focus:ring-4 focus:ring-skin-focus"
              >
                <span itemProp="headline" style={{ fontSize: "2em" }}>
                  {item}
                </span>
              </Link>
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
    allMdx(sort: { fields: frontmatter___title, order: DESC }) {
      edges {
        node {
          frontmatter {
            level
            title
          }
        }
      }
    }
  }
`
