(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},function(e,t,a){e.exports=a.p+"static/media/header4.87601e4e.jpeg"},function(e,t,a){e.exports=a.p+"static/media/404.dd481af3.jpg"},function(e,t,a){e.exports=a(38)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),i=a.n(r),c=(a(30),a(7)),u=a(8),o=a(10),m=a(6),s=a(9),d=a(4),p=(a(31),a(1)),E=a(17),h=a.n(E),b=a(18),f=a.n(b),g=a(19),v=a.n(g),x=a(20),y=a.n(x),j=[h.a,f.a,v.a,y.a],w=function(e){return l.a.createElement("img",{src:j[e.index],alt:"city"})},S=(a(32),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/SPA-with-React-Router",element:l.a.createElement(w,{index:0})}),l.a.createElement(p.b,{path:"/products",element:l.a.createElement(w,{index:1})}),l.a.createElement(p.b,{path:"/contact",element:l.a.createElement(w,{index:2})}),l.a.createElement(p.b,{path:"/admin",element:l.a.createElement(w,{index:3})}),l.a.createElement(p.b,{path:"/login",element:l.a.createElement(w,{index:3})}),l.a.createElement(p.b,{path:"*",element:l.a.createElement(w,{index:0})})))}),q=(a(33),[{name:"Home",path:"/SPA-with-React-Router"},{name:"Products",path:"/products"},{name:"Contact",path:"/contact"},{name:"Admin Panel",path:"/admin"}]),O=function(){var e=q.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement(d.c,{to:e.path},e.name))});return l.a.createElement("nav",{className:"main"},l.a.createElement("ul",null,e))},P=function(e){return l.a.createElement("article",{style:{marginTop:40}},l.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},e.title),l.a.createElement("span",{style:{display:"block",marginBottom:3,fontSize:12}},e.author),l.a.createElement("p",{style:{fontSize:15}},e.text))},R=[{id:1,title:"String Theory",author:"Jon Snow",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:2,title:"Fermie's Paradox",author:"Harry Potter",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:3,title:"Dark Matter and Dark Energy",author:"John Watson",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}],k=function(){var e=R.map(function(e){return l.a.createElement(P,Object.assign({key:e.id},e))});return l.a.createElement("div",{className:"home"},e)},N=function(e){return l.a.createElement("article",{className:"product"},l.a.createElement("h1",null,e.id))},A=function(){var e=Object(p.p)().id;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"Product page"),l.a.createElement(N,{id:e}),l.a.createElement(d.b,{to:"/products"},"Return to products list"))},C=(a(34),["car","bike","motorcycle"]),D=function(){var e=C.map(function(e){return l.a.createElement("li",null,l.a.createElement(d.b,{to:"/product/".concat(e)},e))});return l.a.createElement("div",{className:"products"},l.a.createElement("h2",null,"Products list"),l.a.createElement("div",null,l.a.createElement("ul",null,e)))},F=(a(35),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:""})},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h3",null,"Write to us"),l.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Enter the message..."}),l.a.createElement("button",null,"Send")))}}]),t}(l.a.Component)),J=function(e){return e.permission?l.a.createElement("h3",null,"Good day to you dear admin ^^"):l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"*",element:l.a.createElement(p.a,{replace:!0,to:"/login"})}))},L=function(){return l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"*",element:l.a.createElement(J,{permission:!1})}))},B=a(21),T=a.n(B),U=function(){return l.a.createElement("img",{src:T.a,alt:"Error 404",width:300,height:300})},Y=(a(36),function(){return l.a.createElement("div",{className:"login"},l.a.createElement("label",{htmlFor:""},"Login:",l.a.createElement("br",null),l.a.createElement("input",{type:"text"})),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:""},"Password:",l.a.createElement("br",null),l.a.createElement("input",{type:"password"})),l.a.createElement("br",null),l.a.createElement("button",null,"Sign in"))}),z=function(){return l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/SPA-with-React-Router",element:l.a.createElement(k,null)}),l.a.createElement(p.b,{path:"/products",element:l.a.createElement(D,null)}),l.a.createElement(p.b,{path:"/product/:id",element:l.a.createElement(A,null)}),l.a.createElement(p.b,{path:"/contact",element:l.a.createElement(F,null)}),l.a.createElement(p.b,{path:"/admin",element:l.a.createElement(L,null)}),l.a.createElement(p.b,{path:"/login",element:l.a.createElement(Y,null)}),l.a.createElement(p.b,{path:"*",element:l.a.createElement(U,null)}))},H=function(e){var t=Object(p.p)(),a=t.id,n=t.sth,r=t.prod;return e.main?l.a.createElement("p",null,"You are on ",l.a.createElement("span",null,"main")," page "):e.prod?l.a.createElement("p",null,"You are on ",l.a.createElement("span",null,n)," page, ",l.a.createElement("span",null,r)," page"):l.a.createElement("p",null,"You are on ",l.a.createElement("span",null,a)," page")},W=(a(37),function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Footer"),l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/SPA-with-React-Router",element:l.a.createElement(H,{main:!0})}),l.a.createElement(p.b,{path:"/:id",element:l.a.createElement(H,{main:!1})}),l.a.createElement(p.b,{path:"/:sth/:prod",element:l.a.createElement(H,{main:!1,prod:!0})})))}),G=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{basename:"/SPA-with-React-Router"},l.a.createElement("div",{className:"app"},l.a.createElement("header",null,l.a.createElement(S,null)),l.a.createElement("main",null,l.a.createElement("aside",null,l.a.createElement(O,null)),l.a.createElement("section",{className:"blog"},l.a.createElement(z,null))),l.a.createElement("footer",null,l.a.createElement(W,null))))}}]),t}(n.Component);i.a.render(l.a.createElement(G,null),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.d3f47de5.chunk.js.map