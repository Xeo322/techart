(this.webpackJsonptechart=this.webpackJsonptechart||[]).push([[0],{31:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(15),s=c.n(i),a=(c(31),c(3)),r="INCREMENT_COUNT",l="BUILDING_TYPE",j="BUILDING_HEIGHT",u="MATERIAL_TYPE",b="BUILDING_SIZE",o="CLEAR_STORE",d="GET_DATA";function h(){return{type:r}}var O=c(9),x=c(1),p=function(e){var t=e.cancel,c=e.dispatch,n=e.next;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("div",{className:"title",children:Object(x.jsx)("p",{children:"\u0427\u0442\u043e \u0431\u0443\u0434\u0435\u043c \u0441\u0442\u0440\u043e\u0438\u0442\u044c"})}),Object(x.jsx)("div",{className:"content",children:Object(x.jsxs)("ul",{onClick:function(e){return c((t=e.target.value,function(e){e({type:l,payload:t}),e(h())}));var t},children:[Object(x.jsx)(O.b,{to:"/height",children:Object(x.jsx)("li",{value:"1",children:"\u0416\u0438\u043b\u043e\u0439 \u0434\u043e\u043c"})}),Object(x.jsx)(O.b,{to:"/material",children:Object(x.jsx)("li",{value:"2",children:"\u0413\u0430\u0440\u0430\u0436"})})]})})]}),Object(x.jsxs)("div",{className:"button_group",children:[Object(x.jsx)("button",{onClick:function(){return t()},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(x.jsx)("button",{onClick:function(){return n("/material")},children:"\u0414\u0430\u043b\u0435\u0435"})]})]})},f=c(12),v=function(e){var t=e.cancel,c=e.dispatch,i=e.history,s=Object(n.useState)(),a=Object(f.a)(s,2),r=a[0],l=a[1],u=function(e){c(function(e){return function(t){t({type:j,payload:e}),t(h())}}(e)),i.push("/material")};return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("div",{className:"title",children:Object(x.jsx)("p",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u0442\u0430\u0436\u0435\u0439:(\u0447\u0438\u0441\u043b\u043e)"})}),Object(x.jsx)("div",{className:"content flex",children:Object(x.jsx)("input",{type:"text",onChange:function(e){return t=Number(e.target.value),void l(t);var t}})})]}),Object(x.jsxs)("div",{className:"button_group",children:[Object(x.jsx)("button",{onClick:function(){return t()},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(x.jsx)("button",{onClick:function(){return u(r)},children:"\u0414\u0430\u043b\u0435\u0435"})]})]})},m=c(10),g=function(e){var t=e.cancel,c=e.dispatch,n=e.next,i=Object(m.c)((function(e){return e.building}));return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("div",{className:"title",children:Object(x.jsx)("p",{children:"\u0418\u0437 \u0447\u0435\u0433\u043e \u0431\u0443\u0434\u0435\u043c \u0441\u0442\u0440\u043e\u0438\u0442\u044c"})}),Object(x.jsx)("div",{className:"content",children:Object(x.jsxs)("ul",{onClick:function(e){return c((t=e.target.value,function(e){e({type:u,payload:t}),e(h())}));var t},children:[Object(x.jsx)(O.b,{to:"/size",children:Object(x.jsx)("li",{value:"2",children:"\u0428\u043b\u0430\u043a\u043e\u0431\u043b\u043e\u043a"})}),Object(x.jsx)(O.b,{to:"/size",children:1===i?Object(x.jsx)("li",{value:"1",children:"\u041a\u0438\u0440\u043f\u0438\u0447"}):Object(x.jsx)("li",{value:"4",children:"\u041c\u0435\u0442\u0430\u043b\u043b"})}),Object(x.jsx)(O.b,{to:"/size",children:1===i?Object(x.jsx)("li",{value:"3",children:"\u0414\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u044b\u0439 \u0431\u0440\u0443\u0441"}):Object(x.jsx)("li",{value:"5",children:"\u0421\u0435\u043d\u0434\u0432\u0438\u0447-\u043f\u0430\u043d\u0435\u043b\u0438"})})]})})]}),Object(x.jsxs)("div",{className:"button_group",children:[Object(x.jsx)("button",{onClick:function(){return t()},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(x.jsx)("button",{onClick:function(){return n("/size")},children:"\u0414\u0430\u043b\u0435\u0435"})]})]})},N=c(4),y=function(e){var t=e.cancel,c=e.dispatch,i=e.history,s=Object(n.useState)({sizeX:null,sizeY:null}),a=Object(f.a)(s,2),r=a[0],l=a[1],j=function(){var e;c((e=r,function(t){t({type:b,payload:e})})),i.push("/final")};return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("div",{className:"title",children:Object(x.jsx)("p",{children:"\u0420\u0430\u0437\u043c\u0435\u0440 \u0441\u0442\u0435\u043d(\u0412 \u043c\u0435\u0442\u0440\u0430\u0445)"})}),Object(x.jsxs)("div",{className:"content flex",children:[Object(x.jsx)("input",{type:"text",placeholder:"\u0428\u0438\u0440\u0438\u043d\u0430",onChange:function(e){return l(Object(N.a)(Object(N.a)({},r),{},{sizeX:Number(e.target.value)}))}}),Object(x.jsx)("span",{children:"\u2715"}),Object(x.jsx)("input",{type:"text",placeholder:"\u0412\u044b\u0441\u043e\u0442\u0430",onChange:function(e){return l(Object(N.a)(Object(N.a)({},r),{},{sizeY:Number(e.target.value)}))}})]})]}),Object(x.jsxs)("div",{className:"button_group",children:[Object(x.jsx)("button",{onClick:function(){return t()},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(x.jsx)("button",{onClick:function(){return j()},children:"\u0414\u0430\u043b\u0435\u0435"})]})]})},z=c(22),_=c.n(z),E=c(25),k=(c(39),function(){return Object(x.jsxs)("div",{className:"spinner",children:[Object(x.jsx)("span",{className:"spinner-inner-1"}),Object(x.jsx)("span",{className:"spinner-inner-2"}),Object(x.jsx)("span",{className:"spinner-inner-3"})]})}),C=function(e){var t=e.cancel,c=Object(n.useState)({result:"",message:"",loading:!0}),i=Object(f.a)(c,2),s=i[0],a=i[1],r=Object(m.c)((function(e){return{building:e.building,height:e.height,material:e.material,sizeX:e.sizeX,sizeY:e.sizeY}}));return Object(n.useEffect)((function(){(function(){var e=Object(E.a)(_.a.mark((function e(){var t,c,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://data.techart.ru/lab/json/?building=".concat(r.building,"&height=").concat(2===r.building?1:r.height,"&material=").concat(r.material,"&sizex=").concat(r.sizeX,"0&sizey=").concat(r.sizeY));case 2:return t=e.sent,e.next=5,t;case 5:return c=e.sent,e.next=8,c.json();case 8:n=e.sent,setTimeout((function(){a(Object(N.a)(Object(N.a)({},s),{},{result:n.result,message:n.message,loading:!1}))}),2e3);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(x.jsx)("div",{children:s.loading?Object(x.jsx)(k,{}):Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("div",{className:"title",children:"ok"===s.result?Object(x.jsx)("p",{children:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e"}):Object(x.jsx)("p",{children:"\u041e\u0448\u0438\u0431\u043a\u0430"})}),Object(x.jsx)("div",{className:"content flex",children:Object(x.jsx)("p",{children:s.message})})]}),Object(x.jsx)("button",{className:"button_single",onClick:function(){return t()},children:"\u041d\u043e\u0432\u044b\u0439 \u0440\u0430\u0441\u0447\u0451\u0442"})]})})};var I=function(){window.onpopstate=function(){e.goForward()};var e=Object(a.f)(),t=Object(m.b)(),c=Object(m.c)((function(e){return e.count})),i=Object(m.d)().getState(),s=function(){t({type:o}),e.push("/")},r=function(c){t(h()),e.push(c)};return Object(n.useEffect)((function(){if(sessionStorage.getItem("data")){var e=JSON.parse(sessionStorage.getItem("data"));t(function(e){return{type:d,payload:e}}(e))}}),[]),Object(n.useEffect)((function(){sessionStorage.setItem("data",JSON.stringify(i))}),[i]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("header",{className:"header",children:Object(x.jsx)("h1",{children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0446\u0435\u043d\u044b \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0439"})}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("h5",{className:"step",children:["\u0428\u0430\u0433 ",c]}),Object(x.jsxs)(a.c,{children:[Object(x.jsx)(a.a,{exact:!0,path:"/",children:Object(x.jsx)(p,{cancel:s,dispatch:t,next:r,history:e})}),Object(x.jsx)(a.a,{path:"/height",children:Object(x.jsx)(v,{cancel:s,dispatch:t,history:e})}),Object(x.jsx)(a.a,{path:"/material",children:Object(x.jsx)(g,{cancel:s,dispatch:t,next:r,history:e})}),Object(x.jsx)(a.a,{path:"/size",children:Object(x.jsx)(y,{cancel:s,dispatch:t,history:e})}),Object(x.jsx)(a.a,{path:"/final",children:Object(x.jsx)(C,{cancel:s})})]})]})]})},S=c(26),T=c(13),X={count:1,building:null,height:null,material:null,sizeX:null,sizeY:null},w=Object(T.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.payload;case l:return Object(N.a)(Object(N.a)({},e),{},{building:t.payload});case j:return Object(N.a)(Object(N.a)({},e),{},{height:t.payload});case u:return Object(N.a)(Object(N.a)({},e),{},{material:t.payload});case b:return Object(N.a)(Object(N.a)({},e),{},{sizeX:t.payload.sizeX,sizeY:t.payload.sizeY});case r:return Object(N.a)(Object(N.a)({},e),{},{count:e.count+1});case o:return Object(N.a)(Object(N.a)({},e),{},{count:1,building:null,height:null,material:null,sizeX:null,sizeY:null});default:return e}}),Object(T.c)(Object(T.a)(S.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));s.a.render(Object(x.jsx)(m.a,{store:w,children:Object(x.jsx)(O.a,{children:Object(x.jsx)(I,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.910d8eb4.chunk.js.map