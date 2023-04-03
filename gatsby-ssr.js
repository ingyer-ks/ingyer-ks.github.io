import React from "react"
import { wrapRootElement as wrap } from "./wrapRootElement"
import Script from "gatsby"

const HeadComponents = [
  <><link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
    integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
    crossOrigin="anonymous"
  ></link>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9535714360512834"
      crossOrigin="anonymous"></script><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>

    <Script type="text/javascript">
      {`
      (function(c,l,a,r,i,t,y){
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "gct6axljb9");
      `}
    </Script>
  </>
]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents)
}


export const wrapPageElement = wrap