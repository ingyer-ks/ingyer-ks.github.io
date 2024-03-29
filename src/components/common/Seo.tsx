/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { ISite } from "@/definitions"

type MetaProps = JSX.IntrinsicElements["meta"]

const Seo: React.FC<SEOProps> = ({ description, lang, meta, title }) => {
  const { site }: { site: ISite } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  const metaProps: MetaProps[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={metaProps.concat(meta || [])}
    ></Helmet>
  )
}

interface SEOProps {
  description?: string
  lang?: string
  title: string
  meta?: MetaProps[]
}

Seo.defaultProps = {
  lang: `ko`,
  meta: [],
  description: ``,
}

export default Seo
