import{f as je,n as ce,e as He,Y as Qe,r as Ue,j as T,N as Ge,C as Ke,v as m,o as M,c as le,V as z,z as ae,ay as Je,t as We,O as Ye}from"./BILFuKO1.js";import{u as Xe}from"./DJAgVW0d.js";import{_ as Ze}from"./DlAUqK2U.js";const Te=Object.freeze({left:0,top:0,width:16,height:16}),Oe=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Z=Object.freeze({...Te,...Oe});Object.freeze({...Z,body:"",hidden:!1});({...Te});const Pe=Object.freeze({width:null,height:null}),Ee=Object.freeze({...Pe,...Oe});function et(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in Pe?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const tt=/[\s,]+/;function nt(e,t){t.split(tt).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function ot(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}const rt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,st=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function fe(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(rt);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=st.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}function it(e,t="defs"){let n="";const r=e.indexOf("<"+t);for(;r>=0;){const o=e.indexOf(">",r),s=e.indexOf("</"+t);if(o===-1||s===-1)break;const i=e.indexOf(">",s);if(i===-1)break;n+=e.slice(o+1,s).trim(),e=e.slice(0,r).trim()+e.slice(i+1)}return{defs:n,content:e}}function ct(e,t){return e?"<defs>"+e+"</defs>"+t:t}function lt(e,t,n){const r=it(e);return ct(r.defs,t+r.content+n)}const at=e=>e==="unset"||e==="undefined"||e==="none";function ft(e,t){const n={...Z,...e},r={...Ee,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(p=>{const u=[],S=p.hFlip,v=p.vFlip;let I=p.rotate;S?v?I+=2:(u.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),u.push("scale(-1 1)"),o.top=o.left=0):v&&(u.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),u.push("scale(1 -1)"),o.top=o.left=0);let w;switch(I<0&&(I-=Math.floor(I/4)*4),I=I%4,I){case 1:w=o.height/2+o.top,u.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:u.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:w=o.width/2+o.left,u.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}I%2===1&&(o.left!==o.top&&(w=o.left,o.left=o.top,o.top=w),o.width!==o.height&&(w=o.width,o.width=o.height,o.height=w)),u.length&&(s=lt(s,'<g transform="'+u.join(" ")+'">',"</g>"))});const i=r.width,c=r.height,l=o.width,a=o.height;let f,d;i===null?(d=c===null?"1em":c==="auto"?a:c,f=fe(d,l/a)):(f=i==="auto"?l:i,d=c===null?fe(f,a/l):c==="auto"?a:c);const h={},y=(p,u)=>{at(u)||(h[p]=u.toString())};y("width",f),y("height",d);const b=[o.left,o.top,l,a];return h.viewBox=b.join(" "),{attributes:h,viewBox:b,body:s}}const ut=/\sid="(\S+)"/g,dt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let pt=0;function ht(e,t=dt){const n=[];let r;for(;r=ut.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(pt++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}function gt(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function mt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function yt(e){return"data:image/svg+xml,"+mt(e)}function bt(e){return'url("'+yt(e)+'")'}const ue={...Ee,inline:!1},wt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},xt={display:"inline-block"},U={backgroundColor:"currentColor"},Ae={backgroundColor:"transparent"},de={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},pe={webkitMask:U,mask:U,background:Ae};for(const e in pe){const t=pe[e];for(const n in de)t[e+n]=de[n]}const L={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";L[e+"-flip"]=t,L[e.slice(0,1)+"-flip"]=t,L[e+"Flip"]=t});function he(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const It=(e,t)=>{const n=et(ue,t),r={...wt},o=t.mode||"svg",s={},i=t.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let p in t){const u=t[p];if(u!==void 0)switch(p){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[p]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&nt(n,u);break;case"color":s.color=u;break;case"rotate":typeof u=="string"?n[p]=ot(u):typeof u=="number"&&(n[p]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete r["aria-hidden"];break;default:{const S=L[p];S?(u===!0||u==="true"||u===1)&&(n[S]=!0):ue[p]===void 0&&(r[p]=u)}}}const l=ft(e,n),a=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,a);let p=0,u=t.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),r.innerHTML=ht(l.body,u?()=>u+"ID"+p++:"iconifyVue"),ce("svg",r)}const{body:f,width:d,height:h}=e,y=o==="mask"||(o==="bg"?!1:f.indexOf("currentColor")!==-1),b=gt(f,{...a,width:d+"",height:h+""});return r.style={...s,"--svg":bt(b),width:he(a.width),height:he(a.height),...xt,...y?U:Ae,...c},ce("span",r)},vt=Object.create(null),St=je({inheritAttrs:!1,render(){const e=this.$attrs,t=e.icon,n=typeof t=="string"?vt[t]:typeof t=="object"?t:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:It({...Z,...n},e)}}),P=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!$(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!$(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return t&&!$(c,n)?null:c}return null},$=(e,t)=>e?!!((e.provider===""||e.provider.match(P))&&(t&&e.prefix===""||e.prefix.match(P))&&e.name.match(P)):!1,Fe=Object.freeze({left:0,top:0,width:16,height:16}),N=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ee=Object.freeze({...Fe,...N}),G=Object.freeze({...ee,body:"",hidden:!1});function Ct(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function ge(e,t){const n=Ct(e,t);for(const r in G)r in N?r in e&&!(r in n)&&(n[r]=N[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function kt(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return Object.keys(n).concat(Object.keys(r)).forEach(s),o}function jt(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(c){s=ge(r[c]||o[c],s)}return i(t),n.forEach(i),ge(e,s)}function Me(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=kt(e);for(const o in r){const s=r[o];s&&(t(o,jt(e,o,s)),n.push(o))}return n}const Tt={provider:"",aliases:{},not_found:{},...Fe};function q(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function ze(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!q(e,Tt))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o.match(P)||typeof s.body!="string"||!q(s,G))return null}const r=t.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(P)||typeof i!="string"||!n[i]&&!r[i]||!q(s,G))return null}return t}const me=Object.create(null);function Ot(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function k(e,t){const n=me[e]||(me[e]=Object.create(null));return n[t]||(n[t]=Ot(e,t))}function te(e,t){return ze(t)?Me(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Pt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let E=!1;function _e(e){return typeof e=="boolean"&&(E=e),E}function Et(e){const t=typeof e=="string"?R(e,!0,E):e;if(t){const n=k(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function At(e,t){const n=R(e,!0,E);if(!n)return!1;const r=k(n.provider,n.prefix);return Pt(r,n.name,t)}function Ft(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),E&&!t&&!e.prefix){let o=!1;return ze(e)&&(e.prefix="",Me(e,(s,i)=>{i&&At(s,i)&&(o=!0)})),o}const n=e.prefix;if(!$({provider:t,prefix:n,name:"a"}))return!1;const r=k(t,n);return!!te(r,e)}const Mt=Object.freeze({width:null,height:null}),zt=Object.freeze({...Mt,...N});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const K=Object.create(null);function _t(e,t){K[e]=t}function J(e){return K[e]||K[""]}function ne(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const oe=Object.create(null),O=["https://api.simplesvg.com","https://api.unisvg.com"],D=[];for(;O.length>0;)O.length===1||Math.random()>.5?D.push(O.shift()):D.push(O.pop());oe[""]=ne({resources:["https://api.iconify.design"].concat(D)});function Lt(e,t){const n=ne(t);return n===null?!1:(oe[e]=n,!0)}function re(e){return oe[e]}const $t=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ye=$t();function Dt(e,t){const n=re(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Nt(e){return e===404}const Rt=(e,t,n)=>{const r=[],o=Dt(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function Bt(e){if(typeof e=="string"){const t=re(e);if(t)return t.path}return"/"}const Vt=(e,t,n)=>{if(!ye){n("abort",424);return}let r=Bt(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;ye(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Nt(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},qt={prepare:Rt,send:Vt};function Ht(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=k(s,i));let f;c in a.icons?f=t.loaded:i===""||a.missing.has(c)?f=t.missing:f=t.pending;const d={provider:s,prefix:i,name:c};f.push(d)}),t}function Le(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function Qt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(e.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Le([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Ut=0;function Gt(e,t,n){const r=Ut++,o=Le.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Kt(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?R(o,t,n):o;s&&r.push(s)}),r}var Jt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Wt(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let g=e.resources.slice(0);for(i=[];g.length>1;){const x=Math.floor(Math.random()*g.length);i.push(g[x]),g=g.slice(0,x).concat(g.slice(x+1))}i=i.concat(g)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",a=0,f,d=null,h=[],y=[];typeof r=="function"&&y.push(r);function b(){d&&(clearTimeout(d),d=null)}function p(){l==="pending"&&(l="aborted"),b(),h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function u(g,x){x&&(y=[]),typeof g=="function"&&y.push(g)}function S(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:h.length,subscribe:u,abort:p}}function v(){l="failed",y.forEach(g=>{g(void 0,f)})}function I(){h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function w(g,x,j){const F=x!=="success";switch(h=h.filter(C=>C!==g),l){case"pending":break;case"failed":if(F||!e.dataAfterTimeout)return;break;default:return}if(x==="abort"){f=j,v();return}if(F){f=j,h.length||(i.length?V():v());return}if(b(),I(),!e.random){const C=e.resources.indexOf(g.resource);C!==-1&&C!==e.index&&(e.index=C)}l="completed",y.forEach(C=>{C(j)})}function V(){if(l!=="pending")return;b();const g=i.shift();if(g===void 0){if(h.length){d=setTimeout(()=>{b(),l==="pending"&&(I(),v())},e.timeout);return}v();return}const x={status:"pending",resource:g,callback:(j,F)=>{w(x,j,F)}};h.push(x),a++,d=setTimeout(V,e.rotate),n(g,t,x.callback)}return setTimeout(V),S}function $e(e){const t={...Jt,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const f=Wt(t,c,l,(d,h)=>{r(),a&&a(d,h)});return n.push(f),f}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function be(){}const H=Object.create(null);function Yt(e){if(!H[e]){const t=re(e);if(!t)return;const n=$e(t),r={config:t,redundancy:n};H[e]=r}return H[e]}function Xt(e,t,n){let r,o;if(typeof e=="string"){const s=J(e);if(!s)return n(void 0,424),be;o=s.send;const i=Yt(e);i&&(r=i.redundancy)}else{const s=ne(e);if(s){r=$e(s);const i=e.resources?e.resources[0]:"",c=J(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),be):r.query(t,o,n)().abort}const we="iconify2",A="iconify",De=A+"-count",xe=A+"-version",Ne=36e5,Zt=168,en=50;function W(e,t){try{return e.getItem(t)}catch{}}function se(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Ie(e,t){try{e.removeItem(t)}catch{}}function Y(e,t){return se(e,De,t.toString())}function X(e){return parseInt(W(e,De))||0}const B={local:!0,session:!0},Re={local:new Set,session:new Set};let ie=!1;function tn(e){ie=e}let _=typeof window>"u"?{}:window;function Be(e){const t=e+"Storage";try{if(_&&_[t]&&typeof _[t].length=="number")return _[t]}catch{}B[e]=!1}function Ve(e,t){const n=Be(e);if(!n)return;const r=W(n,xe);if(r!==we){if(r){const c=X(n);for(let l=0;l<c;l++)Ie(n,A+l.toString())}se(n,xe,we),Y(n,0);return}const o=Math.floor(Date.now()/Ne)-Zt,s=c=>{const l=A+c.toString(),a=W(n,l);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}Ie(n,l)}};let i=X(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,Y(n,i)):Re[e].add(c))}function qe(){if(!ie){tn(!0);for(const e in B)Ve(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=k(r,o);if(!te(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function nn(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in B)Ve(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function on(e,t){ie||qe();function n(r){let o;if(!B[r]||!(o=Be(r)))return;const s=Re[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=X(o),i>=en||!Y(o,i+1))return;const c={cached:Math.floor(Date.now()/Ne),provider:e.provider,data:t};return se(o,A+i.toString(),JSON.stringify(c))}t.lastModified&&!nn(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function ve(){}function rn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Qt(e)}))}function sn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=J(n)))return;s.prepare(n,r,o).forEach(c=>{Xt(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=te(e,l);if(!a.length)return;const f=e.pendingIcons;f&&a.forEach(d=>{f.delete(d)}),on(e,l)}catch(a){console.error(a)}rn(e)})})}))}const cn=(e,t)=>{const n=Kt(e,!0,_e()),r=Ht(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,ve)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===i)return;i=a,c=f,s.push(k(a,f));const d=o[a]||(o[a]=Object.create(null));d[f]||(d[f]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:f,name:d}=l,h=k(a,f),y=h.pendingIcons||(h.pendingIcons=new Set);y.has(d)||(y.add(d),o[a][f].push(d))}),s.forEach(l=>{const{provider:a,prefix:f}=l;o[a][f].length&&sn(l,o[a][f])}),t?Gt(t,r,s):ve},ln=e=>new Promise((t,n)=>{const r=typeof e=="string"?R(e,!0):e;if(!r){n(e);return}cn([r||e],o=>{if(o.length&&r){const s=Et(r);if(s){t({...ee,...s});return}}n(e)})});({...zt});const Se={backgroundColor:"currentColor"},an={backgroundColor:"transparent"},Ce={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ke={webkitMask:Se,mask:Se,background:an};for(const e in ke){const t=ke[e];for(const n in Ce)t[e+n]=Ce[n]}const Q={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";Q[e+"-flip"]=t,Q[e.slice(0,1)+"-flip"]=t,Q[e+"Flip"]=t});_e(!0);_t("",qt);if(typeof document<"u"&&typeof window<"u"){qe();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Ft(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Lt(n,o)||console.error(r)}catch{console.error(r)}}}}({...ee});const fn=["width","height"],un=je({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(e){var b;let t,n;const r=He(),o=Xe();(b=o==null?void 0:o.nuxtIcon)!=null&&b.aliases;const s=e,i=Qe("icons",()=>({})),c=Ue(!1),l=T(()=>{var p;return(((p=o.nuxtIcon)==null?void 0:p.aliases)||{})[s.name]||s.name}),a=T(()=>{var p;return(p=i.value)==null?void 0:p[l.value]}),f=T(()=>r.vueApp.component(l.value)),d=T(()=>{var u,S,v;if(!s.size&&typeof((u=o.nuxtIcon)==null?void 0:u.size)=="boolean"&&!((S=o.nuxtIcon)!=null&&S.size))return;const p=s.size||((v=o.nuxtIcon)==null?void 0:v.size)||"1em";return String(Number(p))===p?`${p}px`:p}),h=T(()=>{var p;return((p=o==null?void 0:o.nuxtIcon)==null?void 0:p.class)??"icon"});async function y(){var p;f.value||(p=i.value)!=null&&p[l.value]||(c.value=!0,i.value[l.value]=await ln(l.value).catch(()=>{}),c.value=!1)}return Ge(()=>l.value,y),!f.value&&([t,n]=Ke(()=>y()),t=await t,n()),(p,u)=>m(c)?(M(),le("span",{key:0,class:z(m(h)),width:m(d),height:m(d)},null,10,fn)):m(a)?(M(),ae(m(St),{key:1,icon:m(a),class:z(m(h)),width:m(d),height:m(d)},null,8,["icon","class","width","height"])):m(f)?(M(),ae(Je(m(f)),{key:2,class:z(m(h)),width:m(d),height:m(d)},null,8,["class","width","height"])):(M(),le("span",{key:3,class:z(m(h)),style:Ye({fontSize:m(d),lineHeight:m(d),width:m(d),height:m(d)})},We(e.name),7))}}),gn=Ze(un,[["__scopeId","data-v-cf1ec82f"]]);export{gn as default};
