import{f as g,x as C,Q as v,E as D,g as w,n as o}from"./BILFuKO1.js";import _ from"./D5q3YSoY.js";import S from"./CTmwantU.js";import{u as f}from"./B0oNjDTk.js";import"./B6dwQEOH.js";import"./CxYJgpPD.js";import"./DnlNNr8W.js";const q=g({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(d){const{contentHead:c}=C().public.content,e=v(),{tag:m,excerpt:r,path:s,query:i,head:a}=d,u=a===void 0?c:a,l={...i||{},path:s||(i==null?void 0:i.path)||D(w().path),find:"one"},h=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(S,l,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:y})=>{var p;return u&&f(t),(p=e.default)==null?void 0:p.call(e,{doc:t,refresh:n,isPartial:y,excerpt:r,...this.$attrs})}:({data:t})=>(u&&f(t),o(_,{value:t,excerpt:r,tag:m,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):h("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),O=q;export{O as default};
