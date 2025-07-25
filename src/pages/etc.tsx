import * as React from "react"
import { Link, graphql } from "gatsby"

import { Seo } from "@/components/common"
import Layout from "@/components/Layout"
import { PageProps } from "@/definitions"

const BlogIndex: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const etcList: string[] = []
  data.allMdx.edges.map(post => {
    etcList.push(post.node.frontmatter.etc)
  })
  const resources = [...new Set(etcList)]
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="기타 글" />
      <article itemScope itemType="http://schema.org/Article">
        총 {resources.length - 1}개의 항목이 있습니다. 아래로 스크롤해보세요.
        <div
          id="TableDiv"
          className="grid"
          style={{
            overflow: "auto",
            height: "calc(100vh - 250px)",
            marginTop: "3vh",
          }}
        >
          {resources.map(item => (
            <div className="Item">
              <Link
                to={`/etc/` + item}
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
            etc
            title
          }
        }
      }
    }
  }
`
