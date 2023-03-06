import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "."
import { EmptyProps, ISite } from "@/definitions"

const Bio: React.FC<EmptyProps> = () => {
  const data: { site: ISite } = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <>
      <div className="flex items-center space-x-3">
        <StaticImage
          className="rounded-full overflow-hidden"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../../images/profile-pic.png"
          width={50}
          height={50}
          quality={95}
          imgStyle={{ borderRadius: "100%" }}
          alt="Profile picture"
        />
        <div>
          <h3 className="font-bold tracking-wide">{author.name}</h3>
          <div className="pt-2 flex space-x-4">
          </div>
        </div>
      </div>
      <p className="mt-5 text-lg text-skin-fg">{author.summary}</p>
    </>
  )
}

export default Bio