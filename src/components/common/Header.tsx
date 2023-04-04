import React, { Fragment } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Popover, Transition } from "@headlessui/react"
import { HomeIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { EmptyProps } from "@/definitions"

const Header: React.FC<EmptyProps> = () => {
  return (
    <Popover className="sticky top-0 z-10 bg-skin-header fixed backdrop-blur-md backdrop-saturate-150 bg-opacity-70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="flex justify-between items-center md:justify-start md:space-x-10"
          style={{ height: "50px" }}
        >
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              to="/"
              className="rounded-md text-skin-header-fg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
            >
              <span className="sr-only">Home</span>
              <HomeIcon className="h-8 w-auto" />
            </Link>
          </div>

          <div className="md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8">
            <Link
              to={`/etc/`}
              itemProp="url"
              className="whitespace-nowrap text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-skin-focus"
            >
              기타 글
            </Link>
            <Link
              to={`/year/`}
              itemProp="url"
              className="whitespace-nowrap text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-skin-focus"
            >
              연도별
            </Link>
            <Link
              to={`/subject/`}
              itemProp="url"
              className="whitespace-nowrap text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-skin-focus"
            >
              과목별
            </Link>
            <Link
              to={`/org/`}
              itemProp="url"
              className="whitespace-nowrap text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-skin-focus"
            >
              기관별
            </Link>
            <Link
              to={`/level/`}
              itemProp="url"
              className="whitespace-nowrap text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-skin-focus"
            >
              급수별
            </Link>
          </div>
        </div>
      </div>
    </Popover>
  )
}

export default Header
