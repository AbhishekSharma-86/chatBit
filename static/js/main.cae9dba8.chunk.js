(this["webpackJsonpchat-bit"]=this["webpackJsonpchat-bit"]||[]).push([[0],{195:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){},385:function(e,t,n){},386:function(e,t,n){},387:function(e,t,n){"use strict";n.r(t);var c,s=n(0),a=n(173),o=n.n(a),r=n(73),i=n(6),j=n(32),l=(n(195),n(1)),u=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),o=Object(j.a)(a,2),i=o[0],u=o[1];return Object(l.jsx)("div",{className:"joinOuterContainer",children:Object(l.jsxs)("div",{className:"joinInnerContainer",children:[Object(l.jsx)("h2",{className:"heading",children:"Join Room"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return c(e.target.value)}})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})}),Object(l.jsx)(r.b,{onClick:function(e){return n&&i?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(i),children:Object(l.jsx)("button",{className:"button",type:"submit",children:"Join Now"})})]})})},m=n(190),b=n(175),h=n.n(b),d=n(176),O=n.n(d),x=(n(235),n.p+"static/media/companyLogo.43bfb05d.png"),f=(n(236),function(e){var t=e.room;return Object(l.jsxs)("div",{className:"infoBar",children:[Object(l.jsxs)("div",{className:"leftInnerContainer",children:[Object(l.jsx)("img",{className:"companyLogo",src:x,alt:"chatbit-logo"}),Object(l.jsx)("h3",{children:t})]}),Object(l.jsx)("div",{className:"rightInnerContainer",children:Object(l.jsx)("a",{href:"https://toth2000.github.io/chatBit/",children:Object(l.jsx)("img",{src:"",alt:"closeImg"})})})]})}),g=(n(237),function(e){var t=e.message,n=e.setMessage,c=e.sendMessage;return Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("input",{value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?c(e):null}}),Object(l.jsx)("button",{className:"sendButton",onClick:function(e){return c(e)},children:"Send"})]})}),p=n(189),v=(n(385),n(110)),N=n.n(v),C=(n(386),function(e){var t=e.message,n=t.user,c=t.text,s=e.name.trim().toLowerCase();return n===s?Object(l.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(l.jsx)("p",{className:"sentText pr-10",children:s}),Object(l.jsx)("div",{className:"messageBox backgroundBlue",children:Object(l.jsx)("p",{className:"messageText colorWhite",children:N.a.emojify(c)})})]}):Object(l.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(l.jsx)("p",{className:"sentText pl-10",children:n}),Object(l.jsx)("div",{className:"messageBox backgroundLight",children:Object(l.jsx)("p",{className:"messageText colorDark",children:N.a.emojify(c)})})]})}),y=function(e){var t=e.messages,n=e.name;return Object(l.jsx)(p.a,{className:"messages",children:t.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(C,{message:e,name:n})},t)}))})},k=function(e){var t=e.location,n=Object(s.useState)(""),a=Object(j.a)(n,2),o=a[0],r=a[1],i=Object(s.useState)(""),u=Object(j.a)(i,2),b=u[0],d=u[1],x=Object(s.useState)(""),p=Object(j.a)(x,2),v=p[0],N=p[1],C=Object(s.useState)([]),k=Object(j.a)(C,2),S=k[0],B=k[1],I="https://toth2000-chat-bit.herokuapp.com/";Object(s.useEffect)((function(){var e=h.a.parse(t.search),n=e.name,s=e.room;c=O()(I),r(n),d(s),console.log("name: ".concat(n," and room: ").concat(s)),c.emit("join",{name:n,room:s})}),[I,t.search]),Object(s.useEffect)((function(){c.on("message",(function(e){B([].concat(Object(m.a)(S),[e]))}))}),[S]);return console.log(v,S),Object(l.jsx)("div",{className:"outerContainer",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(f,{room:b}),Object(l.jsx)(y,{messages:S,name:o}),Object(l.jsx)(g,{message:v,setMessage:N,sendMessage:function(e){e.preventDefault(),v&&(console.log("Message in Client",v),c.emit("sendMessage",v,(function(e){return N("")})))}})]})})},S=function(){return Object(l.jsxs)(r.a,{basename:"/chatBit",children:[Object(l.jsx)(i.a,{path:"/",exact:!0,component:u}),Object(l.jsx)(i.a,{path:"/chat",component:k})]})};o.a.render(Object(l.jsx)(S,{}),document.querySelector("#root"))}},[[387,1,2]]]);
//# sourceMappingURL=main.cae9dba8.chunk.js.map