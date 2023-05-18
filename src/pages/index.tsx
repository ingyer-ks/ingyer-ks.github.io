import * as React from "react"
import { Link, graphql } from "gatsby"

import { Seo } from "@/components/common"
import Layout from "@/components/Layout"
import { PageProps } from "@/definitions"

import "@fontsource/noto-sans-kr"

const BlogIndex: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = "Ingyerog v2"
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <article itemScope itemType="http://schema.org/Article">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9535714360512834"
          crossOrigin="anonymous"
        ></script>
        <div id="kindTableDiv" className="grid">
          <div className="kindItem">
            <h2 style={{ fontSize: "2em" }}>
              <Link
                to={`/etc/`}
                itemProp="url"
                className="rounded-md focus:outline-none focus:ring-4 focus:ring-skin-focus"
              >
                <span itemProp="headline">기타 글</span>
              </Link>
            </h2>
            <h2 style={{ fontSize: "2em" }}>
              <Link
                to={`/year/`}
                itemProp="url"
                className="rounded-md focus:outline-none focus:ring-4 focus:ring-skin-focus"
              >
                <span itemProp="headline">연도별</span>
              </Link>
            </h2>
            <h2 style={{ fontSize: "2em" }}>
              <Link
                to={`/subject/`}
                itemProp="url"
                className="rounded-md focus:outline-none focus:ring-4 focus:ring-skin-focus"
              >
                <span itemProp="headline">과목별</span>
              </Link>
            </h2>
            <h2 style={{ fontSize: "2em" }}>
              <Link
                to={`/org/`}
                itemProp="url"
                className="rounded-md focus:outline-none focus:ring-4 focus:ring-skin-focus"
              >
                <span itemProp="headline">기관별</span>
              </Link>
            </h2>
            <h2 style={{ fontSize: "2em" }}>
              <Link
                to={`/level/`}
                itemProp="url"
                className="rounded-md focus:outline-none focus:ring-4 focus:ring-skin-focus"
              >
                <span itemProp="headline">급수별</span>
              </Link>
            </h2>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default BlogIndex
