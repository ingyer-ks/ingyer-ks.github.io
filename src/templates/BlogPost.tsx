import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import { Seo } from "../components/common"
import { PageProps } from "@/definitions"

import { Document, Page, pdfjs } from "react-pdf"

const BlogPostTemplate: React.FC<PageProps> = ({ data, location }) => {
  const [numPages, setNumPages] = React.useState(null)
  const [pageNumber, setPageNumber] = React.useState(1)
  const [scale, setScale] = React.useState(1)

  const [problemsVisible, setProblemsVisiblity] = React.useState(1)
  const [explanationsVisible, setExplanationsVisiblity] = React.useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1)

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1)

  const scaleUp = () => {
    setScale(scale + 0.1)
  }

  const scaleDown = () => {
    setScale(scale - 0.15)
  }

  const showBoth = () => {
    setProblemsVisiblity(1)
    setExplanationsVisiblity(1)
  }

  const showOnlyProblems = () => {
    setProblemsVisiblity(1)
    setExplanationsVisiblity(0)
  }

  const showOnlyExplanations = () => {
    setProblemsVisiblity(0)
    setExplanationsVisiblity(1)
  }

  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  if (post.fields.haspdf === "y") {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
    return (
      <Layout location={location} title={siteTitle}>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article itemScope itemType="http://schema.org/Article">
          <section itemProp="articleBody">
            <div style={{ height: "100%", width: "70vw", margin: "auto", minWidth: "400px" }}>
              <div id="top">
                <h1 className="font-NotoSansKR" style={{ fontSize: "2em" }}>
                  {post.frontmatter.title}
                </h1>
                <p className="font-NotoSansKR text-skin-fg text-xl">
                  {post.frontmatter.date}
                </p>
                <div className="grid gird-cols-3" style={{ width: "31vw", minWidth: "200px" }}>
                  <div className="col-start-1">
                    <button onClick={showBoth}>문제&해설</button>
                  </div>
                  <div className="col-start-2">
                    <button onClick={showOnlyProblems}>문제만</button>
                  </div>
                  <div className="col-start-3">
                    <button onClick={showOnlyExplanations}>해설만</button>
                  </div>
                </div>
                <nav>
                  <div
                    className="grid grid-cols-4"
                    style={{ width: "31vw", minWidth: "200px" }}
                  >
                    <div>
                      <button onClick={goToPrevPage}>이전</button>
                    </div>
                    <div>
                      <button onClick={goToNextPage}>다음</button>
                    </div>
                    <div>
                      <button onClick={scaleUp}>확대</button>
                    </div>
                    <div>
                      <button onClick={scaleDown}>축소</button>
                    </div>
                  </div>
                </nav>
              </div>

              <div id="bottom">
                <div className={"grid grid-cols-" + (problemsVisible + explanationsVisible)} id="row" style={{ width: "70vw" }}>
                  {problemsVisible ? (<div className="col-start-1" id="col" style={{ overflow: "hidden", width: explanationsVisible ? "31vw" : "70vw" }}>
                    <div id="col" style={{ overflow: "auto" }}>
                      <Document
                        file={
                          "../problems/" +
                          encodeURI(post.frontmatter.title) +
                          ".pdf"
                        }
                        onLoadSuccess={onDocumentLoadSuccess}
                      >
                        <Page
                          pageNumber={pageNumber}
                          renderTextLayer={false}
                          scale={scale}
                          renderAnnotationLayer={false}
                        ></Page>
                      </Document>
                    </div>
                  </div>) : null}
                  {explanationsVisible ? (<div className={"col-start-" + (problemsVisible + explanationsVisible)} id="col" style={{ overflow: "hidden", marginLeft: explanationsVisible ? "0" : "50px", width: problemsVisible ? "31vw" : "70vw" }}>
                    <div id="col"
                      style={{ overflow: "scroll", wordWrap: "break-word", width: problemsVisible ? "31vw" : "70vw" }}
                    >
                      <MDXRenderer>{post.body}</MDXRenderer>
                    </div>
                  </div>) : null}
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
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article itemScope itemType="http://schema.org/Article">
          <section itemProp="articleBody">
            <div style={{ width: "70vw", minWidth: "400px", margin: "auto", height: "93vh" }}>
              <h1
                className="font-NotoSansKR text-skin-fg text-4xl md:text-4xl"
                itemProp="headline"
              >
                {post.frontmatter.title}
              </h1>
              <p
                className="font-NotoSansKR text-skin-fg text-xl"
                style={{ margin: "auto auto 20px auto" }}
              >
                {post.frontmatter.date}
              </p>
              <div style={{ overflow: "auto", width: "70vw", wordWrap: "break-word" }}>
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
