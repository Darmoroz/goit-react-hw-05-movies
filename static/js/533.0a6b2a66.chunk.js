"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[533],{533:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r=t(439),i=t(791),a=t(683),o=t(861),c=t(757),s=t.n(c),u=t(243).Z.create({baseURL:"https://api.themoviedb.org/3/"});u.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc5OTA1N2VkMWUzY2JiZmVjOTBhNzYyZmUxOWQ5OCIsInN1YiI6IjY0OGMyNjg0NTU5ZDIyMDExYzRiMzgwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1RdcZoV5IPYOcFbCXJNJ1aLnntukhilkV6un6kG6ZoU");var l,h=function(){var n=(0,o.Z)(s().mark((function n(e){var t,r,i=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:{},n.next=3,u.get(e,{params:(0,a.Z)({},t)}).catch((function(n){return console.log(n.message)}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=t(689),f=t(87),m=t(168),p=t(444).ZP.ul(l||(l=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 16px;\n  li {\n    display: grid;\n    grid-template-columns: 8fr 1fr;\n    a {\n      color: #0077cc;\n      text-decoration: none;\n      :hover {\n        color: rgba(0, 119, 204, 0.5);\n      }\n    }\n    span {\n      font-weight: 500;\n    }\n  }\n"]))),g=t(184),v=function(n){var e=n.movies,t=(0,d.TH)();return(0,g.jsx)(p,{children:e.map((function(n){var e=n.id,r=n.title,i=n.vote_average;return(0,g.jsxs)("li",{children:[(0,g.jsx)(f.rU,{to:"movies/".concat(e),state:{from:t},children:r}),(0,g.jsx)("span",{children:i.toFixed(1)})]},e)}))})},x=function(){var n=(0,i.useState)((function(){return h("trending/movie/day",{page:1}).then((function(n){var e=n.data;return a(e.results)}))})),e=(0,r.Z)(n,2),t=e[0],a=e[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{style:{marginBottom:"16px",textAlign:"center",textTransform:"uppercase"},children:"Today trend movies"}),t.length&&(0,g.jsx)(v,{movies:t})]})}}}]);
//# sourceMappingURL=533.0a6b2a66.chunk.js.map