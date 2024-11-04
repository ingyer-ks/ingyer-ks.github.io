/* eslint-disable no-inner-declarations */
import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Disqus } from "gatsby-plugin-disqus"

import Layout from "../components/Layout"
import { Seo } from "../components/common"
import { PageProps } from "@/definitions"

import { useMediaQuery } from "react-responsive"

import * as key from "./key"

const BlogPostTemplate: React.FC<PageProps> = ({ data, location }) => {
  const [clientID, setClientID] = React.useState(null)
  React.useEffect(() => {
    if (typeof document !== `undefined`) {
      setClientID(
        document.location.hostname === `localhost`
          ? key.localhost_key
          : key.ingyerlog_key
      )
    }
  })

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  })

  const [viewerjsLoading, setViewerjsLoadingState] = React.useState(true)

  const [problemsVisible, setProblemsVisibility] = React.useState(
    isSmallScreen ? 0 : 1
  )
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

  function PDFViewer() {
    React.useEffect(() => {
      let script = document.querySelector(
        `script[src="https://documentservices.adobe.com/view-sdk/viewer.js"]`
      )
      if (typeof document !== `undefined` && !clientID) {
        document.addEventListener("adobe_dc_view_sdk.ready", function () {
          const adobeDCView = new AdobeDC.View({
            clientId:
              document.location.hostname === `localhost`
                ? "fc828db7b0e54b139ef252cef009b8d7"
                : "106805b155844ee0be6a8540f507ee25",
            divId: "ProblemDiv",
          })

          const previewConfig = {
            embedMode: "FULL_WINDOW",
            showPrintPDF: true,
            showDownloadPDF: true,
            showZoomControl: true,
            showAnnotationTools: true,
            enableAnnotationAPIs: true,
          }

          adobeDCView.previewFile({
            content: {
              location: { url: "../problems/" + encodeURI(title) + ".pdf" },
            },
            metaData: {
              fileName: title + ".pdf",
              id: (() => {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                  /[xy]/g,
                  function (c) {
                    const r = (Math.random() * 16) | 0,
                      v = c == "x" ? r : (r & 0x3) | 0x8
                    return v.toString(16)
                  }
                )
              })(),
            },
            previewConfig,
          })
        })
      }
      if (!script) {
        script = document.createElement("script")
        script.src = "https://documentservices.adobe.com/view-sdk/viewer.js"
        script.async = true
        document.head.appendChild(script)
      }

      const viewerjsLoaded = () => setViewerjsLoadingState(false)
      script.addEventListener("load", viewerjsLoaded)
      return () => script.removeEventListener("load", viewerjsLoaded)
    }, [])
    if (viewerjsLoading)
      return (
        <p>
          문제지 PDF 파일을 로드하고 있습니다. 한참 걸릴 수도 있어요 ㅠㅠ 30초
          이상 걸리면 새로고침을 한번 해보세요.
        </p>
      )
  }

  type Props = {
    siteUrl: string
    path: string
    title: string
  }

  const Comment = ({ siteUrl, path, title }: Props) => {
    const config = {
      url: `${siteUrl}${path}`, // 페이지 주소
      identifier: path, // 페이지의 유니크한 값
      title, // 페이지 제목
    }
    return <Disqus config={config} />
  }

  if (post.fields.haspdf === "y") {
    React.useEffect(() => {
      if (
        document.querySelector(
          `script[src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"]`
        )
      )
        return
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
          document.getElementById("ExplanationDiv").style.margin = "auto"
          if (problemsVisible) {
            document.getElementById("ExplanationDiv").className = "col-start-2"
            document.getElementById("ExplanationDiv").style.maxWidth = "100%"
          } else {
            document.getElementById("ExplanationDiv").className = "col-start-1"
            document.getElementById("ExplanationDiv").style.width = "1000px"
            document.getElementById("ExplanationDiv").style.maxWidth = "80vw"
          }
        }
      } else {
        if (document.getElementById("ExplanationDiv")) {
          document.getElementById("ExplanationDiv").style.display = "none"
        }
      }
    })

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
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="both"
                  id="ProbAndExplanationButton"
                  onClick={showBoth}
                >
                  문제&해설
                </button>

                <button
                  className="problemonly"
                  id="ProbOnlyButton"
                  onClick={showOnlyProblems}
                >
                  문제
                </button>

                <button
                  id="ExplanationOnlyButton"
                  onClick={showOnlyExplanations}
                >
                  해설
                </button>
              </div>

              <div id="content">
                <div id="ProblemDiv">{PDFViewer()}</div>
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
        <Comment
          siteUrl={document.location.href}
          path={encodeURI(title)}
          title={title}
        />
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
            <div style={{ overflow: "hidden" }}>
              <div id="content" style={{ overflow: "auto" }}>
                <h1
                  className="font-NotoSansKR text-skin-fg text-4xl md:text-4xl"
                  itemProp="headline"
                >
                  {title}
                </h1>
                <div
                  style={{
                    wordBreak: "break-word",
                  }}
                >
                  <MDXRenderer>{post.body}</MDXRenderer>
                </div>
              </div>
            </div>
          </section>
        </article>
        <Comment
          siteUrl={document.location.href}
          path={encodeURI(title)}
          title={title}
        />
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
        year
        description
        etc
        organization
        level
        subject
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
