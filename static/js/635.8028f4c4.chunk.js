"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[635],{824:function(n,e,t){t.d(e,{Z:function(){return s}});var r,i=t(689),o=t(87),c=t(168),a=t(444).ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 16px;\n  li {\n    display: grid;\n    grid-template-columns: 8fr 1fr;\n    a {\n      color: #0077cc;\n      text-decoration: none;\n      :hover {\n        color: rgba(0, 119, 204, 0.5);\n      }\n    }\n    span {\n      font-weight: 500;\n    }\n  }\n"]))),u=t(184),s=function(n){var e=n.movies,t=(0,i.TH)();return(0,u.jsx)(a,{children:e.map((function(n){var e=n.id,r=n.title,i=n.vote_average;return(0,u.jsxs)("li",{children:[(0,u.jsx)(o.rU,{to:"/movies/".concat(e),state:{from:t},children:r}),(0,u.jsx)("span",{children:i.toFixed(1)})]},e)}))})}},856:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r,i=t(439),o=t(87),c=t(791),a=t(168),u=t(444).ZP.form(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n  input {\n    line-height: 1.5;\n  }\n  button {\n    font-weight: bold;\n  }\n"]))),s=t(184),l=function(n){var e=n.onSubmit,t=(0,c.useState)(""),r=(0,i.Z)(t,2),o=r[0],a=r[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{style:{marginBottom:"16px",textAlign:"center",textTransform:"uppercase"},children:"Search Movie"}),(0,s.jsxs)(u,{onSubmit:function(n){n.preventDefault(),e(o),a("")},children:[(0,s.jsx)("input",{type:"text",value:o,onChange:function(n){a(n.target.value)}}),(0,s.jsx)("button",{type:"submit",disabled:!o,children:"GO"})]})]})},f=t.p+"static/media/error-404.a5c3366944154d7733ed.webp",d=t(390),h=t(824),p=function(){var n,e=(0,o.lr)(),t=(0,i.Z)(e,2),r=t[0],a=t[1],u=(0,c.useState)([]),p=(0,i.Z)(u,2),m=p[0],x=p[1],v=null!==(n=r.get("query"))&&void 0!==n?n:"",g=(0,c.useRef)();(0,c.useEffect)((function(){v&&(0,d.X)("search/movie",{query:v}).then((function(n){var e=n.data;x(e.results),g.current=e.total_results})).catch((function(n){return console.log(n.message)}))}),[v]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{onSubmit:function(n){a({query:n})}}),(null===m||void 0===m?void 0:m.length)>0&&(0,s.jsx)(h.Z,{movies:m}),0===g.current&&(0,s.jsx)("img",{src:f,alt:"not found",style:{marginTop:"20px"}})]})}},390:function(n,e,t){t.d(e,{X:function(){return u}});var r=t(683),i=t(861),o=t(757),c=t.n(o),a=t(243).Z.create({baseURL:"https://api.themoviedb.org/3/"});a.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc5OTA1N2VkMWUzY2JiZmVjOTBhNzYyZmUxOWQ5OCIsInN1YiI6IjY0OGMyNjg0NTU5ZDIyMDExYzRiMzgwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1RdcZoV5IPYOcFbCXJNJ1aLnntukhilkV6un6kG6ZoU");var u=function(){var n=(0,i.Z)(c().mark((function n(e){var t,i,o=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:{},n.next=3,a.get(e,{params:(0,r.Z)({},t)}).catch((function(n){return console.log(n.message)}));case 3:return i=n.sent,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=635.8028f4c4.chunk.js.map