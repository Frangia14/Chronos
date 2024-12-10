import{f as O,k as A,r as k,e as S,K as E,ai as N,aj as B,M as T,ak as U,n as w,aa as P,al as I,am as F,j as p,an as j,ao as _,ap as V,aq as D,ar as z,x as H,E as M,as as $}from"./BILFuKO1.js";const G=(...t)=>t.find(c=>c!==void 0);function K(t){const c=t.componentName||"NuxtLink";function d(e,a){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return L(e,t.trailingSlash);const y="path"in e&&e.path!==void 0?e.path:a(e).path;return{...e,name:void 0,path:L(y,t.trailingSlash)}}function R(e){const a=A(),y=H(),f=p(()=>!!e.target&&e.target!=="_self"),o=p(()=>{const s=e.to||e.href||"";return typeof s=="string"&&j(s,{acceptRelative:!0})}),m=P("RouterLink"),h=m&&typeof m!="string"?m.useLink:void 0,g=p(()=>{if(e.external)return!0;const s=e.to||e.href||"";return typeof s=="object"?!1:s===""||o.value}),l=p(()=>{const s=e.to||e.href||"";return g.value?s:d(s,a.resolve)}),i=g.value||h==null?void 0:h({...e,to:l}),b=p(()=>{var s;if(!l.value||o.value)return l.value;if(g.value){const x=typeof l.value=="object"&&"path"in l.value?_(l.value):l.value,C=typeof x=="object"?a.resolve(x).href:x;return d(C,a.resolve)}return typeof l.value=="object"?((s=a.resolve(l.value))==null?void 0:s.href)??null:d(V(y.app.baseURL,l.value),a.resolve)});return{to:l,hasTarget:f,isAbsoluteUrl:o,isExternal:g,href:b,isActive:(i==null?void 0:i.isActive)??p(()=>l.value===a.currentRoute.value.path),isExactActive:(i==null?void 0:i.isExactActive)??p(()=>l.value===a.currentRoute.value.path),route:(i==null?void 0:i.route)??p(()=>a.resolve(l.value)),async navigate(){await D(b.value,{replace:e.replace,external:g.value||f.value})}}}return O({name:c,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:R,setup(e,{slots:a}){const y=A(),{to:f,href:o,navigate:m,isExternal:h,hasTarget:g,isAbsoluteUrl:l}=R(e),i=k(!1),b=k(null),s=r=>{var u;b.value=e.custom?(u=r==null?void 0:r.$el)==null?void 0:u.nextElementSibling:r==null?void 0:r.$el};function x(r){var u,n;return!i.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===r:((u=e.prefetchOn)==null?void 0:u[r])??((n=t.prefetchOn)==null?void 0:n[r]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!J()}async function C(r=S()){if(i.value)return;i.value=!0;const u=typeof f.value=="string"?f.value:h.value?_(f.value):y.resolve(f.value).fullPath,n=h.value?new URL(u,window.location.href).href:u;await Promise.all([r.hooks.callHook("link:prefetch",n).catch(()=>{}),!h.value&&!g.value&&z(f.value,y).catch(()=>{})])}if(x("visibility")){const r=S();let u,n=null;E(()=>{const v=Q();N(()=>{u=B(()=>{var q;(q=b==null?void 0:b.value)!=null&&q.tagName&&(n=v.observe(b.value,async()=>{n==null||n(),n=null,await C(r)}))})})}),T(()=>{u&&U(u),n==null||n(),n=null})}return()=>{var n;if(!h.value&&!g.value){const v={ref:s,to:f.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(x("interaction")&&(v.onPointerenter=C.bind(null,void 0),v.onFocus=C.bind(null,void 0)),i.value&&(v.class=e.prefetchedClass||t.prefetchedClass),v.rel=e.rel||void 0),w(P("RouterLink"),v,a.default)}const r=e.target||null,u=G(e.noRel?"":e.rel,t.externalRelAttribute,l.value||g.value?"noopener noreferrer":"")||null;return e.custom?a.default?a.default({href:o.value,navigate:m,prefetch:C,get route(){if(!o.value)return;const v=new URL(o.value,window.location.href);return{path:v.pathname,fullPath:v.pathname,get query(){return I(v.search)},hash:v.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o.value}},rel:u,target:r,isExternal:h.value||g.value,isActive:!1,isExactActive:!1}):null:w("a",{ref:b,href:o.value||null,rel:u,target:r},(n=a.default)==null?void 0:n.call(a))}}})}const Y=K(F);function L(t,c){const d=c==="append"?M:$;return j(t)&&!t.startsWith("http")?t:d(t,!0)}function Q(){const t=S();if(t._observer)return t._observer;let c=null;const d=new Map,R=(a,y)=>(c||(c=new IntersectionObserver(f=>{for(const o of f){const m=d.get(o.target);(o.isIntersecting||o.intersectionRatio>0)&&m&&m()}})),d.set(a,y),c.observe(a),()=>{d.delete(a),c.unobserve(a),d.size===0&&(c.disconnect(),c=null)});return t._observer={observe:R}}const W=/2g/;function J(){const t=navigator.connection;return!!(t&&(t.saveData||W.test(t.effectiveType)))}export{Y as _};
