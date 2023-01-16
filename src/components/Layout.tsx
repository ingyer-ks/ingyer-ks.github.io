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
      <div className="w-full md:w-1/3 relative">
        <div className="md:h-full p-8 flex flex-col justify-center bg-skin-base">
          <Bio />
        </div>
      </div>
    )
  } else {
    header = <Header />
  }

  return (
    <div
      className={`relative antialiased flex flex-col ${
        isRootPath ? "md:h-screen md:flex-row overflow-hidden" : ""
      } selection:bg-yellow-200 selection:text-black`}
    >
      {header}
      <main className="flex-1 px-8 lg:px-24 py-8 md:py-3 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

export default Layout
