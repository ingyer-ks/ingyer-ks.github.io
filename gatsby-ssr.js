import React from "react"
import { wrapRootElement as wrap } from "./wrapRootElement"


const HeadComponents = [
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9535714360512834"
       crossorigin="anonymous"></script>,
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
  ]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents)
}


export const wrapPageElement = wrap
