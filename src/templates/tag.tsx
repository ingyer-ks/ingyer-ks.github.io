import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { Seo } from "../components/common"
import { INode, TagPageProps } from "@/definitions"

const TagPageTemplate: React.FC<TagPageProps> = ({
  data,
  pageContext,
  location
}) => {
  const posts = data.allMdx.edges
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const nodeList: INode[] = []
  posts.map((post) => {
    const tagsList: string[] = []
    post.node.frontmatter.tags
      .split(",")
      .map((tag: string) => tag.trim())
      .filter((tag: string) => tag.length > 0)
      .map(tag => tagsList.push(tag))
    if (tagsList.includes(pageContext.tag)) {
      nodeList.push(post.node)
    }
  })
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`#${pageContext.tag}`} />
      <div>
        <h1>#{pageContext.tag}</h1>
        <ul>
          <li>
            {nodeList.map(node => {
                return(<Link to={`/`+node.slug}>{node.frontmatter.title}</Link>)}
            )}
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default TagPageTemplate

export const pageQuery = graphql`
  query TagPages{
    site {
        siteMetadata {
          title
        }
      }
    allMdx(
      sort: { fields: [frontmatter___date], order: ASC }
      limit: 2000
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
          }
          slug
        }
      }
    }
  }
`
