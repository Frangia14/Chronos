import{_ as g}from"./CTciYVZn.js";import{f as u,C as f,j as y,v as l,o as s,c as t,F as h,A as k,a as v,z as w,D as B,E as C}from"./BILFuKO1.js";import{u as x}from"./DnlNNr8W.js";import"./B1yDSME7.js";import"./BEmqc_hV.js";const A={key:0,class:"not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},L={key:1},j=u({__name:"GalleriesList",props:{path:{type:String,default:"galleries"}},async setup(i){let e,a;const c=i,{data:p}=([e,a]=f(async()=>x("galleries",async()=>await B(C(c.path)).find())),e=await e,a(),e),r=y(()=>p.value||[]);return(D,o)=>{var n;const m=g;return(n=l(r))!=null&&n.length?(s(),t("div",A,[(s(!0),t(h,null,k(l(r),(d,_)=>(s(),w(m,{key:_,gallery:d},null,8,["gallery"]))),128))])):(s(),t("div",L,o[0]||(o[0]=[v("p",{class:""}," No galleries found. ",-1)])))}}});export{j as default};