import{_}from"./CV9FYs6s.js";import{f as u,C as f,j as y,v as c,o as s,c as e,F as g,A as h,a as k,z as S,D as v,E as w}from"./BILFuKO1.js";import{u as B}from"./DnlNNr8W.js";import"./B1yDSME7.js";import"./BEmqc_hV.js";const C={key:0,class:"not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},x={key:1},j=u({__name:"StoriesList",props:{path:{type:String,default:"stories"}},async setup(p){let t,o;const l=p,{data:d}=([t,o]=f(async()=>B("stories",async()=>await v(w(l.path)).sort({date:-1}).find())),t=await t,o(),t),a=y(()=>d.value||[]);return(A,r)=>{var n;const m=_;return(n=c(a))!=null&&n.length?(s(),e("div",C,[(s(!0),e(g,null,h(c(a),i=>(s(),S(m,{key:i._path,story:i},null,8,["story"]))),128))])):(s(),e("div",x,r[0]||(r[0]=[k("p",{class:""},"No Stories found.",-1)])))}}});export{j as default};
