(self.webpackChunkgatsby_starter_tailwind_mdx_blog=self.webpackChunkgatsby_starter_tailwind_mdx_blog||[]).push([[7],{1711:function(e,t,o){"use strict";var n=o(7424),i=o(6690),r=o(9728),l=o(6115),a=o(1655),s=o(4993),d=o(3808);function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=d(e);if(t){var i=d(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return s(this,o)}}t.Vw=void 0;var u=o(5893),p=o(7294);t.Vw={demoUrl:"https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",staticDefaultConfig:{showAnnotationTools:!1,showLeftHandPanel:!1,showPageControls:!1,showDownloadPDF:!1,showPrintPDF:!1},staticDivId:"pdf-div",demoMetaData:{fileName:"Menu.pdf",id:"6d07d124 - ac85–43b3 - a867–36930f502ac6"}};var f=function(e){a(n,e);var o=c(n);function n(e){var r,a,s,d,c,u,p;return i(this,n),(r=o.call(this,e)).state={adobeMainReady:!1,previewConfig:e.previewConfig||t.Vw.staticDefaultConfig,isReady:e.isReady||!1,config:{divId:(null===(a=e.config)||void 0===a?void 0:a.divId)||t.Vw.staticDivId,clientId:(null===(s=e.config)||void 0===s?void 0:s.clientId)||"",url:(null===(d=e.config)||void 0===d?void 0:d.url)||t.Vw.demoUrl,fileMeta:(null===(c=e.config)||void 0===c?void 0:c.fileMeta)||t.Vw.demoMetaData,content:(null===(u=e.config)||void 0===u?void 0:u.content)||{location:{url:(null===(p=e.config)||void 0===p?void 0:p.url)||t.Vw.demoUrl}}}},r.onLoad=r.onLoad.bind(l(r)),r.onLoaded=r.onLoaded.bind(l(r)),r.render=r.render.bind(l(r)),r.previewFile=r.previewFile.bind(l(r)),r}return r(n,[{key:"previewFile",value:function(e,o,n){var i,r,l={clientId:null===(i=this.state.config)||void 0===i?void 0:i.clientId,divId:e};return this.dcView=new window.AdobeDC.View(l),this.dcView.previewFile({content:{location:{url:n}},metaData:(null===(r=this.state.config)||void 0===r?void 0:r.fileMeta)||t.Vw.demoMetaData},o)}},{key:"onLoaded",value:function(){var e,o;this.previewFile((null===(e=this.state.config)||void 0===e?void 0:e.divId)||t.Vw.staticDivId,this.state.previewConfig,(null===(o=this.state.config)||void 0===o?void 0:o.url)||t.Vw.demoUrl)}},{key:"onLoad",value:function(){var e,o,i,r=this;console.log("load",(null===(e=this.state.config)||void 0===e?void 0:e.divId)||t.Vw.staticDivId),document.addEventListener("adobe_dc_view_sdk.ready",(function(){r.setState({adobeMainReady:!0}),console.log("listed")})),document.getElementById((null===(o=this.state.config)||void 0===o?void 0:o.divId)||t.Vw.staticDivId)&&this.setState({isReady:!0}),!0===n.checkForViewJsLoaded()&&document.getElementById((null===(i=this.state.config)||void 0===i?void 0:i.divId)||t.Vw.staticDivId)&&this.setState({adobeMainReady:!0})}},{key:"componentDidMount",value:function(){this.onLoad()}},{key:"render",value:function(){var e,o,n,i,r,l,a,s,d,c,p,f,v,m,y,h,g,x,b,w,E,_,I,D,M,P,B,S,R,j,O,k,C,N=this;return!0===this.state.adobeMainReady&&!0===this.state.isReady&&this.onLoaded(),(0,u.jsx)("div",{onLoad:function(){N.onLoad()},id:(null===(e=this.state.config)||void 0===e?void 0:e.divId)||t.Vw.staticDivId,className:this.props.className||"adobe-viewer-of-amazon-corporate-retaliations",style:{width:(null===(o=this.props.style)||void 0===o?void 0:o.width)||void 0,height:(null===(n=this.props.style)||void 0===n?void 0:n.height)||void 0,position:(null===(i=this.props.style)||void 0===i?void 0:i.position)||"static",top:(null===(r=this.props.style)||void 0===r?void 0:r.top)||void 0,left:(null===(l=this.props.style)||void 0===l?void 0:l.left)||void 0,right:(null===(a=this.props.style)||void 0===a?void 0:a.right)||void 0,bottom:(null===(s=this.props.style)||void 0===s?void 0:s.bottom)||void 0,zIndex:(null===(d=this.props.style)||void 0===d?void 0:d.zIndex)||"initial",backgroundColor:(null===(c=this.props.style)||void 0===c?void 0:c.backgroundColor)||"inherit",color:(null===(p=this.props.style)||void 0===p?void 0:p.color)||"inherit",fontSize:(null===(f=this.props.style)||void 0===f?void 0:f.fontSize)||"inherit",fontFamily:(null===(v=this.props.style)||void 0===v?void 0:v.fontFamily)||"inherit",fontWeight:(null===(m=this.props.style)||void 0===m?void 0:m.fontWeight)||"inherit",fontStyle:(null===(y=this.props.style)||void 0===y?void 0:y.fontStyle)||"inherit",lineHeight:(null===(h=this.props.style)||void 0===h?void 0:h.lineHeight)||"inherit",margin:(null===(g=this.props.style)||void 0===g?void 0:g.margin)||"inherit",padding:(null===(x=this.props.style)||void 0===x?void 0:x.padding)||"inherit",marginTop:(null===(b=this.props.style)||void 0===b?void 0:b.marginTop)||"inherit",marginBottom:(null===(w=this.props.style)||void 0===w?void 0:w.marginBottom)||"inherit",marginLeft:(null===(E=this.props.style)||void 0===E?void 0:E.marginLeft)||"inherit",marginRight:(null===(_=this.props.style)||void 0===_?void 0:_.marginRight)||"inherit",paddingTop:(null===(I=this.props.style)||void 0===I?void 0:I.paddingTop)||"inherit",paddingBottom:(null===(D=this.props.style)||void 0===D?void 0:D.paddingBottom)||"inherit",paddingLeft:(null===(M=this.props.style)||void 0===M?void 0:M.paddingLeft)||"inherit",paddingRight:(null===(P=this.props.style)||void 0===P?void 0:P.paddingRight)||"inherit",alignSelf:(null===(B=this.props.style)||void 0===B?void 0:B.alignSelf)||"inherit",alignItems:(null===(S=this.props.style)||void 0===S?void 0:S.alignItems)||"inherit",alignContent:(null===(R=this.props.style)||void 0===R?void 0:R.alignContent)||"inherit",maxWidth:(null===(j=this.props.style)||void 0===j?void 0:j.maxWidth)||"inherit",minWidth:(null===(O=this.props.style)||void 0===O?void 0:O.minWidth)||"inherit",maxHeight:(null===(k=this.props.style)||void 0===k?void 0:k.maxHeight)||"inherit",minHeight:(null===(C=this.props.style)||void 0===C?void 0:C.minHeight)||"200px"},title:this.props.title||"entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots"})}}],[{key:"checkForViewJsLoaded",value:function(){return null!=window.adobe_dc_view_sdk}},{key:"checkForDeprecatedMainJsLoaded",value:function(){return null!=window.AdobeDC}}]),n}(p.Component);t.ZP=function(e){var o,i=(0,p.useState)(e.adobeMainReady||!1),r=n(i,2),l=r[0],a=r[1],s=(0,p.useState)(e.isReady||!1),d=n(s,2),c=d[0],v=d[1],m=(null===(o=e.config)||void 0===o?void 0:o.divId)||t.Vw.staticDivId,y=(0,p.useRef)(new f({previewConfig:e.previewConfig,config:e.config,isReady:c,adobeMainReady:l,style:e.style,className:e.className,title:e.title||"react-adobe-state-government-ensuring-rule-of-law-against-amazon-retaliator-or-a-child-component-framed-by-state-regulations-such-as-adobe-react-embed-core-div"}));return(0,p.useMemo)((function(){y.current=new f({previewConfig:e.previewConfig,config:e.config,isReady:c,adobeMainReady:l,style:e.style,className:e.className,title:e.title||"react-adobe-state-government-ensuring-rule-of-law-against-amazon-retaliator-or-a-child-component-framed-by-state-regulations-such-as-adobe-react-embed-core-div"})}),[e.previewConfig,e.config,c,l,e.style,e.className,e.title]),(0,p.useEffect)((function(){document.getElementById(m)&&v(!0)}),[c,m]),document.addEventListener("adobe_dc_view_sdk.ready",(function(){a(!0)})),(0,u.jsx)(f,{previewConfig:e.previewConfig,config:e.config,isReady:c,adobeMainReady:l,style:e.style,className:e.className,title:e.title||"react-adobe-state-government-ensuring-rule-of-law-against-amazon-retaliator-or-a-child-component-framed-by-state-regulations-such-as-adobe-react-embed-core-div"})}},254:function(e,t,o){"use strict";o.r(t);var n=o(7294),i=o(6725),r=o(5441),l=o(3573),a=o(1711);t.default=function(e){var t,o=e.data,s=e.location,d=n.useState(1),c=d[0],u=d[1],p=n.useState(1),f=p[0],v=p[1],m=n.useState(null),y=m[0],h=m[1];n.useEffect((function(){h("localhost"!==window.location.hostname?"f93f0c06b7de422396658c3ff48dd022":"c514163c351b4f2082ef01e530840e0b")}));var g,x,b,w=o.mdx,E=(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",_=w.frontmatter.title;if("y"===w.fields.haspdf){return n.useEffect((function(){var e,t,o=document.createElement("script");o.src="https://documentservices.adobe.com/view-sdk/viewer.js",null===(e=document.getElementById("ProblemDiv"))||void 0===e||e.appendChild(o);var n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",null===(t=document.getElementById("content"))||void 0===t||t.appendChild(n)})),n.useEffect((function(){document.getElementById("content")&&(c+f===2?(document.getElementById("content").className="grid grid-cols-2",document.getElementById("content").style.gridTemplateColumns="50% 50%"):(document.getElementById("content").className="grid grid-cols-1",document.getElementById("content").style.gridTemplateColumns="100%")),document.getElementById("ProblemDiv")&&document.getElementById("ExplanationDiv")&&(document.getElementById("ProblemDiv").className=1===c?"col-start-1":"",document.getElementById("ExplanationDiv").className="col-start-"+(c+f)),c?document.getElementById("ProblemDiv")&&(document.getElementById("ProblemDiv").style.display="block"):document.getElementById("ProblemDiv").style.display="none",f?document.getElementById("ExplanationDiv")&&(document.getElementById("ExplanationDiv").style.display="block",document.getElementById("ExplanationDiv").style.marginLeft=c?"50px":"0",document.getElementById("ExplanationDiv").className="col-start-"+(1+c)):document.getElementById("ExplanationDiv")&&(document.getElementById("ExplanationDiv").style.display="none")})),n.createElement(r.Z,{location:s,title:E},n.createElement(l.pQ,{title:_,description:w.frontmatter.description||w.excerpt}),n.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("section",{itemProp:"articleBody"},n.createElement("div",{style:{width:"80vw",margin:"auto",minWidth:"400px"}},n.createElement("div",null,n.createElement("div",{className:"grid grid-cols-4",style:{width:"50%",minWidth:"400px"}},n.createElement("div",{className:"col-start-1"},n.createElement("button",{id:"ProbAndExplanationButton",onClick:function(){u(1),v(1)}},"문제&해설")),n.createElement("div",{className:"col-start-2"},n.createElement("button",{id:"ProbOnlyButton",onClick:function(){u(1),v(0)}},"문제만")),n.createElement("div",{className:"col-start-3"},n.createElement("button",{id:"ExplanationOnlyButton",onClick:function(){u(0),v(1)}},"해설만")),n.createElement("div",{className:"col-start-4"},n.createElement("button",{id:"DownloadExplanationButton",onClick:function(){html2pdf(document.getElementById("ExplanationDiv"))}},"해설PDF다운")))),n.createElement("div",{id:"content"},n.createElement("div",{id:"ProblemDiv"},(g=n.useState(!0),x=g[0],b=g[1],n.useEffect((function(){"undefined"==typeof document?b(!0):b(!1)})),x?n.createElement("div",null,"PDF 로딩중입니다."):n.createElement(a.ZP,{previewConfig:{showAnnotationTools:!0,showLeftHandPanel:!0,showDownloadPDF:!0},config:{clientId:y,divId:"ProblemDiv",url:"../problems/"+encodeURI(_)+".pdf",fileMeta:{fileName:_+".pdf",title:_}}}))),n.createElement("div",{id:"ExplanationDiv",style:{overflow:"auto",wordWrap:"break-word",height:"inherit"}},n.createElement("h1",{className:"font-NotoSansKR",style:{fontSize:"2em"}},_),n.createElement(i.MDXRenderer,null,w.body)))))))}return n.createElement(r.Z,{location:s,title:E},n.createElement(l.pQ,{title:_,description:w.frontmatter.description||w.excerpt}),n.createElement("article",{itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("section",{itemProp:"articleBody"},n.createElement("div",{style:{width:"70vw",minWidth:"400px",margin:"auto",height:"93vh"}},n.createElement("h1",{className:"font-NotoSansKR text-skin-fg text-4xl md:text-4xl",itemProp:"headline"},_),n.createElement("div",{style:{overflow:"auto",width:"70vw",wordBreak:"break-word"}},n.createElement(i.MDXRenderer,null,w.body))))))}},6725:function(e,t,o){var n=o(3395);e.exports={MDXRenderer:n}},3395:function(e,t,o){var n=o(9213),i=o(3515),r=o(8416),l=o(7071),a=["scope","children"];function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var c=o(7294),u=o(4983).mdx,p=o(9480).useMDXScope;e.exports=function(e){var t=e.scope,o=e.children,r=l(e,a),s=p(t),f=c.useMemo((function(){if(!o)return null;var e=d({React:c,mdx:u},s),t=Object.keys(e),r=t.map((function(t){return e[t]}));return i(Function,["_fn"].concat(t,[""+o])).apply(void 0,[{}].concat(n(r)))}),[o,t]);return c.createElement(f,d({},r))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n},e.exports.__esModule=!0,e.exports.default=e.exports},5372:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,o){var n=o(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},6690:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,o){var n=o(6015),i=o(9617);function r(t,o,l){return i()?(e.exports=r=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=r=function(e,t,o){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return o&&n(r,o.prototype),r},e.exports.__esModule=!0,e.exports.default=e.exports),r.apply(null,arguments)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},9728:function(e,t,o){var n=o(4062);function i(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,n(i.key),i)}}e.exports=function(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,o){var n=o(4062);e.exports=function(e,t,o){return(t=n(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.__esModule=!0,e.exports.default=e.exports},3808:function(e){function t(o){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1655:function(e,t,o){var n=o(6015);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8872:function(e){e.exports=function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,i,r,l,a=[],s=!0,d=!1;try{if(r=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;s=!1}else for(;!(s=(n=r.call(o)).done)&&(a.push(n.value),a.length!==t);s=!0);}catch(c){d=!0,i=c}finally{try{if(!s&&null!=o.return&&(l=o.return(),Object(l)!==l))return}finally{if(d)throw i}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},2218:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},4993:function(e,t,o){var n=o(8698).default,i=o(6115);e.exports=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)},e.exports.__esModule=!0,e.exports.default=e.exports},7424:function(e,t,o){var n=o(5372),i=o(8872),r=o(6116),l=o(2218);e.exports=function(e,t){return n(e)||i(e,t)||r(e,t)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},9213:function(e,t,o){var n=o(3405),i=o(9498),r=o(6116),l=o(2281);e.exports=function(e){return n(e)||i(e)||r(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,o){var n=o(8698).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,o){var n=o(8698).default,i=o(5036);e.exports=function(e){var t=i(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(o){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,o){var n=o(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-a83086348eaab4768132.js.map