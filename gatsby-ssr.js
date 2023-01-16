import React from "react"
import { wrapRootElement as wrap } from "./wrapRootElement"

function setTheme() {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("blog-theme")

    let selectedTheme
    if (typeof theme === "string") {
      selectedTheme = theme
    } else {
      selectedTheme = "dark"
    }

    if (selectedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }
}

const ScriptTag = () => {
  const boundFn = String(setTheme)

  let calledFunction = `(${boundFn})()`

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

const HeadComponents = [
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9535714360512834"
       crossorigin="anonymous"></script>,
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
  ]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents(HeadComponents)
  setPreBodyComponents(<ScriptTag />)
}


export const wrapPageElement = wrap
