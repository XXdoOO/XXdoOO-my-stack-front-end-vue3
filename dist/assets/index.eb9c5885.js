import{d as b,r as v,u as U,N as C,b as i,c as m,e as o,g,v as F,k as D,j as f,f as h,w as k,F as I,W as R,M as d,X as V,q as j,p as w,z as L,A as E,y as N,t as O,_ as A,B as S}from"./index.1c99759d.js";const r=c=>(L("data-v-9efc2718"),c=c(),E(),c),M={class:"info"},z={class:"title"},T=r(()=>o("span",null,"\u6807\u9898\uFF1A",-1)),q={class:"description"},P=r(()=>o("span",null,"\u63CF\u8FF0\uFF1A",-1)),W={class:"cover"},X=r(()=>o("span",null,"\u5C01\u9762\uFF1A",-1)),$=["src"],G=b({__name:"index",setup(c){var _;const e=v({id:(_=U().params.blogId)!=null?_:"",title:"",description:"",cover:"",content:"# \u8BF7\u4F7F\u7528markdown\u8BED\u6CD5\n ## \u5F00\u59CB\u4F60\u7684\u8868\u6F14\n```js\nlet f = new Func();\nconsole.log(f.__proto__); // Object\n```"});e.value.id&&C(e.value.id).then(n=>{e.value=n,e.value.cover="/api/"+n.cover});const p=v(),y=n=>{e.value.cover=URL.createObjectURL(n.target.files[0])},x=()=>{if(e.value.title.trim().length!=0&&e.value.description.trim().length!=0&&e.value.content.trim().length!=0){const s=p.value.files[0],l=new FormData;s&&l.append("coverImg",s);for(let a in e.value)l.append(`${a}`,e.value[a]);for(var[n,t]of l.entries())console.log(n,t);e.value.id?R(l).then(a=>{d({type:"success",message:"\u4FDD\u5B58\u6210\u529F"})}):V(l).then(()=>{d({type:"success",message:"\u53D1\u5E03\u6210\u529F"})})}else d({type:"error",message:"\u8BF7\u5B8C\u5584\u4FE1\u606F"})},B=(n,t,s)=>{console.log(n),console.log(t),console.log(s),console.log(URL.createObjectURL(s[0])),t({url:URL.createObjectURL(s[0]),src:URL.createObjectURL(s[0]),desc:"\u4E03\u9F99\u73E0"})};return(n,t)=>{const s=A,l=j,a=w("v-md-editor");return i(),m(I,null,[o("div",M,[o("label",z,[T,g(o("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=u=>e.value.title=u)},null,512),[[F,e.value.title]])]),o("label",q,[P,g(o("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=u=>e.value.description=u)},null,512),[[F,e.value.description]])]),o("label",W,[X,e.value.cover?f("",!0):(i(),D(s,{key:0,icon:"add",style:{"font-size":"25px"}})),e.value.cover?(i(),m("img",{key:1,src:e.value.cover,width:"50",height:"50"},null,8,$)):f("",!0),o("input",{type:"file",hidden:"",accept:".jpg,.png",ref_key:"coverImg",ref:p,onChange:y},null,544)]),h(l,{class:"post",onClick:x},{default:k(()=>[N(O(e.value.id?"\u4FDD\u5B58":"\u53D1\u5E03"),1)]),_:1})]),h(a,{modelValue:e.value.content,"onUpdate:modelValue":t[2]||(t[2]=u=>e.value.content=u),"disabled-menus":[],onUploadImage:B},null,8,["modelValue"])],64)}}});const J=S(G,[["__scopeId","data-v-9efc2718"]]);export{J as default};