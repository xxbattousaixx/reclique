(this["webpackJsonpmy-app-reclique"]=this["webpackJsonpmy-app-reclique"]||[]).push([[0],{108:function(e,s,r){},109:function(e,s,r){},168:function(e,s,r){"use strict";r.r(s);var t=r(1),c=r.n(t),n=r(99),j=r.n(n),i=(r(108),r(9)),O=(r(109),r(169)),b=r(170),a=r(101),l=r(172),x=r(100),o=r.n(x),d=(r(34),r(0));function h(e){return Object(d.jsx)(d.Fragment,{children:function(e){var s=e.questions,r=e.page;return s.length>0?s.map((function(e,s){return s===r?(console.log(s),console.log(e),Object(d.jsxs)("div",{id:"cq",className:"q",children:[Object(d.jsx)("h1",{className:"qt",children:e.title},"title"),Object(d.jsx)("h3",{className:"qd",children:e.description},"desc")]},s)):""})):Object(d.jsx)("h3",{children:"No Questions"})}(e)})}function g(e){return Object(d.jsx)(d.Fragment,{children:function(e){var s=e.questions,r=e.sub,t=e.res,c=(e.page,[]);return r.length>0?s.map((function(e,s){t=[{when:"",type:"",Dr:"",Cr:""},{when:"",type:"",Dr:"",Cr:""},{when:"",type:"",Dr:"",Cr:""},{when:"",type:"",Dr:"",Cr:""}];for(var n=0,j=function(j){if(console.log(JSON.stringify(r[s])),JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(e.correct_answers[s])).entries[j])).when)===JSON.stringify(r[s].when)?t[s].when="correct":t[s].when="incorrect",JSON.stringify(r[s].type)===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(e.correct_answers[j])).entries[n])).type)?t[s].type="correct":t[s].type="incorrect",!JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(e.correct_answers[s])).entries[j])).Dr))return r[s].Cr===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(e.correct_answers[s])).entries[j])).Cr)?(t[s].Cr="correct",n++):(t[s].Cr="incorrect",n++),"correct"!==t[s].Cr&&"correct"!==t[s].Cr||"correct"!==t[s].Cr||"correct"!==t[s].Cr||(c[s]="correct",s),{v:Object(d.jsxs)("div",{className:"answers",id:"results",children:[Object(d.jsx)(O.a,{fluid:!0,children:Object(d.jsxs)(b.a,{xs:3,md:3,lg:3,sm:3,children:[Object(d.jsxs)(a.a,{xs:3,md:3,lg:3,sm:3,children:[Object(d.jsx)("h3",{className:"qt",children:JSON.stringify(r[s])},"n5"),Object(d.jsx)("h3",{className:"qt",children:c[s]},"n6"),Object(d.jsx)("h3",{className:"qt",children:JSON.stringify(JSON.parse(JSON.stringify(e.correct_answers[s])).entries[j])},"n7")]}),Object(d.jsx)("h3",{className:"qt",children:t.map((function(s,t){return Object(d.jsx)(a.a,{xs:3,md:3,lg:3,sm:3,children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("h4",{children:["Date--",Object(d.jsx)("br",{})," Answer: ",JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(e.correct_answers[t])).entries[j])).when),Object(d.jsx)("br",{})," vs. ",Object(d.jsx)("br",{})," Your answer: ",JSON.stringify(r[t].when)]}),Object(d.jsxs)("h4",{children:["Type--",Object(d.jsx)("br",{})," Answer: ",JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(e.correct_answers[t])).entries[j])).type),Object(d.jsx)("br",{})," vs. ",Object(d.jsx)("br",{})," Your answer: ",JSON.stringify(r[t].type)]}),Object(d.jsxs)("h4",{children:["Dr--",Object(d.jsx)("br",{})," Answer: ",JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(e.correct_answers[t])).entries[j])).Dr),Object(d.jsx)("br",{})," vs.",Object(d.jsx)("br",{})," Your answer: ",r[t].Dr]}),Object(d.jsxs)("h4",{children:["Cr--",Object(d.jsx)("br",{})," Answer: ",JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(e.correct_answers[t])).entries[j])).Cr),Object(d.jsx)("br",{})," vs.",Object(d.jsx)("br",{})," Your answer: ",r[t].Cr]})]})},t)}))},"n9"),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("h4",{})]})})," "]},s)};r[s].Dr===JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(e.correct_answers[s])).entries[j])).Dr)?(t[s].Dr="correct",n++):(t[s].Dr="incorrect",n++)},i=0;i<JSON.parse(JSON.stringify(e.correct_answers[s])).entries.length;i++){var l=j(i);if("object"===typeof l)return l.v}})):Object(d.jsx)("h3",{children:"No Questions"})}(e)})}var u=r(171);var m=function(e){var s=e.questions,r=e.updateInput;return Object(d.jsx)(d.Fragment,{children:function(e){if(s.length>0)return s.map((function(s,t){console.log(t),console.log(s);for(var c=0;c<Object.keys(s.correct_answers[t].entries).length;c++)return Object(d.jsxs)("div",{id:"box",className:"b",children:[Object(d.jsxs)(a.a,{xs:3,md:3,lg:3,sm:3,children:[Object(d.jsx)(u.a.Control,{ref:e.inputRef,name:"date",value:"",id:c,type:"date",onChange:r},c)," "]}),Object(d.jsxs)(a.a,{xs:3,md:3,lg:3,sm:3,children:["    ",Object(d.jsxs)(u.a.Select,{name:"type",defaultValue:"",id:c,onChange:r,children:[Object(d.jsx)("option",{}),Object(d.jsx)("option",{children:"revenue"}),Object(d.jsx)("option",{children:"deferred"}),Object(d.jsx)("option",{children:"cash"}),Object(d.jsx)("option",{children:"receivable"}),Object(d.jsx)("option",{children:"contra"}),Object(d.jsx)("option",{children:"system-credit"})]},c)]}),Object(d.jsxs)(a.a,{xs:3,md:3,lg:3,sm:3,children:["  ",Object(d.jsx)(u.a.Control,{id:c,name:"Dr",onChange:r,defaultValue:"",type:"text",placeholder:"$$$"},c)]}),Object(d.jsxs)(a.a,{xs:3,md:3,lg:3,sm:3,id:"vl",children:["  ",Object(d.jsx)(u.a.Control,{id:c,name:"Cr",onChange:r,defaultValue:"",type:"text",placeholder:"$$$"},c)]})]})}))}(e)})};function f(){var e=0,s=Object(t.useState)(""),r=Object(i.a)(s,2),n=r[0],j=r[1],x=Object(t.useState)(""),u=Object(i.a)(x,2),f=u[0],p=u[1],N=Object(t.useState)(""),S=Object(i.a)(N,2),y=S[0],J=S[1],v=Object(t.useState)(""),w=Object(i.a)(v,2),C=w[0],D=w[1],q=Object(t.useState)(""),_=Object(i.a)(q,2),k=(_[0],_[1]),A=c.a.createRef(),$=[{date:"",type:"",Dr:"",Cr:""},{date:"",type:"",Dr:"",Cr:""},{date:"",type:"",Dr:"",Cr:""},{date:"",type:"",Dr:"",Cr:""}];Object(t.useEffect)((function(){F(),p(e)}),[e]);var F=function(){o.a.get("https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json").then((function(e){var s=e.data;j(s)})).catch((function(e){return console.error("Error: "+{error:e})}))};return Object(d.jsxs)("div",{className:"App",id:"con1",children:[Object(d.jsx)(h,{questions:n,page:f},"1"),Object(d.jsx)(O.a,{fluid:!0,children:Object(d.jsxs)(O.a,{id:"cf",fluid:!0,children:[Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)(b.a,{xs:3,md:3,lg:3,sm:3,children:[Object(d.jsx)(a.a,{xs:3,md:3,lg:3,sm:3}),Object(d.jsx)(a.a,{xs:3,md:3,lg:3,sm:3}),Object(d.jsx)(a.a,{xs:3,md:3,lg:3,sm:3,children:"\xa0"}),Object(d.jsx)(a.a,{xs:3,md:3,lg:3,sm:3,id:"vl",children:"\xa0"})]}),Object(d.jsxs)(b.a,{xs:3,md:3,lg:3,sm:3,id:"bb",children:[Object(d.jsx)(a.a,{xs:3,md:3,lg:3,sm:3}),Object(d.jsx)(a.a,{xs:3,md:3,lg:3,sm:3}),Object(d.jsx)(a.a,{xs:3,md:3,lg:3,sm:3,children:" Dr"}),Object(d.jsx)(a.a,{xs:3,md:3,lg:3,sm:3,id:"vl",children:"Cr"})]}),Object(d.jsxs)(b.a,{xs:3,md:3,lg:3,sm:3,children:[Object(d.jsx)(a.a,{xs:3,md:3,lg:3,sm:3}),Object(d.jsx)(a.a,{xs:3,md:3,lg:3,sm:3}),Object(d.jsx)(a.a,{xs:3,md:3,lg:3,sm:3,children:"\xa0"}),Object(d.jsx)(a.a,{xs:3,md:3,lg:3,sm:3,id:"vl",children:"\xa0"})]})]},"con")}),Object(d.jsx)(O.a,{fluid:!0,children:Object(d.jsx)(m,{inputRef:function(e){return e},updateInput:k,questions:n,p:e})}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)(O.a,{fluid:!0,children:[Object(d.jsxs)(b.a,{xs:4,md:4,lg:4,sm:4,children:[Object(d.jsx)(a.a,{xs:2,md:2,lg:2,sm:2}),Object(d.jsx)(a.a,{xs:4,md:4,lg:4,sm:4,children:Object(d.jsx)(l.a,{onClick:function(s){e>0?(J($),--e<=n.length-1&&e>=0&&p(e)):0===e&&p(e)},children:"Previous"})}),Object(d.jsx)(a.a,{xs:4,md:4,lg:4,sm:4,children:Object(d.jsx)(l.a,{onClick:function(s){e<n.length-1?(J($),++e>=0&&e<n.length&&(J($),p(e),e--)):e===n.length-1&&p(e)},children:"Next"})}),Object(d.jsx)(a.a,{xs:2,md:2,lg:2,sm:2}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}),Object(d.jsx)(b.a,{xs:12,md:12,lg:12,sm:12,children:Object(d.jsx)(a.a,{xs:12,md:12,lg:12,sm:12,children:Object(d.jsx)(l.a,{onClick:function(e){!function(){var e=A;console.log("FAIL"),console.log($),J($),console.log(e),console.log(y)}(),D("")},children:"Submit"})})})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("hr",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(g,{sub:y,res:C,page:f,questions:n},"2")]})}var p=r(102),N=r(4);r(167);j.a.render(Object(d.jsx)(p.a,{children:Object(d.jsx)(N.c,{children:Object(d.jsx)(N.a,{path:"/",element:Object(d.jsx)(f,{})})})}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.045baedb.chunk.js.map