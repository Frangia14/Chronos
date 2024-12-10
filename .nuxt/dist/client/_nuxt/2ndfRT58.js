import H from"./w1s4rXcL.js";import{i as O,u as P,o as d,t as L,A as w,s as Q,l as q,N as $,a as f,b as y}from"./BB35iv2k.js";import{f as S,r as p,s as E,j as D,K as j,U as z,W as A,i as K,o as _,z as h,w as k,a as b,b as B,I as C,v as x}from"./BILFuKO1.js";import"./DJAgVW0d.js";import"./DlAUqK2U.js";var R=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(R||{});let N=Symbol("DisclosureContext");function I(t){let o=K(N,null);if(o===null){let u=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,I),u}return o}let T=Symbol("DisclosurePanelContext");function W(){return K(T,null)}let F=S({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:o,attrs:u}){let a=p(t.defaultOpen?0:1),e=p(null),i=p(null),n={buttonId:p(`headlessui-disclosure-button-${O()}`),panelId:p(`headlessui-disclosure-panel-${O()}`),disclosureState:a,panel:e,button:i,toggleDisclosure(){a.value=P(a.value,{0:1,1:0})},closeDisclosure(){a.value!==1&&(a.value=1)},close(l){n.closeDisclosure();let r=l?l instanceof HTMLElement?l:l.value instanceof HTMLElement?d(l):d(n.button):d(n.button);r==null||r.focus()}};return E(N,n),L(D(()=>P(a.value,{0:y.Open,1:y.Closed}))),()=>{let{defaultOpen:l,...r}=t,c={open:a.value===0,close:n.close};return w({theirProps:r,ourProps:{},slot:c,slots:o,attrs:u,name:"Disclosure"})}}}),G=S({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(t,{attrs:o,slots:u,expose:a}){let e=I("DisclosureButton"),i=W(),n=D(()=>i===null?!1:i.value===e.panelId.value);j(()=>{n.value||t.id!==null&&(e.buttonId.value=t.id)}),z(()=>{n.value||(e.buttonId.value=null)});let l=p(null);a({el:l,$el:l}),n.value||A(()=>{e.button.value=l.value});let r=Q(D(()=>({as:t.as,type:o.type})),l);function c(){var s;t.disabled||(n.value?(e.toggleDisclosure(),(s=d(e.button))==null||s.focus()):e.toggleDisclosure())}function v(s){var m;if(!t.disabled)if(n.value)switch(s.key){case f.Space:case f.Enter:s.preventDefault(),s.stopPropagation(),e.toggleDisclosure(),(m=d(e.button))==null||m.focus();break}else switch(s.key){case f.Space:case f.Enter:s.preventDefault(),s.stopPropagation(),e.toggleDisclosure();break}}function g(s){switch(s.key){case f.Space:s.preventDefault();break}}return()=>{var s;let m={open:e.disclosureState.value===0},{id:M,...U}=t,V=n.value?{ref:l,type:r.value,onClick:c,onKeydown:v}:{id:(s=e.buttonId.value)!=null?s:M,ref:l,type:r.value,"aria-expanded":e.disclosureState.value===0,"aria-controls":e.disclosureState.value===0||d(e.panel)?e.panelId.value:void 0,disabled:t.disabled?!0:void 0,onClick:c,onKeydown:v,onKeyup:g};return w({ourProps:V,theirProps:U,slot:m,attrs:o,slots:u,name:"DisclosureButton"})}}}),J=S({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:o,slots:u,expose:a}){let e=I("DisclosurePanel");j(()=>{t.id!==null&&(e.panelId.value=t.id)}),z(()=>{e.panelId.value=null}),a({el:e.panel,$el:e.panel}),E(T,e.panelId);let i=q(),n=D(()=>i!==null?(i.value&y.Open)===y.Open:e.disclosureState.value===0);return()=>{var l;let r={open:e.disclosureState.value===0,close:e.close},{id:c,...v}=t,g={id:(l=e.panelId.value)!=null?l:c,ref:e.panel};return w({ourProps:g,theirProps:v,slot:r,attrs:o,slots:u,features:$.RenderStrategy|$.Static,visible:n.value,name:"DisclosurePanel"})}}});const X={class:"text-base font-semibold leading-7"},Y={class:"ml-6 flex h-7 items-center"},Z={class:"text-base leading-7 text-zinc-600 dark:text-zinc-500"},ne=S({__name:"QaItem",setup(t){return(o,u)=>{const a=H;return _(),h(x(F),{as:"div",class:"pt-6"},{default:k(({open:e})=>[b("dt",null,[B(x(G),{class:"flex w-full items-start justify-between text-left text-zinc-900 dark:text-zinc-200"},{default:k(()=>[b("span",X,[C(o.$slots,"question")]),b("span",Y,[e?(_(),h(a,{key:1,name:"heroicons:minus-small",class:"h-6 w-6"})):(_(),h(a,{key:0,name:"heroicons:plus-small",class:"h-6 w-6"}))])]),_:2},1024)]),B(x(J),{as:"dd",class:"mt-2 pr-12"},{default:k(()=>[b("p",Z,[C(o.$slots,"answer")])]),_:3})]),_:3})}}});export{ne as default};
