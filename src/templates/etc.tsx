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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9535714360512834"
          crossOrigin="anonymous"
        ></script>
        <h1>{pageContext.etc}</h1>
        <div className="grid" style={{ gridAutoFlow: "column" }}></div>
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
    allMdx(limit: 2000) {
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
