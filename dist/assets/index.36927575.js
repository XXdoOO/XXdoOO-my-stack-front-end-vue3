import{d as B,r as y,s as A,u as D,o as M,a as X,b as d,c as i,e,f as o,w as u,n as x,g as V,v as T,h as H,i as s,j as g,t as f,k as L,l as R,m as N,_ as z,p as $,q as G,x as K,y as _,L as U,z as E,A as I,B as O,F as j}from"./index.3ef2a13c.js";import{C as q}from"./index.7bc074a5.js";const v=n=>(E("data-v-03b3c2d1"),n=n(),I(),n),P={class:"container"},Y=v(()=>e("span",null,"My Stack",-1)),J={class:"search-input"},Q={key:1,class:"my"},W=["src"],Z={class:"hover-popup"},ee={class:"nickname"},te={class:"my-count"},oe=v(()=>e("span",null,"\u53D1\u5E03",-1)),se=v(()=>e("span",null,"\u9876\u8FC7",-1)),ne=v(()=>e("span",null,"\u8E29\u8FC7",-1)),ae=B({__name:"MyHeader",setup(n){let p=y(0),l=y(0);const a=A().userInfo,k=()=>{let r=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=r-p.value;p.value=r,t<0?l.value=l.value-t>0?0:l.value-t:l.value=l.value-t<-70?-71:l.value-t},m=y(D().params.keywords),b=K(),w=r=>{b.push(`/search/${r}`)},S=()=>{q("\u786E\u8BA4\u9000\u51FA\u8D26\u53F7\u5417?",()=>{N().then(()=>{sessionStorage.clear(),b.push("/"),window.location.reload()})})};return M(()=>{window.addEventListener("scroll",k)}),X(()=>{window.removeEventListener("scroll",k)}),(r,t)=>{const C=z,c=$("router-link"),F=G;return d(),i("header",{class:"header-block",style:R({top:s(l)+"px","box-shadow":s(l)===-70?"none":"0px 8px 25px 20px rgba(44, 16, 111, 0.06)"})},[e("div",P,[o(c,{class:"logo",to:"/"},{default:u(()=>[o(C,{class:"icon",icon:"edit",isActive:!1}),Y]),_:1}),e("nav",null,[o(c,{to:"/",class:x({active:r.$route.path=="/"})},{default:u(()=>[_("\u9996\u987522")]),_:1},8,["class"]),o(c,{to:"/my",class:x({active:r.$route.path.split("/")[1]=="my"})},{default:u(()=>[_("\u6211\u7684")]),_:1},8,["class"])]),e("div",J,[V(e("input",{type:"text",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD","onUpdate:modelValue":t[0]||(t[0]=h=>m.value=h),onKeyup:t[1]||(t[1]=H(h=>w(m.value),["enter"]))},null,544),[[T,m.value]]),o(C,{icon:"search",class:"icon",onClick:t[2]||(t[2]=h=>w(m.value)),title:"\u70B9\u51FB\u641C\u7D22"})]),s(a)?g("",!0):(d(),i("span",{key:0,class:"login",onClick:t[3]||(t[3]=h=>s(U)())},"\u767B\u5F55/\u6CE8\u518C")),s(a)?(d(),i("div",Q,[e("img",{src:`/api/${s(a).avatar}`,alt:"",width:"50",height:"50"},null,8,W),e("div",Z,[e("span",ee,f(s(a).nickname),1),e("nav",te,[o(c,{to:"/my"},{default:u(()=>[e("span",null,f(s(a).passCount),1),oe]),_:1}),o(c,{to:"/my/up"},{default:u(()=>[e("span",null,f(s(a).up),1),se]),_:1}),o(c,{to:"/my/down"},{default:u(()=>[e("span",null,f(s(a).down),1),ne]),_:1})]),o(c,{class:"my-menu",to:"/my"},{default:u(()=>[_("\u4E2A\u4EBA\u4E2D\u5FC3")]),_:1}),s(a).admin?(d(),L(c,{key:0,class:"my-menu",to:"/admin/blog"},{default:u(()=>[_("\u7BA1\u7406\u540E\u53F0")]),_:1})):g("",!0),o(F,{type:"primary",href:"/edit"},{default:u(()=>[_("\u5F00\u59CB\u521B\u4F5C")]),_:1}),o(F,{type:"danger",onClick:S},{default:u(()=>[_("\u9000\u51FA\u767B\u5F55")]),_:1})])])):g("",!0)])],4)}}});const ue=O(ae,[["__scopeId","data-v-03b3c2d1"]]);const le={},ce=n=>(E("data-v-fa9b54f6"),n=n(),I(),n),re={class:"footer-block"},_e=ce(()=>e("nav",{class:"container"},[e("div",null,[e("a",{href:"https://github.com/XXdoOO/my-stack-front-end",target:"_blank"}," GitHub\u524D\u7AEF\u5730\u5740\uFF1Ahttps://github.com/XXdoOO/my-stack-front-end "),e("a",{href:"https://github.com/XXdoOO/my-stack-front-end",target:"_blank"}," GitHub\u540E\u7AEF\u5730\u5740\uFF1Ahttps://github.com/XXdoOO/my-stack-back-end ")]),e("a",{href:"https://beian.miit.gov.cn/",target:"_blank"},"\u6E58ICP\u59072022006790\u53F7")],-1)),de=[_e];function ie(n,p){return d(),i("footer",re,de)}const pe=O(le,[["render",ie],["__scopeId","data-v-fa9b54f6"]]),fe=B({__name:"index",setup(n){return(p,l)=>{const a=$("RouterView");return d(),i(j,null,[o(ue),o(a),o(pe)],64)}}});export{fe as default};
