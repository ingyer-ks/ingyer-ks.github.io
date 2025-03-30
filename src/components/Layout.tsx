import React, { ReactNode } from "react"
import { Location } from "history"

import { Header, Bio } from "./common"

import "@fontsource/noto-sans-kr"

import { useMediaQuery } from "react-responsive"

interface LayoutProps {
  location: Location
  title: string
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 768px)",
  })

  if (isRootPath) {
    header = <Bio />

    return (
      <div id="rootLayout">
        <div>{header}</div>
        <div>
          <main>{children}</main>
        </div>
      </div>
    )
  } else {
    header = <Header />
    return (
      <div>
        <div
          className={`relative antialiased flex flex-col selection:bg-yellow-200 selection:text-black`}
        >
          {header}
          <main className="flex-1 px-1 lg:px-24 py-1 md:py-3">{children}</main>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          문의: ingyer.ks@gmail.com /{" "}
          <a href="https://open.kakao.com/o/gVtHzPsc">카카오톡 채팅방</a>
          {!isSmallScreen && "https://open.kakao.com/o/gVtHzPsc"}
        </div>
      </div>
    )
  }
}

export default Layout
