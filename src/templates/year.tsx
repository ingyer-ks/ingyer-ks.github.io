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
    const yearList: string[] = []
    yearList.push(post.node.frontmatter.year)
    if (yearList.includes(pageContext.year)) {
      nodeList.push(post.node)
    }
  })
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`${pageContext.year}`} />
      <div>
        <h1>{pageContext.year}</h1>
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
  query YearPages {
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
            year
          }
        }
      }
    }
  }
`
