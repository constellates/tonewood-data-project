(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(153),o=a(151);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},148:function(t,e,a){var n;t.exports=(n=a(150))&&n.default||n},149:function(t){t.exports={data:{site:{siteMetadata:{title:"Tonewood Data Project"}}}}},150:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),c=a(2),l=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},151:function(t,e,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(156),l=a.n(c);function d(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,s=t.title,c=n.data.site,d=e||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,script:[{type:"text/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/tone/13.0.1/Tone.min.js"}],meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=d},152:function(t){t.exports={data:{site:{siteMetadata:{title:"Tonewood Data Project",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},153:function(t,e,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(33),l=a.n(c),d=(a(148),i.a.createContext({})),u=function(t){return i.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};a(154);var p={pageLink:{textDecoration:"none",marginLeft:"20px"}},m=function(t){var e=t.link,a=void 0===e?"/":e,n=t.text,r=void 0===n?"":n;return i.a.createElement("h3",{style:{float:"right",margin:0}},i.a.createElement(l.a,{to:a,style:p.pageLink},r))},f=function(t){var e=t.siteTitle;return i.a.createElement("header",{style:{marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",overflow:"auto",borderBottom:"2px solid white",padding:"1.45rem 1.0875rem"}},i.a.createElement("h3",{style:{float:"left",margin:0}},i.a.createElement(l.a,{to:"/",style:{textDecoration:"none"}},e)),i.a.createElement(m,{text:"Explore",link:"/explore"}),i.a.createElement(m,{text:"Contribute",link:"/contribute"}),i.a.createElement(m,{text:"Test",link:"/test"})))};f.propTypes={siteTitle:s.a.string},f.defaultProps={siteTitle:""};var g=f,y=(a(155),function(t){var e=t.children;return i.a.createElement(u,{query:"755544856",render:function(t){return i.a.createElement("div",{style:{position:"fixed",top:"20px",right:"20px",bottom:"20px",left:"20px",overflow:"scroll",background:"#F3F3F3"}},i.a.createElement(g,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e)))},data:n})});y.propTypes={children:s.a.node.isRequired};e.a=y}}]);
//# sourceMappingURL=component---src-pages-404-js-29467615ee95d7dc9673.js.map