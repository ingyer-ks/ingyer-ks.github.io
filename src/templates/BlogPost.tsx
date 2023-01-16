import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import { Seo } from "../components/common"
import { PageProps } from "@/definitions"

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const BlogPostTemplate: React.FC<PageProps> = ({ data, location }) => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(
      pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
    );



  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <section itemProp="articleBody">
          <div className="grid grid-cols-2">
            <div className="fixed">
              <h1
                className="font-NotoSansKR text-skin-fg text-4xl md:text-4xl"
                itemProp="headline">
                {post.frontmatter.title}
              </h1>
              <p className="font-NotoSansKR text-skin-fg text-xl">
                {post.frontmatter.date}
              </p>
              <nav>
                <button onClick={goToPrevPage}>이전 페이지</button>&emsp;&emsp;&emsp;
                <button onClick={goToNextPage}>다음 페이지</button>
              </nav>
              <Document file={"../problems/" + encodeURI(post.frontmatter.title) + ".pdf"} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} renderTextLayer={false} height={1100} />
              </Document>
            </div>
            <div className="col-start-2 answers prose-xl">
              <div className="grid grid-row-2 position-relative">
                <div className="position-relative">
                  <div className="row-start-1"></div>
                  <div className="row-start-2">
                    <div className="h-100 mw-50">
                      <MDXRenderer>{post.body}</MDXRenderer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article >
    </Layout >
  )
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
        date(formatString: "YYYY-MM-DD")
        tags
        description
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
