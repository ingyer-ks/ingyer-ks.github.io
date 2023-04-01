import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import { Seo } from "../components/common"
import { PageProps } from "@/definitions"

const BlogPostTemplate: React.FC<PageProps> = ({ data, location }) => {
  const [problemsVisible, setProblemsVisibility] = React.useState(1)
  const [explanationsVisible, setExplanationsVisibility] = React.useState(1)

  const showBoth = () => {
    setProblemsVisibility(1)
    setExplanationsVisibility(1)
  }

  const showOnlyProblems = () => {
    setProblemsVisibility(1)
    setExplanationsVisibility(0)
  }

  const showOnlyExplanations = () => {
    setProblemsVisibility(0)
    setExplanationsVisibility(1)
  }

  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const title = post.frontmatter.title

  React.useEffect(() => {
    if (typeof document === `undefined`) {
      document.getElementById("ProblemDiv").text = "문제 PDF 로딩중입니다..."
    } else {
      const pdfembed = document.createElement("embed")
      pdfembed.src = "../problems/" + encodeURI(title) + ".pdf"
      pdfembed.type = "application/pdf"
      pdfembed.width = "100%"
      pdfembed.height = "100%"
      document.getElementById("ProblemDiv")?.appendChild(pdfembed)
    }
  })

  if (post.fields.haspdf === "y") {
    React.useEffect(() => {
      const html2pdfjs = document.createElement("script")
      html2pdfjs.src =
        "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
      document.head.appendChild(html2pdfjs)
    })

    React.useEffect(() => {
      if (document.getElementById("content")) {
        if (problemsVisible + explanationsVisible === 2) {
          document.getElementById("content").className = "grid grid-cols-2"
          document.getElementById("content").style.gridTemplateColumns =
            "50% 50%"
        } else {
          document.getElementById("content").className = "grid grid-cols-1"
          document.getElementById("content").style.gridTemplateColumns = "100%"
        }
      }

      if (
        document.getElementById("ProblemDiv") &&
        document.getElementById("ExplanationDiv")
      ) {
        document.getElementById("ProblemDiv").className =
          problemsVisible === 1 ? "col-start-1" : ""
        document.getElementById("ExplanationDiv").className =
          "col-start-" + (problemsVisible + explanationsVisible)
      }

      if (problemsVisible) {
        if (document.getElementById("ProblemDiv")) {
          document.getElementById("ProblemDiv").style.display = "block"
        }
      } else {
        document.getElementById("ProblemDiv").style.display = "none"
      }

      if (explanationsVisible) {
        if (document.getElementById("ExplanationDiv")) {
          document.getElementById("ExplanationDiv").style.display = "block"
          document.getElementById("ExplanationDiv").style.marginLeft =
            problemsVisible ? "50px" : "0"
          document.getElementById("ExplanationDiv").className =
            "col-start-" + (1 + problemsVisible)
        }
      } else {
        if (document.getElementById("ExplanationDiv")) {
          document.getElementById("ExplanationDiv").style.display = "none"
        }
      }
    })

    function downloadExplanation() {
      html2pdf(document.getElementById("ExplanationDiv"))
    }

    return (
      <Layout location={location} title={siteTitle}>
        <Seo
          title={title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article itemScope itemType="http://schema.org/Article">
          <section itemProp="articleBody">
            <div
              style={{
                width: "80vw",
                margin: "auto",
                minWidth: "400px",
              }}
            >
              <div>
                <div
                  className="grid grid-cols-4"
                  style={{ width: "50%", minWidth: "400px" }}
                >
                  <div className="col-start-1">
                    <button id="ProbAndExplanationButton" onClick={showBoth}>
                      문제&해설
                    </button>
                  </div>
                  <div className="col-start-2">
                    <button id="ProbOnlyButton" onClick={showOnlyProblems}>
                      문제만
                    </button>
                  </div>
                  <div className="col-start-3">
                    <button
                      id="ExplanationOnlyButton"
                      onClick={showOnlyExplanations}
                    >
                      해설만
                    </button>
                  </div>
                  <div className="col-start-4">
                    <button
                      id="DownloadExplanationButton"
                      onClick={downloadExplanation}
                    >
                      해설PDF다운
                    </button>
                  </div>
                </div>
              </div>

              <div id="content">
                <div id="ProblemDiv"></div>

                <div
                  id="ExplanationDiv"
                  style={{
                    overflow: "auto",
                    wordWrap: "break-word",
                    height: "inherit",
                  }}
                >
                  <h1 className="font-NotoSansKR" style={{ fontSize: "2em" }}>
                    {title}
                  </h1>
                  <MDXRenderer>{post.body}</MDXRenderer>
                </div>
              </div>
            </div>
          </section>
        </article>
      </Layout>
    )
  } else {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo
          title={title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article itemScope itemType="http://schema.org/Article">
          <section itemProp="articleBody">
            <div
              style={{
                width: "70vw",
                minWidth: "400px",
                margin: "auto",
                height: "93vh",
              }}
            >
              <h1
                className="font-NotoSansKR text-skin-fg text-4xl md:text-4xl"
                itemProp="headline"
              >
                {title}
              </h1>
              <div
                style={{
                  overflow: "auto",
                  width: "70vw",
                  wordBreak: "break-word",
                }}
              >
                <MDXRenderer>{post.body}</MDXRenderer>
              </div>
            </div>
          </section>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
      }
      fields {
        haspdf
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
