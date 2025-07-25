import React from "react"
import { wrapRootElement as wrap } from "./wrapRootElement"
import "@fontsource/noto-sans-kr"

const HeadComponents = [
  <>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
      integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
      crossOrigin="anonymous"
    ></link>
    <link rel="favicon" href="./favicon.ico"></link>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9535714360512834"
      crossOrigin="anonymous"
    ></script>
    <script
      async
      src="https://cse.google.com/cse.js?cx=b4ea278afb57b4ea1"
      defer={true}
    ></script>
  </>,
]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents)
}

export const wrapPageElement = wrap
