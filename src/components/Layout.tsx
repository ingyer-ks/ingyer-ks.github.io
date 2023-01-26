import React, { ReactNode } from "react"
import { Location } from "history"

import { Header, Bio } from "./common"

interface LayoutProps {
  location: Location
  title: string
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Bio />
    )

    return (
      <div>
        <div style={{ margin: "3vh auto auto 20vw" }}>
          {header}
        </div>
        <div style={{ margin: "5vh auto auto 20vw" }}>
          <main>
            {children}
          </main>
        </div>
      </div>
    )
  } else {
    header = <Header />
    return (
      <div
        className={`relative antialiased flex flex-col selection:bg-yellow-200 selection:text-black`} style={{height:"100vh", overflow:"hidden"}}
      >
        {header}
        <main className="flex-1 px-8 lg:px-24 py-8 md:py-3 overflow-hidden">
          {children}
        </main>
      </div>

    )
  }
}

export default Layout
