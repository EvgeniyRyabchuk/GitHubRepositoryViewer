(this.webpackJsonprepositoryviewer=this.webpackJsonprepositoryviewer||[]).push([[0],{37:function(e,t,c){e.exports={branch__list:"ControlPanel_branch__list__CpQwW",selected:"ControlPanel_selected__1wpf7"}},43:function(e,t,c){e.exports={button:"DefBtn_button__2YhFA"}},45:function(e,t,c){e.exports={loader:"Loader_loader__RNCMT",load6:"Loader_load6__2VWyq",round:"Loader_round__-glHS"}},55:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(18),r=c.n(s),i=c(31),l=c(7),o=(c(55),c(0)),j=function(e){var t=e.openHiddenSideBar;return Object(o.jsx)("header",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light py-0",children:Object(o.jsxs)("div",{style:{display:"flex",width:"100%"},children:[Object(o.jsxs)("div",{className:"navbar-icon-wrapper",children:[Object(o.jsx)("button",{className:"navbar-toggler",id:"burger-btn",type:"button",onClick:function(){return t(!0)},children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"})]}),Object(o.jsx)("div",{className:"",id:"navbarTogglerDemo02",style:{width:"100%"},children:Object(o.jsxs)("div",{className:"navbar-content",children:[Object(o.jsx)("div",{className:"search",children:Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})}),Object(o.jsx)("div",{className:"side-btn",children:Object(o.jsxs)("ul",{className:"navbar-nav-list",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:"Link"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link disabled",children:"Disabled"})})]})})]})})]})})})},d=c(10),b=function(){var e=Object(d.g)(),t=Object(d.h)();return console.log(t.pathname),Object(o.jsx)("aside",{className:"disk-manage",children:Object(o.jsx)("div",{className:"nav flex-column nav-pills me-3",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical",children:["home","profile"].map((function(c){return Object(o.jsx)("button",{onClick:function(){return e.push("/".concat(c))},className:t.pathname==="/".concat(c)?"nav-link active":"nav-link",id:"v-pills-".concat(c,"-tab"),"data-bs-toggle":"pill","data-bs-target":"#v-pills-".concat(c),type:"button",role:"tab","aria-controls":"v-pills-".concat(c),"aria-selected":t.pathname==="/".concat(c),children:c},c)}))})})},u=c(19),h=c(9),p=c.n(h),m=c(15),O=c(13),f=c(8),x=c(12),v=c(33),N=function(){var e;return Object(o.jsxs)("div",{className:"recently-items-wrapper",children:[Object(o.jsx)("div",{className:"recently-item",children:Object(o.jsxs)("div",{className:"recently-item-inner",children:[Object(o.jsx)(f.a,{icon:x.d}),Object(o.jsx)("div",{className:"recently-file__header",children:Object(o.jsx)("h5",{children:"Some file 1"})})]})}),Object(o.jsx)("div",{className:"recently-item",children:Object(o.jsxs)("div",{className:"recently-item-inner",children:[Object(o.jsx)(f.a,{icon:v.a}),Object(o.jsx)("div",{className:"recently-file__header",children:Object(o.jsx)("h5",{children:"Some file 1"})})]})}),Object(o.jsx)("div",{className:"recently-item",children:Object(o.jsxs)("div",(e={className:"recently-item-inner"},Object(O.a)(e,"className","recently-item-inner"),Object(O.a)(e,"children",[Object(o.jsx)(f.a,{icon:x.b}),Object(o.jsx)("div",{className:"recently-file__header",children:Object(o.jsx)("h5",{children:"Some file 1"})})]),e))}),Object(o.jsx)("div",{className:"recently-item",children:Object(o.jsxs)("div",{className:"recently-item-inner",children:[Object(o.jsx)(f.a,{icon:v.c}),Object(o.jsx)("div",{className:"recently-file__header",children:Object(o.jsx)("h5",{children:"Some file 1"})})]})}),Object(o.jsx)("div",{className:"recently-item",children:Object(o.jsxs)("div",{className:"recently-item-inner",children:[Object(o.jsx)(f.a,{icon:v.b}),Object(o.jsx)("div",{className:"recently-file__header",children:Object(o.jsx)("h5",{children:"Some file 1"})})]})}),Object(o.jsx)("div",{className:"recently-item",children:Object(o.jsxs)("div",{className:"recently-item-inner",children:[Object(o.jsx)(f.a,{icon:x.c}),Object(o.jsx)("div",{className:"recently-file__header",children:Object(o.jsx)("h5",{children:"Some file 1"})})]})})]})},g=function(e){var t=e.children,c=e.select,n=e.index;return Object(o.jsxs)("li",{onClick:function(){c(n)},children:[Object(o.jsx)(f.a,{icon:x.e}),Object(o.jsx)("span",{children:t})]})},y=function(e){var t=e.curPath,c=e.changePath,a=Object(n.useState)(!1),s=Object(l.a)(a,2),r=s[0],i=s[1],j=Object(n.useMemo)((function(){var e=t.split("/");return""===e[0]&&(e[0]="/"),e}),[t]),d=function(e){var n=t.split("/"),a=n.length-(e+1);console.log(a,e+a);var s=n.splice(0,e).join("/");""===s&&(s=""),c(s,!0)};return Object(o.jsxs)("div",{className:"history-wrapper",children:[Object(o.jsx)("button",{className:"path-history",onClick:function(){i(!r)},children:Object(o.jsx)(f.a,{icon:x.a})}),Object(o.jsx)("ul",{className:r?"path-list open":"path-list",children:j.map((function(e,t){return Object(o.jsx)(g,{index:t,select:d,children:e},t)}))})]})},w=c(37),_=c.n(w),k=function(e){var t=e.showModal,c=e.curPath,n=e.changePath,a=e.branches,s=e.switchBranch,r=e.curBranch;return Object(o.jsx)("div",{className:"control-wrapper",children:Object(o.jsxs)("div",{className:"control-panel",children:[Object(o.jsx)("button",{type:"button",onClick:t,className:"btn btn-primary control-btn",children:"View User Repository"}),Object(o.jsx)("div",{className:"cur-path",children:Object(o.jsx)("input",{type:"text",disabled:!0,value:"/"+c})}),Object(o.jsxs)("select",{className:"form-select "+_.a.branch__list,"aria-label":"Default select example",onChange:function(e){return s(e.target.value)},children:[Object(o.jsx)("option",{disabled:!0,children:"Select branch"}),a.map((function(e,t){return Object(o.jsx)("option",{className:e.name===r.name?_.a.selected:"simple",value:e.name,children:e.name},e.commit.sha)}))]}),Object(o.jsx)(y,{curPath:c,changePath:n})]})})},S=c(38),C=c(46),B=c(2),P=c(4),L=c(43),U=c.n(L),R=["children"],D=function(e){var t=e.children,c=Object(P.a)(e,R);return Object(o.jsx)("button",Object(B.a)(Object(B.a)({},c),{},{className:U.a.button,children:t}))},H=function(e){var t=Object(n.useState)(!1),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],j=i[1],d=function(){var t=Object(m.a)(p.a.mark((function t(){var c=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,e.apply(void 0,c);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),j(t.t0);case 9:return t.prev=9,s(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[d,a,o]},J=Object(n.createContext)({}),z=Object(n.createContext)({}),E=c(21),I=c(22),A=c(32),G=c(30),M=function(){function e(){Object(E.a)(this,e)}return Object(I.a)(e,null,[{key:"fetchJsonData",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),T=function(e){Object(A.a)(c,e);var t=Object(G.a)(c);function c(){return Object(E.a)(this,c),t.apply(this,arguments)}return Object(I.a)(c,null,[{key:"getRepos",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.github.com/users/".concat(t,"/repos"),n=M.fetchJsonData(c),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getReposContent",value:function(){var e=Object(m.a)(p.a.mark((function e(t,c){var n,a,s,r=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>2&&void 0!==r[2]?r[2]:"master",a="https://api.github.com/repos/".concat(t,"/").concat(c,"/git/trees/").concat(n,"?recursive=1"),s=M.fetchJsonData(a),e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()},{key:"getBlob",value:function(e,t,c,n){var a="https://raw.githubusercontent.com/".concat(e,"/").concat(t,"/").concat(c,"/").concat(n);window.open(a,n)}},{key:"getBranches",value:function(){var e=Object(m.a)(p.a.mark((function e(t,c){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.github.com/repos/".concat(t,"/").concat(c,"/branches"),e.next=3,M.fetchJsonData(n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.github.com/users/".concat(t),e.next=3,M.fetchJsonData(c);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),c}(M),V=function(e){var t=e.self,c=e.select;return Object(o.jsx)("li",{onClick:function(){c(t.path,"tree")},children:Object(o.jsxs)("div",{className:"li-header folder",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[Object(o.jsx)("div",{className:"ff-icon",children:Object(o.jsx)(f.a,{icon:x.e})}),Object(o.jsx)("span",{className:"name",children:t.name})]}),Object(o.jsxs)("div",{className:"file-metadata",children:[Object(o.jsx)("span",{className:"type",children:t.type}),Object(o.jsx)("span",{className:"last-change",children:t.created_at}),Object(o.jsx)("span",{className:"size",children:t.size})]})]})})},Y=function(e){var t=e.self,c=e.select;return Object(o.jsx)("li",{onClick:function(){c(t.path,"blob")},children:Object(o.jsxs)("div",{className:"li-header folder",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[Object(o.jsx)("div",{className:"ff-icon",children:Object(o.jsx)(f.a,{icon:x.b})}),Object(o.jsx)("span",{className:"name",children:t.name})]}),Object(o.jsxs)("div",{className:"file-metadata",children:[Object(o.jsx)("span",{className:"type",children:t.type}),Object(o.jsx)("span",{className:"last-change",children:t.created_at}),Object(o.jsx)("span",{className:"size",children:t.size})]})]})})},F=c(44),W=function(e){var t=e.self,c=e.select;return Object(o.jsx)("li",{onClick:function(){c(t.name,"repos")},children:Object(o.jsxs)("div",{className:"li-header folder",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[Object(o.jsx)("div",{className:"ff-icon",children:Object(o.jsx)(f.a,{icon:F.a})}),Object(o.jsx)("span",{className:"name",children:t.name})]}),Object(o.jsxs)("div",{className:"file-metadata",children:[Object(o.jsx)("span",{className:"type",children:"     - "}),Object(o.jsx)("span",{className:"last-change",children:t.created_at}),Object(o.jsx)("span",{className:"size",children:t.size})]})]})})},q=function(e){var t=e.data,c=e.select;return t.length?Object(o.jsx)("ul",{id:"files",children:t.map((function(e){switch(e.type){case"tree":return Object(o.jsx)(V,{self:e,select:c},e.name);case"blob":return Object(o.jsx)(Y,{self:e,select:c},e.name);default:return Object(o.jsx)(W,{self:e,select:c},e.name)}}))}):Object(o.jsx)("h1",{style:{textAlign:"center"},children:"No items"})},Q=c(45),K=c.n(Q),X=function(){return Object(o.jsx)("div",{className:K.a.loader,children:"Loading..."})},Z=function(e){var t=e.curPath,c=e.changePath,a=e.isRefresh,s=e.setIsRefresh,r=e.changeBranches,i=e.curBranch,j=e.changeCurBranch,d=Object(n.useContext)(J),b=d.user,u=(d.setUser,Object(n.useState)([])),h=Object(l.a)(u,2),O=h[0],x=h[1],v=Object(n.useState)(""),N=Object(l.a)(v,2),g=N[0],y=N[1],w=Object(n.useRef)(),_=function(e,t){var n=e.tree.filter((function(e){return e.owner===t}));return c(t),n};Object(n.useEffect)((function(){if(w.current){var e=_(w.current,t);x(e),s(!1)}}),[a]);var k=function(e){var t,c=Object(S.a)(e.tree);try{for(c.s();!(t=c.n()).done;){var n=t.value,a=n.path.split("/");n.name=a.pop(),n.owner=a.join("/")}}catch(s){c.e(s)}finally{c.f()}},B=function(e){var t,c=Object(S.a)(e);try{for(c.s();!(t=c.n()).done;){var n=t.value;0===e.indexOf(n)?n.isSelect=!0:n.isSelect=!1}}catch(a){c.e(a)}finally{c.f()}};Object(n.useEffect)((function(){i&&A(g,i.name)}),[i]);var P=H(function(){var e=Object(m.a)(p.a.mark((function e(t){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getRepos(t);case 2:c=e.sent,x(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(l.a)(P,3),U=L[0],R=L[1],z=L[2],E=H(function(){var e=Object(m.a)(p.a.mark((function e(t,c){var n,a,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getBranches(b.username,t);case 2:return n=e.sent,a=c||n[0].name,e.next=6,T.getReposContent(b.username,t,a);case 6:return s=e.sent,k(s),B(n),w.current=s,i=_(s,""),x(i),console.log(n),r(n),e.abrupt("return",a);case 15:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),I=Object(l.a)(E,3),A=I[0],G=I[1],M=I[2];Object(n.useEffect)((function(){b&&U(b.username)}),[b]);return Object(o.jsxs)("div",{className:"file-list-wrapper",children:[Object(o.jsx)("h1",{style:{textAlign:"center",marginBottom:"50px"},children:g}),Object(o.jsxs)("div",{className:"file-list-container",children:[Object(o.jsx)("div",{className:"list-header-wrapper",children:Object(o.jsxs)("div",{className:"list-header-container",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[Object(o.jsx)(D,{id:"folder-back",children:Object(o.jsx)(f.a,{id:"folder-back",icon:C.faUndoAlt,onClick:function(){var e=t.split("/");if(console.log(e),1===e.length&&""===e[0])return U(b.username),y(""),void r([]);e.splice(e.length-1,1);var c=e.join("/"),n=_(w.current,c);x(n)}})}),Object(o.jsx)("span",{className:"header-name",children:"Name"})]}),Object(o.jsxs)("div",{className:"file-metadata",children:[Object(o.jsx)("span",{className:"type",children:"Type of file"}),Object(o.jsx)("span",{className:"last-change",children:"Date"}),Object(o.jsx)("span",{className:"size",children:"Size"})]})]})}),R||G?Object(o.jsx)(X,{}):Object(o.jsx)(q,{data:O,select:function(e,t){if("repos"===t){y(e);var c=A(e);j(c)}else if("tree"===t){var n=_(w.current,e);x(n)}else"blob"===t&&T.getBlob(b.username,g,i.name,e)}}),z&&Object(o.jsx)("h1",{style:{color:"red"},children:z}),M&&Object(o.jsx)("h1",{style:{color:"red"},children:M})]})]})},$=(c(65),c(72)),ee=c(73),te=function(e){var t=e.isOpen,c=e.confirm,a=e.hidden,s=Object(n.useRef)();return Object(o.jsx)("div",{children:Object(o.jsxs)($.a,{show:t,onHide:a,children:[Object(o.jsx)($.a.Header,{children:Object(o.jsx)($.a.Title,{children:"Please enter your GitHub username"})}),Object(o.jsx)($.a.Body,{children:Object(o.jsx)(ee.a,{children:Object(o.jsxs)(ee.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(o.jsx)(ee.a.Label,{children:"GitHub Username"}),Object(o.jsx)(ee.a.Control,{type:"text",placeholder:"Enter username",ref:s})]})})}),Object(o.jsxs)($.a.Footer,{children:[Object(o.jsx)("button",{className:"btn btn-secondary",onClick:a,children:"Cancel"}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){c({username:s.current.value})},children:"Save"})]})]})})},ce=function(){var e=Object(d.h)(),t=Object(n.useContext)(J),c=(t.user,t.setUser),s=a.a.useState(!1),r=Object(l.a)(s,2),i=r[0],j=r[1],b=Object(n.useState)(""),u=Object(l.a)(b,2),h=u[0],O=u[1],f=Object(n.useState)(),x=Object(l.a)(f,2),v=x[0],g=x[1],y=Object(n.useState)([]),w=Object(l.a)(y,2),_=w[0],S=w[1],C=Object(n.useState)(!1),B=Object(l.a)(C,2),P=B[0],L=B[1],U=function(){j(!1)},R=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.username)){e.next=17;break}return e.prev=2,e.next=5,T.getUser(n);case 5:a=e.sent,console.log(a),s={username:a.login,email:a.email,id:a.id,avatar_url:a.avatar_url},c(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:return e.prev=14,U(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(t){return e.apply(this,arguments)}}(),D=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];O(e),t&&L(!0)};return Object(o.jsx)("div",{className:"/home"===e.pathname?"tab-pane fade show active":"tab-pane fade",id:"v-pills-home",role:"tabpanel","aria-labelledby":"v-pills-home-tab",children:Object(o.jsxs)("article",{className:"content",children:[Object(o.jsx)(N,{}),Object(o.jsxs)("div",{className:"content-inner",children:[Object(o.jsx)(k,{showModal:function(){j(!0)},curPath:h,changePath:D,branches:_,switchBranch:function(e){var t=null,c=_.map((function(e){return e.isSelect&&(e.isSelect=!1),e}));c=c.map((function(c){return c.name===e&&(c.isSelect=!0,t=c),c})),console.log("new branches list"),console.log(c),console.log(t),g(t)},curBranch:v}),Object(o.jsx)(Z,{curPath:h,changePath:D,isRefresh:P,setIsRefresh:L,changeBranches:S,curBranch:v,changeCurBranch:g}),Object(o.jsx)(te,{isOpen:i,confirm:R,hidden:U})]})]})})},ne=(c(66),c(67),function(e){var t=e.props,c=e.foreget,a=Object(n.useContext)(J),s=a.user,r=a.setUser,i=Object(d.g)();return Object(o.jsx)("div",{className:"profile-card",children:Object(o.jsxs)("div",{className:t.id===s.id?"profile-card-inner profile__card--active":"profile-card-inner",children:[Object(o.jsx)("div",{className:"close__profile",onClick:function(){return c(t.id)},children:Object(o.jsx)(f.a,{icon:x.f})}),Object(o.jsx)("div",{className:"profile__img__wrapper",children:Object(o.jsx)("img",{src:t.avatar_url,width:"50",height:"50"})}),Object(o.jsx)("div",{className:"w-100 d-flex flex-row justify-content-end align-items-center",children:Object(o.jsxs)("div",{className:"d-flex flex-column justify-content-end",children:[Object(o.jsx)("span",{className:"profile__name",children:t.username}),Object(o.jsx)("div",{className:"d-flex justify-content-end",children:Object(o.jsx)("button",{onClick:function(){r(t),i.push("home")},className:"view-rep-btn",children:"View repositories"})})]})})]})})}),ae=function(){var e=Object(n.useContext)(z),t=e.userList,c=e.setUserList,a=Object(n.useContext)(J),s=(a.user,a.setUser),r=function(e){var n=t.filter((function(t){return t.id!=e}));n.length>0?s(t[0]):s(null),c(n)};return console.log(t),Object(o.jsx)("div",{className:"profile-list",children:t.map((function(e){return Object(o.jsx)(ne,{props:e,foreget:r},e.id)}))})},se=(c(68),[{path:"/home",component:ce,exact:!0},{path:"/profile",component:function(){var e=Object(d.h)(),t=Object(n.useContext)(z),c=t.userList,a=(t.setUserList,Object(d.g)());return Object(o.jsx)("div",{className:"/profile"===e.pathname?"tab-pane fade show active":"tab-pane fade",id:"v-pills-profile",role:"tabpanel","aria-labelledby":"v-pills-profile-tab",children:Object(o.jsxs)("article",{className:"profile-tab",children:[Object(o.jsx)("h1",{className:"h-center",children:"Profiles"}),0===c.length&&Object(o.jsxs)("div",{className:"no-profiles",children:[Object(o.jsx)("h6",{className:"h-no-profiles",children:"No profiles"}),Object(o.jsx)("div",{className:"no-profiles-icon",children:Object(o.jsx)(f.a,{icon:x.g})}),Object(o.jsx)("button",{onClick:function(){return a.push("/home")},className:"btn btn-primary",children:"Go home to add"})]}),Object(o.jsx)(ae,{})]})})},exact:!0},{path:"/pagenotfound",component:function(){var e=Object(d.h)();return Object(o.jsx)("div",{children:Object(o.jsxs)("h1",{style:{color:"red"},children:["You have 404 error. Do you mean this page? (",e.pathname,")"]})})},exact:!0}]),re=function(){return Object(o.jsxs)(d.d,{children:[se.map((function(e){return Object(o.jsx)(d.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(o.jsx)(d.a,{exact:!0,from:"/",to:"/home"}),Object(o.jsx)(d.a,{exact:!0,to:"/pagenotfound"})]})},ie=function(e){var t=e.isOpen,c=e.openHiddenSideBar,n=Object(d.g)(),a=Object(d.h)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{onClick:function(){return c(!1)},className:!0===t?"side_wrapper side_wrapper--show":"side_wrapper"}),Object(o.jsxs)("div",{className:!0===t?"hidden-aside hidden-aside--show":"hidden-aside",children:[Object(o.jsxs)("div",{className:"profile",children:[Object(o.jsx)("div",{className:"profile__img__wrapper",children:Object(o.jsx)("img",{src:"https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",alt:"",width:"50",height:"50"})}),Object(o.jsx)("span",{className:"email",children:"example.layout@gmail.com"})]}),Object(o.jsx)("div",{className:"nav flex-column nav-pills mx-3",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical",children:["home","profile"].map((function(e){return Object(o.jsx)("button",{onClick:function(){return function(e){n.push("/".concat(e)),c(!1)}(e)},className:a.pathname==="/".concat(e)?"nav-link active":"nav-link",id:"v-pills-".concat(e,"-tab"),"data-bs-toggle":"pill","data-bs-target":"#v-pills-".concat(e),type:"button",role:"tab","aria-controls":"v-pills-".concat(e),"aria-selected":a.pathname==="/".concat(e),children:e},e)}))})]})]})};var le=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(l.a)(s,2),d=r[0],h=r[1],p=Object(n.useState)(!1),m=Object(l.a)(p,2),O=m[0],f=m[1],x=function(e){f(e),document.body.style.overflowY=!0===e?"hidden":"auto"};return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userList"));e&&(h(e),e.length>0&&a(e[0]))}),[]),Object(n.useEffect)((function(){c&&(console.log(d),d&&d.length>0?d.filter((function(e){return e.id===c.id})).length>0||h([].concat(Object(i.a)(d),[c])):h([c]))}),[c]),Object(n.useEffect)((function(){d&&localStorage.setItem("userList",JSON.stringify(d))}),[d]),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(z.Provider,{value:{userList:d,setUserList:h},children:Object(o.jsx)(J.Provider,{value:{user:c,setUser:a},children:Object(o.jsxs)(u.a,{children:[Object(o.jsx)(j,{openHiddenSideBar:x}),Object(o.jsx)(ie,{isOpen:O,openHiddenSideBar:x}),Object(o.jsx)("div",{className:"main-wrapper container-fluid d-flex pr-0",children:Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"d-flex w-100",children:[Object(o.jsx)(b,{}),Object(o.jsx)("div",{className:"tab-content",id:"v-pills-tabContent",children:Object(o.jsx)(re,{})})]})})})]})})})})};r.a.render(Object(o.jsx)(le,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.d5c591a5.chunk.js.map