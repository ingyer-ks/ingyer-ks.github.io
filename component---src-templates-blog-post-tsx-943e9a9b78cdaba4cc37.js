(self.webpackChunkgatsby_starter_tailwind_mdx_blog=self.webpackChunkgatsby_starter_tailwind_mdx_blog||[]).push([[7],{254:function(e,t,n){"use strict";n.r(t);var o=n(7294),r=n(6725),l=n(5441),i=n(3573);t.default=function(e){var t,n=e.data,c=e.location,a=o.useState(null),s=a[0],u=a[1];o.useEffect((function(){"undefined"!=typeof document&&u("localhost"===document.location.hostname?"fc828db7b0e54b139ef252cef009b8d7":"106805b155844ee0be6a8540f507ee25")}));var d=o.useState(!0),p=d[0],m=d[1],f=o.useState(1),x=f[0],y=f[1],v=o.useState(1),b=v[0],E=v[1],h=function(){y(0),E(1)},g=n.mdx,w=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",_=g.frontmatter.title;if("y"===g.fields.haspdf){return o.useEffect((function(){if(!document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"]')){var e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",document.head.appendChild(e)}})),o.useEffect((function(){document.getElementById("content")&&(x+b===2?(document.getElementById("content").className="grid grid-cols-2",document.getElementById("content").style.gridTemplateColumns="50% 50%"):(document.getElementById("content").className="grid grid-cols-1",document.getElementById("content").style.gridTemplateColumns="100%")),document.getElementById("ProblemDiv")&&document.getElementById("ExplanationDiv")&&(document.getElementById("ProblemDiv").className=1===x?"col-start-1":"",document.getElementById("ExplanationDiv").className="col-start-"+(x+b)),x?document.getElementById("ProblemDiv")&&(document.getElementById("ProblemDiv").style.display="block"):document.getElementById("ProblemDiv").style.display="none",b?document.getElementById("ExplanationDiv")&&(document.getElementById("ExplanationDiv").style.display="block",document.getElementById("ExplanationDiv").style.maxWidth="40vw",document.getElementById("ExplanationDiv").className="col-start-"+(1+x)):document.getElementById("ExplanationDiv")&&(document.getElementById("ExplanationDiv").style.display="none")})),o.createElement(l.Z,{location:c,title:w},o.createElement(i.pQ,{title:_,description:g.frontmatter.description||g.excerpt}),o.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("section",{itemProp:"articleBody"},o.createElement("div",{style:{width:"80vw",margin:"auto",minWidth:"400px"}},o.createElement("div",null,o.createElement("div",{className:"grid grid-cols-4",style:{width:"50%",minWidth:"400px"}},o.createElement("div",{className:"col-start-1"},o.createElement("button",{id:"ProbAndExplanationButton",onClick:function(){y(1),E(1)}},"문제&해설")),o.createElement("div",{className:"col-start-2"},o.createElement("button",{id:"ProbOnlyButton",onClick:function(){y(1),E(0)}},"문제만")),o.createElement("div",{className:"col-start-3"},o.createElement("button",{id:"ExplanationOnlyButton",onClick:h},"해설만")),o.createElement("div",{className:"col-start-4"},o.createElement("button",{id:"DownloadExplanationButton",onClick:function(){h(),alert("해설을 PDF로 만들고 있습니다. 잠시 기다리시면 다운로드가 시작됩니다."),html2pdf(document.getElementById("ExplanationDiv"))}},"해설PDF다운")))),o.createElement("div",{id:"content"},o.createElement("div",{id:"ProblemDiv"},function(){if(o.useEffect((function(){var e=document.querySelector('script[src="https://documentservices.adobe.com/view-sdk/viewer.js"]');"undefined"==typeof document||s||document.addEventListener("adobe_dc_view_sdk.ready",(function(){new AdobeDC.View({clientId:"localhost"===document.location.hostname?"fc828db7b0e54b139ef252cef009b8d7":"106805b155844ee0be6a8540f507ee25",divId:"ProblemDiv"}).previewFile({content:{location:{url:"../problems/"+encodeURI(_)+".pdf"}},metaData:{fileName:_+".pdf",id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))},previewConfig:{embedMode:"FULL_WINDOW",showPrintPDF:!0,showDownloadPDF:!0,showZoomControl:!0,showAnnotationTools:!0,enableAnnotationAPIs:!0}})})),e||((e=document.createElement("script")).src="https://documentservices.adobe.com/view-sdk/viewer.js",e.async=!0,document.head.appendChild(e));var t=function(){return m(!1)};return e.addEventListener("load",t),function(){return e.removeEventListener("load",t)}}),[]),p)return o.createElement("p",null,"문제지 PDF 파일을 로드하고 있습니다. 한참 걸릴 수도 있어요 ㅠㅠ 30초 이상 걸리면 새로고침을 한번 해보세요.")}()),o.createElement("div",{id:"ExplanationDiv",style:{overflow:"auto",wordWrap:"break-word",height:"inherit"}},o.createElement("h1",{className:"font-NotoSansKR",style:{fontSize:"2em"}},_),o.createElement(r.MDXRenderer,null,g.body)))))))}return o.createElement(l.Z,{location:c,title:w},o.createElement(i.pQ,{title:_,description:g.frontmatter.description||g.excerpt}),o.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article"},o.createElement("section",{itemProp:"articleBody"},o.createElement("div",{style:{overflow:"hidden"}},o.createElement("div",{id:"content",style:{overflow:"auto"}},o.createElement("h1",{className:"font-NotoSansKR text-skin-fg text-4xl md:text-4xl",itemProp:"headline"},_),o.createElement("div",{style:{wordBreak:"break-word"}},o.createElement(r.MDXRenderer,null,g.body)))))))}},6725:function(e,t,n){var o=n(3395);e.exports={MDXRenderer:o}},3395:function(e,t,n){var o=n(9213),r=n(3515),l=n(8416),i=n(7071),c=["scope","children"];function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n(7294),d=n(4983).mdx,p=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,l=i(e,c),a=p(t),m=u.useMemo((function(){if(!n)return null;var e=s({React:u,mdx:d},a),t=Object.keys(e),l=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(t,[""+n])).apply(void 0,[{}].concat(o(l)))}),[n,t]);return u.createElement(m,s({},l))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,n){var o=n(3897);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,n){var o=n(6015),r=n(9617);function l(t,n,i){return r()?(e.exports=l=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,n){var r=[null];r.push.apply(r,t);var l=new(Function.bind.apply(e,r));return n&&o(l,n.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,n){var o=n(4062);e.exports=function(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},9213:function(e,t,n){var o=n(3405),r=n(9498),l=n(6116),i=n(2281);e.exports=function(e){return o(e)||r(e)||l(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,n){var o=n(8698).default;e.exports=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,n){var o=n(8698).default,r=n(5036);e.exports=function(e){var t=r(e,"string");return"symbol"===o(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,n){var o=n(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-943e9a9b78cdaba4cc37.js.map