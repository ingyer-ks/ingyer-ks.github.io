"use strict";(self.webpackChunkgatsby_starter_tailwind_mdx_blog=self.webpackChunkgatsby_starter_tailwind_mdx_blog||[]).push([[4915],{9861:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var l=n(8453),o=n(6540);function a(e){const t=Object.assign({p:"p",a:"a",img:"img",h2:"h2",ul:"ul",li:"li"},(0,l.R)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.p,null,"각 문제들은 해당 문제를 출제한 기관이 저작권을 갖고 있습니다. 단, 공공데이터법에서는 공공기관에서 생산한 데이터를 이용하는 데에 특별한 사유가 있지 않은 한 제한하고 있지 않습니다."),"\n",o.createElement(t.p,null,"제가 만든 그림, 해설 내용 등은 ",o.createElement(t.a,{href:"http://creativecommons.org/licenses/by-sa/4.0/"},"크리에이티브 커먼즈 저작자표시-동일조건변경허락 4.0 국제 라이선스"),"에 따라 이용할 수 있습니다.\n",o.createElement(t.a,{href:"http://creativecommons.org/licenses/by-sa/4.0/"},o.createElement(t.img,{src:"https://i.creativecommons.org/l/by-sa/4.0/88x31.png",alt:"CC-BY-SA 4.0"}))),"\n",o.createElement(t.h2,null,"시험 문제별 출제기관 안내"),"\n",o.createElement(t.ul,null,"\n",o.createElement(t.li,null,"소방간부후보생 문제: 소방청 중앙소방학교(https://www.nfsa.go.kr/nfsa/#memorial) 및 소방청 119고시(https://www.119gosi.kr/)"),"\n",o.createElement(t.li,null,"국가직 및 지방직 7급, 9급 및 전직시험 문제: 인사혁신처 사이버국가고시센터(https://www.gosi.kr/)"),"\n",o.createElement(t.li,null,"국회 9급 문제: 국회사무처 국회채용시스템(https://gosi.assembly.go.kr/)"),"\n",o.createElement(t.li,null,"서울시 7급 및 9급 문제: 서울시 공무원원서접수센터(현재 웹페이지 없음)"),"\n",o.createElement(t.li,null,"경찰간부후보생 문제: 경찰청 인터넷 원서접수(https://public.jinhakapply.com/PoliceV2/main.aspx)"),"\n",o.createElement(t.li,null,"군무원 5급, 7급 및 9급 문제: 국방부 군무원채용관리(https://recruit.mnd.go.kr:470/recruit.do)"),"\n",o.createElement(t.li,null,"해양경찰청 문제: 해양경찰청 인터넷 원서접수(https://kcg.uwayapply.com/)"),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.R)(),e.components);return t?o.createElement(t,e,o.createElement(a,e)):a(e)},c=n(9849),r=n(4399),m=n(1744),d=n(6231),s=n(9821);const u=e=>{var t;let{data:n,location:a,children:i}=e;const[u,p]=o.useState(null);o.useEffect((()=>{setTimeout((()=>{"undefined"!=typeof document&&p("localhost"===document.location.hostname?s.g:s.J)}),500)}));const E=(0,d.Ub)({query:"(max-width: 768px)"}),[y,x]=o.useState(!0),[h,g]=o.useState(E?0:1),[f,v]=o.useState(1),b=()=>{g(1),v(1)},w=()=>{g(1),v(0)},B=()=>{g(0),v(1)},D=n.mdx,I=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",k=D.frontmatter.title;const P=e=>{let{url:t,path:n,title:l}=e;const a={url:`${t}`,identifier:n,title:l};return o.createElement(c.E8,{config:a})};return"y"===D.fields.haspdf?(o.useEffect((()=>{if(document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"]'))return;const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",document.head.appendChild(e)})),o.useEffect((()=>{document.getElementById("content")&&(h+f===2?(document.getElementById("content").className="grid grid-cols-2",document.getElementById("content").style.gridTemplateColumns="50% 50%"):(document.getElementById("content").className="grid grid-cols-1",document.getElementById("content").style.gridTemplateColumns="100%")),document.getElementById("ProblemDiv")&&document.getElementById("ExplanationDiv")&&(document.getElementById("ProblemDiv").className=1===h?"col-start-1":"",document.getElementById("ExplanationDiv").className="col-start-"+(h+f)),h?document.getElementById("ProblemDiv")&&(document.getElementById("ProblemDiv").style.display="block"):document.getElementById("ProblemDiv").style.display="none",f?document.getElementById("ExplanationDiv")&&(document.getElementById("ExplanationDiv").style.display="block",document.getElementById("ExplanationDiv").style.margin="auto",h?(document.getElementById("ExplanationDiv").className="col-start-2",document.getElementById("ExplanationDiv").style.maxWidth="100%"):(document.getElementById("ExplanationDiv").className="col-start-1",document.getElementById("ExplanationDiv").style.width="1000px",document.getElementById("ExplanationDiv").style.maxWidth="80vw")):document.getElementById("ExplanationDiv")&&(document.getElementById("ExplanationDiv").style.display="none")})),o.createElement(r.A,{location:a,title:I},o.createElement(m.G$,{title:k,description:D.frontmatter.description||D.excerpt}),o.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("section",{itemProp:"articleBody"},o.createElement("div",{style:{width:"80vw",margin:"auto"}},o.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.createElement("button",{className:"both",id:"ProbAndExplanationButton",onClick:b},"문제&해설"),o.createElement("button",{className:"problemonly",id:"ProbOnlyButton",onClick:w},"문제"),o.createElement("button",{id:"ExplanationOnlyButton",onClick:B},"해설")),o.createElement("div",{id:"content"},o.createElement("div",{id:"ProblemDiv"},function(){if(o.useEffect((()=>{if(u){let e=document.createElement("script");e.src="https://documentservices.adobe.com/view-sdk/viewer.js",e.async=!0,document.head.appendChild(e);const t=()=>x(!1);return e.addEventListener("load",t),"undefined"!=typeof document&&document.addEventListener("adobe_dc_view_sdk.ready",(function(){window.adobe_dc_sdk["dc-core-loaded"]=!1,new AdobeDC.View({clientId:u,divId:"ProblemDiv"}).previewFile({content:{location:{url:"../problems/"+encodeURI(k)+".pdf"}},metaData:{fileName:k+".pdf",id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))},previewConfig:{embedMode:"FULL_WINDOW",showPrintPDF:!0,showDownloadPDF:!0,showZoomControl:!0,showAnnotationTools:!0,enableAnnotationAPIs:!0}})})),()=>e.removeEventListener("load",t)}}),[u]),y)return o.createElement("p",null,"문제지 PDF 파일을 로드하고 있습니다. 한참 걸릴 수도 있어요 ㅠㅠ 30초 이상 걸리면 새로고침을 한번 해보세요.")}()),o.createElement("div",{id:"ExplanationDiv",style:{overflow:"auto",wordWrap:"break-word",height:"inherit"}},o.createElement("h1",{className:"font-NotoSansKR",style:{fontSize:"2em"}},k),o.createElement(l.x,null,i)))))),o.createElement(P,{url:"https://ingyerlog.kr"+a.pathname,path:a.pathname,title:D.frontmatter.title}))):o.createElement(r.A,{location:a,title:I},o.createElement(m.G$,{title:k,description:D.frontmatter.description||D.excerpt}),o.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("section",{itemProp:"articleBody"},o.createElement("div",{style:{overflow:"hidden"}},o.createElement("div",{id:"content",style:{overflow:"auto"}},o.createElement("h1",{className:"font-NotoSansKR text-skin-fg text-4xl md:text-4xl",itemProp:"headline"},k),o.createElement("div",{style:{wordBreak:"break-word"}},o.createElement(l.x,null,i)))))),o.createElement(P,{url:"https://ingyerlog.kr"+a.pathname,path:a.pathname,title:D.frontmatter.title}))};function p(e){return o.createElement(u,e,o.createElement(i,e))}}}]);