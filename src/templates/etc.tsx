import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { Seo } from "../components/common"
import { INode, TagPageProps } from "@/definitions"

const TagPageTemplate: React.FC<TagPageProps> = ({
  data,
  pageContext,
  location,
}) => {
  const posts = data.allMdx.edges
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const nodeList: INode[] = []
  posts.map(post => {
    const etcList: string[] = []
    etcList.push(post.node.frontmatter.etc)
    if (etcList.includes(pageContext.etc)) {
      nodeList.push(post.node)
    }
  })
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`${pageContext.etc}`} />
      <div>
        <h1 hidden>{pageContext.etc}</h1>총 {nodeList.length}개의 글이 있습니다.
        아래로 스크롤해보세요.
        <div
          className="grid"
          style={{
            gridAutoFlow: "column",
            overflow: "auto",
            height: "calc(100vh - 200px)",
            marginTop: "3vh",
          }}
        >
          <div>
            <ul>
              {nodeList.map(node => {
                return (
                  <li
                    style={{
                      fontSize: "1.5em",
                      listStyle: "none",
                    }}
                  >
                    <Link to={`/` + node.slug}>{node.frontmatter.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TagPageTemplate

export const pageQuery = graphql`
  query EtcPages {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: frontmatter___title, order: DESC }) {
      edges {
        node {
          slug
          frontmatter {
            title
            etc
          }
        }
      }
    }
  }
`
