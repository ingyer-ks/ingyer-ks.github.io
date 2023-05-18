import React from "react"
import { wrapRootElement as wrap } from "./wrapRootElement"
import "@fontsource/noto-sans-kr"

const HeadComponents = [
  <><link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
    integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
    crossOrigin="anonymous"
  ></link>
  </>
]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents)
}

export const wrapPageElement = wrap