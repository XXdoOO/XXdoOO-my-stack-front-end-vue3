import{C as M,c as o,e as l,f as r,d as H,s as F,r as I,G as A,o as D,b as S,F as U,H as V,k as u,l as y,y as z,I as k,g as a,w as p,z as f,t as v,j as d,J as C,K,M as j,N as G,O as J,_ as O}from"./index.e0124a35.js";import{C as R}from"./index.e56d8f0a.js";const q="/assets/empty.bb11e2d8.png";const P={},Q={class:"empty"},W=r("img",{src:q,alt:""},null,-1),X=r("span",{class:"msg"},"\u8FD9\u91CC\u7A7A\u7A7A\u5982\u4E5F\u54E6",-1),Y=[W,X];function Z(m,s){return o(),l("div",Q,Y)}const b=M(P,[["render",Z]]),ee={class:"container root"},te={key:0,class:"articles"},se=["onClick"],ne=["innerHTML"],oe=["innerHTML"],ie=["src"],ae=H({__name:"BlogList",props:{isMy:{type:Boolean,default:!1},getList:null,form:{default:{}},keywords:null},setup(m){const s=m,w=F().userInfo,N=z(),B=I(!1);s.form.pageNum=1,s.form.pageSize=10,s.form.total=0;const c=A([]),$=()=>{s.getList(s.form).then(t=>{c.push(...t.list),s.form.total=t.total,B.value=!0})},x=t=>{N.push(`/blog/${t}`)},h=(t,i)=>{K(t.id,i).then(n=>{j(t,i)})},T=t=>{R("\u786E\u8BA4\u5220\u9664\u6B64\u535A\u5BA2\u5417\uFF1F",()=>{G(c[t].id).then(()=>{c.splice(t,1),J({type:"success",message:"\u5220\u9664\u6210\u529F"})})})},g=()=>{const t=document.documentElement;t.scrollHeight-t.scrollTop-t.clientHeight<1&&s.form.pageNum*s.form.pageSize<parseInt(s.form.total)&&(s.form.pageNum++,$())};D(()=>{window.addEventListener("scroll",g)}),S(()=>{window.removeEventListener("scroll",g)});const L=t=>s.keywords?t.replaceAll(s.keywords,`<strong>${s.keywords}</strong>`):t;return $(),(t,i)=>{const n=O;return o(),l("div",ee,[c.length>0?(o(),l("div",te,[(o(!0),l(U,null,V(c,(e,E)=>(o(),l("article",{key:e.id,onClick:_=>x(e.id)},[r("div",null,[r("div",{class:"top",onClick:i[0]||(i[0]=k(()=>{},["stop"]))},[a(n,{icon:"user",type:"link",href:`/user/${e.createBy}`},{default:p(()=>[f(v(e.authorNickname),1)]),_:2},1032,["href"]),a(n,{icon:"history",type:"text","enable-hover":!1},{default:p(()=>[f(v(d(C).formatTime(e.createTime)),1)]),_:2},1024)]),r("h2",{innerHTML:L(e.title)},null,8,ne),r("p",{innerHTML:L(e.description)},null,8,oe),r("div",{class:"bottom",onClick:i[1]||(i[1]=k(()=>{},["stop"]))},[a(n,{onClick:_=>h(e,0),num:e.up,active:e.isUp,icon:"up-active"},null,8,["onClick","num","active"]),a(n,{onClick:_=>h(e,1),num:e.down,active:e.isDown,icon:"down-active"},null,8,["onClick","num","active"]),a(n,{onClick:_=>h(e,2),num:e.star,active:e.isStar,icon:"star-active"},null,8,["onClick","num","active"]),a(n,{icon:"comment",type:"text"},{default:p(()=>[f(v(d(C).formatNum(e.comment)),1)]),_:2},1024),a(n,{icon:"view",type:"text"},{default:p(()=>[f(v(d(C).formatNum(e.view)),1)]),_:2},1024),m.isMy&&e.authorUsername===d(w).username?(o(),y(n,{key:0,href:`/edit/${e.id}`,icon:"edit"},null,8,["href"])):u("",!0),m.isMy&&e.authorUsername===d(w).username?(o(),y(n,{key:1,onClick:k(_=>T(E),["stop"]),icon:"delete"},null,8,["onClick"])):u("",!0)])]),e.cover?(o(),l("img",{key:0,src:`/api/${e.cover}`,alt:"",height:"100"},null,8,ie)):u("",!0)],8,se))),128))])):u("",!0),B.value&&c.length==0?(o(),y(b,{key:1})):u("",!0)])}}});const le=M(ae,[["__scopeId","data-v-2608b2ea"]]);export{le as B};
