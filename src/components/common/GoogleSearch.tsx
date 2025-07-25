// src/components/GoogleSearch.js
import React, { useEffect } from "react"

const GoogleSearch = () => {
  useEffect(() => {
    if (typeof window === "undefined") return

    const cx = "b4ea278afb57b4ea1" // 👈 여기에 본인의 CSE ID 입력

    // 1. Google CSE 렌더 함수
    const renderSearchBox = () => {
      if (window.google && window.google.search && window.google.search.cse) {
        window.google.search.cse.element.render({
          div: "gcse-searchbox",
          tag: "searchbox-only",
          attributes: {
            newWindow: true, // 새 탭에서 열기 (원하지 않으면 false)
          },
        })
      }
    }

    // 2. window.__gcse 초기화
    window.__gcse = {
      parsetags: "explicit",
      callback: renderSearchBox,
    }

    // 3. 스크립트 로드
    if (!document.getElementById("gcse-script")) {
      const script = document.createElement("script")
      script.id = "gcse-script"
      script.type = "text/javascript"
      script.async = true
      script.src = `https://cse.google.com/cse.js?cx=${cx}`
      script.onload = renderSearchBox // 혹시 callback이 안 되는 경우 대비
      document.body.appendChild(script)
    } else {
      // 이미 로딩된 경우 재렌더
      setTimeout(renderSearchBox, 300)
    }
  }, [])

  return <div id="gcse-searchbox" />
}

export default GoogleSearch
