(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(t,e,i){"use strict";i.r(e);var a,n=i(35),s=i.n(n),r=i(7),o=i.n(r),u=i(0),l=i.n(u),c=i(153),m=i(151),d=function(t){function e(e){var i;return(i=t.call(this,e)||this).state={playing:!1},i.toggleTone=i.toggleTone.bind(s()(i)),i}o()(e,t);var i=e.prototype;return i.componentDidMount=function(){a=new Tone.Oscillator(440,"sine").toMaster()},i.toggleTone=function(){this.state.playing?a.stop():a.start(),this.setState({playing:!this.state.playing})},i.render=function(){return l.a.createElement("button",{onClick:this.toggleTone},this.state.playing?"stop":"play 440hz")},e}(l.a.Component);e.default=function(){return l.a.createElement(c.a,null,l.a.createElement(m.a,{title:"Tonewood Testing",keywords:["tonewood","data","database","luthiery"]}),l.a.createElement("h3",null,"Testing Your Tonewood"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada hendrerit risus, ut suscipit ipsum tempor vitae. Nam a sem dictum, commodo risus quis, sagittis mi. Morbi hendrerit, tortor sed commodo dignissim, odio lorem euismod lorem, suscipit egestas elit mauris eget nibh. In quis nibh at ligula blandit varius ut vitae libero. Fusce tincidunt risus nec ligula lacinia efficitur. Phasellus mattis sapien sed sapien varius, ac ultricies eros lobortis. Vestibulum massa purus, pharetra vitae nisl at, dapibus accumsan odio. Ut a fringilla lorem. Donec et lobortis est. Nam porttitor metus tincidunt quam vehicula malesuada. Aliquam efficitur turpis sit amet suscipit sagittis. Aliquam vitae blandit nisl, vitae dictum risus."),l.a.createElement(d,null),l.a.createElement("p",null),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada hendrerit risus, ut suscipit ipsum tempor vitae. Nam a sem dictum, commodo risus quis, sagittis mi. Morbi hendrerit, tortor sed commodo dignissim, odio lorem euismod lorem, suscipit egestas elit mauris eget nibh. In quis nibh at ligula blandit varius ut vitae libero. Fusce tincidunt risus nec ligula lacinia efficitur. Phasellus mattis sapien sed sapien varius, ac ultricies eros lobortis. Vestibulum massa purus, pharetra vitae nisl at, dapibus accumsan odio. Ut a fringilla lorem. Donec et lobortis est. Nam porttitor metus tincidunt quam vehicula malesuada. Aliquam efficitur turpis sit amet suscipit sagittis. Aliquam vitae blandit nisl, vitae dictum risus."),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada hendrerit risus, ut suscipit ipsum tempor vitae. Nam a sem dictum, commodo risus quis, sagittis mi. Morbi hendrerit, tortor sed commodo dignissim, odio lorem euismod lorem, suscipit egestas elit mauris eget nibh. In quis nibh at ligula blandit varius ut vitae libero. Fusce tincidunt risus nec ligula lacinia efficitur. Phasellus mattis sapien sed sapien varius, ac ultricies eros lobortis. Vestibulum massa purus, pharetra vitae nisl at, dapibus accumsan odio. Ut a fringilla lorem. Donec et lobortis est. Nam porttitor metus tincidunt quam vehicula malesuada. Aliquam efficitur turpis sit amet suscipit sagittis. Aliquam vitae blandit nisl, vitae dictum risus."))}},148:function(t,e,i){var a;t.exports=(a=i(150))&&a.default||a},149:function(t){t.exports={data:{site:{siteMetadata:{title:"Tonewood Data Project"}}}}},150:function(t,e,i){"use strict";i.r(e);i(34);var a=i(0),n=i.n(a),s=i(4),r=i.n(s),o=i(55),u=i(2),l=function(t){var e=t.location,i=u.default.getResourcesForPathnameSync(e.pathname);return n.a.createElement(o.a,Object.assign({location:e,pageResources:i},i.json))};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=l},151:function(t,e,i){"use strict";var a=i(152),n=i(0),s=i.n(n),r=i(4),o=i.n(r),u=i(156),l=i.n(u);function c(t){var e=t.description,i=t.lang,n=t.meta,r=t.keywords,o=t.title,u=a.data.site,c=e||u.siteMetadata.description;return s.a.createElement(l.a,{htmlAttributes:{lang:i},title:o,titleTemplate:"%s | "+u.siteMetadata.title,script:[{type:"text/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/tone/13.0.1/Tone.min.js"}],meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=c},152:function(t){t.exports={data:{site:{siteMetadata:{title:"Tonewood Data Project",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},153:function(t,e,i){"use strict";var a=i(149),n=i(0),s=i.n(n),r=i(4),o=i.n(r),u=i(33),l=i.n(u),c=(i(148),s.a.createContext({})),m=function(t){return s.a.createElement(c.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};i(154);var d={pageLink:{textDecoration:"none",marginLeft:"20px"}},p=function(t){var e=t.link,i=void 0===e?"/":e,a=t.text,n=void 0===a?"":a;return s.a.createElement("h3",{style:{float:"right",margin:0}},s.a.createElement(l.a,{to:i,style:d.pageLink},n))},g=function(t){var e=t.siteTitle;return s.a.createElement("header",{style:{marginBottom:"1.45rem"}},s.a.createElement("div",{style:{margin:"0 auto",overflow:"auto",borderBottom:"2px solid white",padding:"1.45rem 1.0875rem"}},s.a.createElement("h3",{style:{float:"left",margin:0}},s.a.createElement(l.a,{to:"/",style:{textDecoration:"none"}},e)),s.a.createElement(p,{text:"Explore",link:"/explore"}),s.a.createElement(p,{text:"Contribute",link:"/contribute"}),s.a.createElement(p,{text:"Test",link:"/test"})))};g.propTypes={siteTitle:o.a.string},g.defaultProps={siteTitle:""};var f=g,h=(i(155),function(t){var e=t.children;return s.a.createElement(m,{query:"755544856",render:function(t){return s.a.createElement("div",{style:{position:"fixed",top:"20px",right:"20px",bottom:"20px",left:"20px",overflow:"scroll",background:"#F3F3F3"}},s.a.createElement(f,{siteTitle:t.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},s.a.createElement("main",null,e)))},data:a})});h.propTypes={children:o.a.node.isRequired};e.a=h}}]);
//# sourceMappingURL=component---src-pages-test-js-04ff0fe55dde40732eee.js.map