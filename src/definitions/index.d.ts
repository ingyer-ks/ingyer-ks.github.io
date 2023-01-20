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
    category: string
    slugs: [string]
    titles: [string]
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
    social: {
      github: string
    }
  }
}

interface IEdge {
  node: INode
}

interface INode {
  excerpt: string
  body: string
  fields: {
    slug: string
  }
  frontmatter: {
    date: string
    title: string
    category: string
    description: string
  }
}

declare module "@pdftron/pdfjs-express-viewer" {}
