import{d as w,r as C,s as X,a as V,u as H,o as R,b as G,c as _,e as p,f as e,g as t,w as l,n as D,h as L,v as N,i as j,j as c,k as F,t as y,l as z,m as U,p as K,q as P,_ as b,x as T,y as q,z as Y,A as i,L as J,B as I,C as O,D as B,F as A}from"./index.e102da7f.js";import{C as Q}from"./index.fbcbd5a4.js";const g=a=>(I("data-v-a9c4b67c"),a=a(),O(),a),W={class:"container"},Z=g(()=>e("span",null,"My Stack",-1)),ee={class:"search-input"},te={key:1,class:"my"},oe=["src"],se={class:"hover-popup"},ne={class:"nickname"},ae={class:"my-count"},ue=g(()=>e("span",null,"\u53D1\u5E03",-1)),ce=g(()=>e("span",null,"\u9876\u8FC7",-1)),le=g(()=>e("span",null,"\u8E29\u8FC7",-1)),re=w({__name:"MyHeader",setup(a){let d=C(0),u=C(0);const m=X(),{userInfo:s}=V(m),v=()=>{let n=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,o=n-d.value;d.value=n,o<0?u.value=u.value-o>0?0:u.value-o:u.value=u.value-o<-70?-71:u.value-o},f=C(H().params.keywords),k=Y(),E=n=>{k.push(`/search/${n}`)},M=()=>{Q("\u786E\u8BA4\u9000\u51FA\u8D26\u53F7\u5417?",()=>{K().then(()=>{m.removeUserInfo(),k.push("/")})})},S=()=>{const n=new FormData;n.append("title","\u65E0"),n.append("description","\u65E0"),n.append("content","# \u8BF7\u4F7F\u7528markdown\u8BED\u6CD5\n ## \u5F00\u59CB\u4F60\u7684\u8868\u6F14\n```js\nlet f = new Func();\nconsole.log(f.__proto__); // Object\n```"),P(n).then(o=>{k.push(`/edit/${o}`)})};return R(()=>{window.addEventListener("scroll",v)}),G(()=>{window.removeEventListener("scroll",v)}),(n,o)=>{const x=b,r=T("router-link"),$=q;return _(),p("header",{class:"header-block",style:U({top:c(u)+"px","box-shadow":c(u)===-70?"none":"0px 8px 25px 20px rgba(44, 16, 111, 0.06)"})},[e("div",W,[t(r,{class:"logo",to:"/"},{default:l(()=>[t(x,{class:"icon",icon:"edit",isActive:!1}),Z]),_:1}),e("nav",null,[t(r,{to:"/",class:D({active:n.$route.path=="/"})},{default:l(()=>[i("\u9996\u9875")]),_:1},8,["class"]),t(r,{to:"/my",class:D({active:n.$route.path.split("/")[1]=="my"})},{default:l(()=>[i("\u6211\u7684")]),_:1},8,["class"])]),e("div",ee,[L(e("input",{type:"text",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD","onUpdate:modelValue":o[0]||(o[0]=h=>f.value=h),onKeyup:o[1]||(o[1]=j(h=>E(f.value),["enter"]))},null,544),[[N,f.value]]),t(x,{icon:"search",class:"icon",onClick:o[2]||(o[2]=h=>E(f.value)),title:"\u70B9\u51FB\u641C\u7D22"})]),c(s)?F("",!0):(_(),p("span",{key:0,class:"login",onClick:o[3]||(o[3]=h=>c(J)())},"\u767B\u5F55/\u6CE8\u518C")),c(s)?(_(),p("div",te,[e("img",{src:`/api${c(s).avatar}`,alt:"",width:"50",height:"50"},null,8,oe),e("div",se,[e("span",ne,y(c(s).nickname),1),e("nav",ae,[t(r,{to:"/my"},{default:l(()=>[e("span",null,y(c(s).passCount),1),ue]),_:1}),t(r,{to:"/my/up"},{default:l(()=>[e("span",null,y(c(s).up),1),ce]),_:1}),t(r,{to:"/my/down"},{default:l(()=>[e("span",null,y(c(s).down),1),le]),_:1})]),t(r,{class:"my-menu",to:"/my"},{default:l(()=>[i("\u4E2A\u4EBA\u4E2D\u5FC3")]),_:1}),c(s).admin?(_(),z(r,{key:0,class:"my-menu",to:"/admin/blog"},{default:l(()=>[i("\u7BA1\u7406\u540E\u53F0")]),_:1})):F("",!0),t($,{type:"primary",onClick:S},{default:l(()=>[i("\u5F00\u59CB\u521B\u4F5C")]),_:1}),t($,{type:"danger",onClick:M},{default:l(()=>[i("\u9000\u51FA\u767B\u5F55")]),_:1})])])):F("",!0)])],4)}}});const _e=B(re,[["__scopeId","data-v-a9c4b67c"]]);const de={},ie=a=>(I("data-v-a7c8fbef"),a=a(),O(),a),pe={class:"footer-block"},me=ie(()=>e("nav",{class:"container"},[e("div",null,[e("a",{href:"https://github.com/XXdoOO/my-stack-front-end",target:"_blank"}," GitHub\u524D\u7AEF\u5730\u5740\uFF1Ahttps://github.com/XXdoOO/my-stack-front-end-vue3 "),e("a",{href:"https://github.com/XXdoOO/my-stack-front-end",target:"_blank"}," GitHub\u540E\u7AEF\u5730\u5740\uFF1Ahttps://github.com/XXdoOO/my-stack-back-end ")]),e("a",{href:"https://beian.miit.gov.cn/",target:"_blank"},"\u6E58ICP\u59072022006790\u53F7")],-1)),ve=[me];function fe(a,d){return _(),p("footer",pe,ve)}const he=B(de,[["render",fe],["__scopeId","data-v-a7c8fbef"]]),ye=w({__name:"GoTop",setup(a){const d=()=>{document.documentElement.scrollTop=0},u=()=>{document.documentElement.scrollTop=document.body.scrollHeight};return(m,s)=>(_(),p(A,null,[t(b,{icon:"arrow-down",onClick:s[0]||(s[0]=v=>d()),class:"goTop",title:"\u8FD4\u56DE\u9876\u90E8"}),t(b,{icon:"arrow-down",onClick:s[1]||(s[1]=v=>u()),class:"goBottom",title:"\u8FD4\u56DE\u5E95\u90E8"})],64))}});const ge=B(ye,[["__scopeId","data-v-6a969dc8"]]),Fe=w({__name:"index",setup(a){return(d,u)=>{const m=T("RouterView");return _(),p(A,null,[t(_e),t(m),t(he),t(ge)],64)}}});export{Fe as default};
