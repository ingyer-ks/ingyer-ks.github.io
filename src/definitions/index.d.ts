import { Location } from "history"

export interface ButtonProps {
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  href?: string
  label?: string
  isLarge?: boolean
}

interface EmptyProps {}

interface TagHeaderProps {
  data: {
    allMdx: {
      edges: IEdge[]
    }
  }
}

interface PageProps {
  data: {
    mdx: INode
    previous: INode
    next: INode
    allMdx: {
      edges: IEdge[]
    }
    site: ISite
  }
  location: Location
}

interface TagPageProps {
  data: {
    allMdx: {
      edges: IEdge[]
    }
    site: ISite
  }
  pageContext: {
    title: ReactNode
    etc: string
    slugs: [string]
    year: string
    organization: string
    level: string
    subject: string
  }
  location: Location
}

interface ISite {
  siteMetadata: {
    title: string
    description: string
    author: {
      name: string
      summary: string
    }
  }
}

interface IEdge {
  node: INode
}

interface INode {
  slug: string
  excerpt: string
  body: string
  fields: {
    haspdf: string
  }
  frontmatter: {
    year: string
    title: string
    etc: string
    description: string
    organization: string
    level: string
    subject: string
  }
}
