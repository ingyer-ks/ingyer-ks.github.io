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
    const categoryList: string[] = []
    post.node.fields.category
      .split(",")
      .map((category: string) => category.trim())
      .filter((category: string) => category.length > 0)
      .map(category => categoryList.push(category))
    if (categoryList.includes(pageContext.category)) {
      nodeList.push(post.node)
    }
  })
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`${pageContext.category}`} />
      <div>
        <h1 style={{ fontSize: "3em", margin: "auto auto auto 20vw" }}>#{pageContext.category}</h1>
        <ul>
          {nodeList.map(node => {
            return (
              <li style={{ margin: "auto auto auto 20vw" }}>
                <Link to={`/` + node.slug}>{node.frontmatter.title}</Link>
              </li>
            )
          })}
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
      limit: 2000
    ) {
      edges {
        node {
          slug
          frontmatter {
            title
          }
          fields{
            category
          }
        }
      }
    }
  }
`
