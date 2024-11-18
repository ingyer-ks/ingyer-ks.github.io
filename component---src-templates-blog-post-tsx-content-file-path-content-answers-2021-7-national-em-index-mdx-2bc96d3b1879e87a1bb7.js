"use strict";(self.webpackChunkgatsby_starter_tailwind_mdx_blog=self.webpackChunkgatsby_starter_tailwind_mdx_blog||[]).push([[8719],{5397:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var l=n(943),o=n(6540),a=n(9849),i=n(8453),d=n(4399),c=n(1744),r=n(6231),m=n(9821);const s=e=>{var t;let{data:n,location:l,children:s}=e;const[u,p]=o.useState(null);o.useEffect((()=>{setTimeout((()=>{"undefined"!=typeof document&&p("localhost"===document.location.hostname?m.g:m.J)}),500)}));const E=(0,r.Ub)({query:"(max-width: 768px)"}),[x,y]=o.useState(!0),[f,h]=o.useState(E?0:1),[v,g]=o.useState(1),b=()=>{h(1),g(1)},w=()=>{h(1),g(0)},B=()=>{h(0),g(1)},D=n.mdx,I=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",k=D.frontmatter.title;const P=e=>{let{url:t,path:n,title:l}=e;const i={url:`${t}`,identifier:n,title:l};return o.createElement(a.E8,{config:i})};return"y"===D.fields.haspdf?(o.useEffect((()=>{if(document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"]'))return;const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",document.head.appendChild(e)})),o.useEffect((()=>{document.getElementById("content")&&(f+v===2?(document.getElementById("content").className="grid grid-cols-2",document.getElementById("content").style.gridTemplateColumns="50% 50%"):(document.getElementById("content").className="grid grid-cols-1",document.getElementById("content").style.gridTemplateColumns="100%")),document.getElementById("ProblemDiv")&&document.getElementById("ExplanationDiv")&&(document.getElementById("ProblemDiv").className=1===f?"col-start-1":"",document.getElementById("ExplanationDiv").className="col-start-"+(f+v)),f?document.getElementById("ProblemDiv")&&(document.getElementById("ProblemDiv").style.display="block"):document.getElementById("ProblemDiv").style.display="none",v?document.getElementById("ExplanationDiv")&&(document.getElementById("ExplanationDiv").style.display="block",document.getElementById("ExplanationDiv").style.margin="auto",f?(document.getElementById("ExplanationDiv").className="col-start-2",document.getElementById("ExplanationDiv").style.maxWidth="100%"):(document.getElementById("ExplanationDiv").className="col-start-1",document.getElementById("ExplanationDiv").style.width="1000px",document.getElementById("ExplanationDiv").style.maxWidth="80vw")):document.getElementById("ExplanationDiv")&&(document.getElementById("ExplanationDiv").style.display="none")})),o.createElement(d.A,{location:l,title:I},o.createElement(c.G$,{title:k,description:D.frontmatter.description||D.excerpt}),o.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("section",{itemProp:"articleBody"},o.createElement("div",{style:{width:"80vw",margin:"auto"}},o.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.createElement("button",{className:"both",id:"ProbAndExplanationButton",onClick:b},"문제&해설"),o.createElement("button",{className:"problemonly",id:"ProbOnlyButton",onClick:w},"문제"),o.createElement("button",{id:"ExplanationOnlyButton",onClick:B},"해설")),o.createElement("div",{id:"content"},o.createElement("div",{id:"ProblemDiv"},function(){if(o.useEffect((()=>{if(u){let e=document.createElement("script");e.src="https://documentservices.adobe.com/view-sdk/viewer.js",e.async=!0,document.head.appendChild(e);const t=()=>y(!1);return e.addEventListener("load",t),"undefined"!=typeof document&&document.addEventListener("adobe_dc_view_sdk.ready",(function(){window.adobe_dc_sdk["dc-core-loaded"]=!1,new AdobeDC.View({clientId:u,divId:"ProblemDiv"}).previewFile({content:{location:{url:"../problems/"+encodeURI(k)+".pdf"}},metaData:{fileName:k+".pdf",id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))},previewConfig:{embedMode:"FULL_WINDOW",showPrintPDF:!0,showDownloadPDF:!0,showZoomControl:!0,showAnnotationTools:!0,enableAnnotationAPIs:!0}})})),()=>e.removeEventListener("load",t)}}),[u]),x)return o.createElement("p",null,"문제지 PDF 파일을 로드하고 있습니다. 한참 걸릴 수도 있어요 ㅠㅠ 30초 이상 걸리면 새로고침을 한번 해보세요.")}()),o.createElement("div",{id:"ExplanationDiv",style:{overflow:"auto",wordWrap:"break-word",height:"inherit"}},o.createElement("h1",{className:"font-NotoSansKR",style:{fontSize:"2em"}},k),o.createElement(i.x,null,s)))))),o.createElement(P,{url:"https://ingyerlog.kr"+l.pathname,path:l.pathname,title:D.frontmatter.title}))):o.createElement(d.A,{location:l,title:I},o.createElement(c.G$,{title:k,description:D.frontmatter.description||D.excerpt}),o.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("section",{itemProp:"articleBody"},o.createElement("div",{style:{overflow:"hidden"}},o.createElement("div",{id:"content",style:{overflow:"auto"}},o.createElement("h1",{className:"font-NotoSansKR text-skin-fg text-4xl md:text-4xl",itemProp:"headline"},k),o.createElement("div",{style:{wordBreak:"break-word"}},o.createElement(i.x,null,s)))))),o.createElement(P,{url:"https://ingyerlog.kr"+l.pathname,path:l.pathname,title:D.frontmatter.title}))};function u(e){return o.createElement(s,e,o.createElement(l.A,e))}}}]);