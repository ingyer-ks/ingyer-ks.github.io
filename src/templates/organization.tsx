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
    const orgList: string[] = []
    orgList.push(post.node.frontmatter.organization)
    if (orgList.includes(pageContext.organization)) {
      nodeList.push(post.node)
    }
  })
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`${pageContext.year}`} />
      <div>
        <h1>{pageContext.organization}</h1>
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
  query OrgPages {
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
            organization
          }
        }
      }
    }
  }
`