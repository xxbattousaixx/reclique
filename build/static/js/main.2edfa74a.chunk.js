(this["webpackJsonpmy-app-reclique"]=this["webpackJsonpmy-app-reclique"]||[]).push([[0],{112:function(e,t,r){},113:function(e,t,r){},170:function(e,t,r){"use strict";r.r(t);var s=r(1),c=r.n(s),n=(r(106),r(112),r(103)),j=r(4),i=r(8),o=(r(113),r(171)),a=r(172),l=r(102),x=r(174),O=r(56),d=r.n(O),u=(r(34),r(0));function h(e){var t=e.questions,r=e.page;return Object(u.jsx)(u.Fragment,{children:t.map((function(e,t){return t===r?(console.log(t),console.log(e),Object(u.jsxs)("div",{id:"cq",children:[Object(u.jsx)("h1",{children:e.title},"title${i}"),Object(u.jsx)("h3",{children:e.description},"desc${i}")]},"q${i}")):""}))})}function m(e){return Object(u.jsx)(u.Fragment,{children:function(e){var t=e.questions,r=e.sub,s=e.ans,c=e.getAns,n=e.res,j=e.getRes,b=[];return t.map((function(e,i){for(var a=[],x=function(t){a.push([t]),b.push([t]);for(var i=0;i<Object.keys(e.correct_answers.entries).length-1;i++)return j(),{v:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(l.a,{xs:3,md:3,lg:3,sm:3,children:[Object(u.jsx)("p",{className:"qt",children:n},"${y}"),Object(u.jsx)("p",{children:x[t]}),Object(u.jsx)("br",{})]},"col${y}"),Object(u.jsx)(l.a,{xs:1,md:1,lg:1,sm:1},"col${c}")]})};a[t].push([]);for(var x=[],O=0;O<Object.keys(e.correct_answers.entries).length-1;O++){b[t][y]=[],(Cr1||Dr1)&&t1&&d1&&a[t][y].push({when:d1.slice(2,7),type:t1,Dr:Dr,Cr:Cr}),getSub(a);var d=a;d[t][y]={when:e.correct_answers.entries[O].when,type:e.correct_answers.entries[O].type,Dr:e.correct_answers.entries[O].Dr,Cr:e.correct_answers.entries[O].Cr},c(d);var h=n,g=a;a[t][y].when==h[t][y].when?(g[t][y].when="correct",b[t][y].when="correct"):(g[t][y].type=thisbox,a[t].type="incorrect"),a[t][y].type==h[t][y].type?(g[t][y].Dr="correct",a[t][y].Dr="correct",b[t][y].Dr="correct"):(a[t][y].Dr==h[t][y].Dr&&(g[t][y].Dr="correct",a[t][y].Dr="correct",b[t][y].Dr="correct"),a[t][y].Cr==h[t][y].Cr&&(b[t][y].Cr="correct"),"correct"!==g[t][y].Cr&&"correct"!==g[t].Dr||"correct"!==g[t].type||"correct"!==g[t].when||(b[t][y]="correct"),"correct"==b[t][y]&&(x[t]="correct"))}if(s[t][y].length>0)return{v:Object(u.jsxs)(o.a,{fluid:!0,children:[Object(u.jsx)("h4",{className:"qt",children:n.map((function(e,c){return Object(u.jsx)(l.a,{xs:2,md:2,lg:2,sm:2,children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("h4",{children:["Date--",Object(u.jsx)("br",{})," Answer:",s[{c:t}].entries[{y:y}].when,Object(u.jsx)("br",{})," vs.",Object(u.jsx)("br",{})," Your answer: ",r[{c:t}][{y:y}].when]}),Object(u.jsxs)("h4",{children:["Type--",Object(u.jsx)("br",{})," Answer:",s[{c:t}].entries[{y:y}].type,Object(u.jsx)("br",{})," vs.",Object(u.jsx)("br",{})," Your answer: ",r[{i:c}][{c:t}].type]}),Object(u.jsxs)("h4",{children:["Dr--",Object(u.jsx)("br",{})," Answer:",s[{c:t}].entries[{y:y}].Dr,Object(u.jsx)("br",{})," vs.",Object(u.jsx)("br",{})," Your answer:",r[{c:t}][{y:y}].Dr]}),Object(u.jsxs)("h4",{children:["Cr--",Object(u.jsx)("br",{})," Answer:",s[{c:t}].entries[{y:y}].Cr,Object(u.jsx)("br",{})," vs.",Object(u.jsx)("br",{})," Your answer:",r[{c:t}][{y:y}].Cr]})]})},"col${i}")}))},"n9"),Object(u.jsx)("br",{})]},"overview")}},O=0;O<Object.keys(t).length-1;O++){var d=x(O);if("object"===typeof d)return d.v}}))}(e)})}var p=r(173);function f(e){return Object(u.jsx)(u.Fragment,{children:function(e){e.questions2,e.d1,e.getD1,e.t1,e.getT1,e.dr1,e.getDr1,e.cr1,e.getCr1,e.sub,e.GetSub;return questions.map((function(e){for(var t=0;t<Object.keys(e.correct_answers).length-1;t++)for(var r=0;r<Object.keys(e.correct_answers[t]).length-1;r++)r>g&&(g=r);for(var s=0;s<g;s++)return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(a.a,{xs:3,md:3,lg:3,sm:3,children:[Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3,children:Object(u.jsx)(p.a.Control,{name:"date",value:"",type:"date",onChange:function(e){return setD1(e.target.value)}},"date${i}")},"col2${i}"),Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3,children:Object(u.jsxs)(p.a.Select,{name:"type",defaultValue:"",onChange:function(e){return setT1(e.target.value)},children:[Object(u.jsx)("option",{}),Object(u.jsx)("option",{children:"revenue"}),Object(u.jsx)("option",{children:"deferred"}),Object(u.jsx)("option",{children:"cash"}),Object(u.jsx)("option",{children:"receivable"}),Object(u.jsx)("option",{children:"contra"}),Object(u.jsx)("option",{children:"system-credit"})]},"type${i}")},"col3${i}")," ",Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3,children:Object(u.jsx)(p.a.Control,{name:"Dr",onChange:function(e){return setDr1(e.target.value)},defaultValue:"",type:"text",placeholder:"$$$"},"dr${i}")},"col4${i}"),Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3,id:"vl",children:Object(u.jsx)(p.a.Control,{name:"Cr",onChange:function(e){return setCr1(e.target.value)},defaultValue:"",type:"text",placeholder:"$$$"},"cr${i}")},"col5${i}")]},"row1${i}")});return Object(u.jsx)(u.Fragment,{})}))}(e)})}function v(){var e=c.a.useState="now",t=Object(i.a)(e,2),r=(t[0],t[1]),n=c.a.useState="none",j=Object(i.a)(n,2),O=(j[0],j[1]),g=c.a.useState="0",y=Object(i.a)(g,2),p=(y[0],y[1]),v=c.a.useState="0",w=Object(i.a)(v,2),C=(w[0],w[1]),D=c.a.useState="",$=Object(i.a)(D,2),S=$[0],q=$[1],_=c.a.useState=[],k=Object(i.a)(_,2),F=k[0],N=k[1],A=c.a.useState=[],J=Object(i.a)(A,2),T=J[0],V=J[1],Y=c.a.useState=[],E=Object(i.a)(Y,2),R=E[0],G=E[1],I=c.a.useState({}),P=Object(i.a)(I,2),z=P[0],B=P[1],H=c.a.useState={},K=Object(i.a)(H,2),L=K[0],M=K[1],Q=c.a.useState={},U=Object(i.a)(Q,2),W=U[0],X=U[1],Z=0;Object(s.useEffect)((function(){re(),q(Z)}),[Z]);var ee=function(){for(var e=[],t=[],r=[],s=function(s){t.push([]),r.push([]),e.push([]);for(var c=0;c<Object.keys(z[s].correct_answers).length-1;c++)t[s]=z[s].correct_answers.entries;r[s]=[],r[s].push([]),t[s]=[],t[s].push([]),e[s]=[],e[s].push([]);for(var n=0;n<Object.keys(z[s].correct_answers[b].entries).length-1;n++)t[s][b]=z[Z].correct_answers.entries[b],console.log(t[s][b]),e[s][b][n]="wrong.",G(t),N(r),z.map((function(e,t){return console.log(R),V([[[]]]),R[s][b].entries.when===F[s][b].entries.when&&(T[s][b].entries.when="correct"),R[s][b].entries.type===F[s][b].entries.type&&(T[s][b].entries.type="correct"),R[b].entries.Dr===F[s][b].entries.Dr&&(T[s][b].entries.Dr="correct"),R[s][b].entries.Cr===F[s][b].entries.Cr&&(T[s][b].entries.Cr="correct"),console.log("answer in this location"),console.log(JSON.stringify(R)),console.log("vs."),console.log(JSON.stringify(F)),console.log("output of current results"),console.log(JSON.stringify(T)),console.log(e),Object(u.jsx)(u.Fragment,{})}))},c=0;c<Object.keys(z).length-1;c++)s(c)},te=function(){m.scrollIntoView({behavior:"smooth"})},re=function(){d.a.get("https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json").then((function(e){var t=e.data;B(t),M(t),X(t)})).catch((function(e){return console.error("Error: ".concat({error:e}))}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{questions:z,page:S},"questions${page}"),Object(u.jsxs)(o.a,{id:"cf",fluid:!0,children:[Object(u.jsx)("br",{}),Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)(a.a,{xs:3,md:3,lg:3,sm:3,children:[Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3}),Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3}),Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3,children:"\xa0"}),Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3,id:"vl",children:"\xa0"})]}),Object(u.jsxs)(a.a,{xs:3,md:3,lg:3,sm:3,id:"bb",children:[Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3}),Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3}),Object(u.jsxs)(l.a,{xs:3,md:3,lg:3,sm:3,children:[" ","Dr"]}),Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3,id:"vl",children:"Cr"})]}),Object(u.jsxs)(a.a,{xs:3,md:3,lg:3,sm:3,children:[Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3}),Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3}),Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3,children:"\xa0"}),Object(u.jsx)(l.a,{xs:3,md:3,lg:3,sm:3,id:"vl",children:"\xa0"})]})]},"head${page}"),Object(u.jsx)(o.a,{fluid:!0,children:Object(u.jsx)("div",{id:"box",className:"b",children:Object(u.jsx)(f,{getSub:N,sub:F,questions:L,p:Z,getD1:r,getT1:O,getdr1:p,getCr1:C},"boxes")},"box${p}")},"boxes"),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{fluid:!0,children:Object(u.jsxs)(a.a,{xs:4,md:4,lg:4,sm:4,children:[Object(u.jsx)(l.a,{xs:2,md:2,lg:2,sm:2}),Object(u.jsx)(l.a,{xs:4,md:4,lg:4,sm:4,children:Object(u.jsx)(x.a,{onClick:function(e){Z>0?--Z<=z.length-1&&Z>=0&&q(Z):0===Z&&q(Z)},children:"Previous"})}),Object(u.jsx)(l.a,{xs:4,md:4,lg:4,sm:4,children:Object(u.jsx)(x.a,{onClick:function(e){Z<z.length-1?++Z>=0&&Z<z.length&&(q(Z),Z--):Z===z.length-1&&q(Z)},children:"Next"})}),Object(u.jsx)(l.a,{xs:2,md:2,lg:2,sm:2}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})},"buttons${p}"),Object(u.jsxs)(o.a,{fluid:!0,children:[Object(u.jsx)(a.a,{xs:12,md:12,lg:12,sm:12,children:Object(u.jsx)(l.a,{xs:12,md:12,lg:12,sm:12,children:Object(u.jsx)(x.a,{onClick:function(e){e.preventDefault(),ee(),te()},children:"Submit"})})}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{id:"containerEndRef"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(m,{ans:R,getAns:G,res:T,getRes:V,questions:W},"resultslist${p}")]},"results{p}")]})}t.default=function(){return Object(u.jsxs)("div",{className:"App",children:[" ",Object(u.jsx)(n.a,{children:Object(u.jsx)(j.c,{children:Object(u.jsx)(j.a,{path:"/",element:Object(u.jsx)(v,{})})})})]})}}},[[170,1,2]]]);
//# sourceMappingURL=main.2edfa74a.chunk.js.map