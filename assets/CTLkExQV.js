import{_ as G}from"./KGwPwsRV.js";import{_ as Y,o as E,c as D,a,b as v,w as z,d as _,h as P,f as J,j as I,g as Q,i as q,k as X,l as R,m as Z,n as B,q as m,r as F,s as M,u as K,v as ee,x as te,y as se,z as $,A as ne,F as ie}from"./D4QNQBro.js";const oe={},re={class:"navbar bg-base-100 backdrop-blur-sm fixed top-0 z-50"},ae={class:"navbar-start"},ce={class:"dropdown"},le=a("div",{tabindex:"0",role:"button",class:"btn btn-ghost btn-circle"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"})])],-1),de={tabindex:"0",class:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"},ue=a("div",{class:"navbar-center"},[a("a",{class:"btn btn-ghost text-xl"},"Свадьба")],-1),fe=a("div",{class:"navbar-end"}," ",-1);function me(e,t){const n=G;return E(),D("div",re,[a("div",ae,[a("div",ce,[le,a("ul",de,[a("li",null,[v(n,{href:"#main"},{default:z(()=>[_("Главная")]),_:1})]),a("li",null,[v(n,{href:"#section-1"},{default:z(()=>[_("О Нас")]),_:1})]),a("li",null,[v(n,{href:"#section-2"},{default:z(()=>[_("Приглашение")]),_:1})]),a("li",null,[v(n,{href:"#section-3"},{default:z(()=>[_("Информация")]),_:1})])])])]),ue,fe])}const ge=Y(oe,[["render",me]]);async function he(e,t){return await pe(t).catch(s=>(console.error("Failed to get image meta for "+t,s+""),{width:0,height:0,ratio:0}))}async function pe(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,n)=>{const s=new Image;s.onload=()=>{const i={width:s.width,height:s.height,ratio:s.width/s.height};t(i)},s.onerror=i=>n(i),s.src=e})}function A(e){return t=>t?e[t]||t:e.missingValue}function ve({formatter:e,keyMap:t,joinWith:n="/",valueMap:s}={}){e||(e=(o,r)=>`${o}=${r}`),t&&typeof t!="function"&&(t=A(t));const i=s||{};return Object.keys(i).forEach(o=>{typeof i[o]!="function"&&(i[o]=A(i[o]))}),(o={})=>Object.entries(o).filter(([c,d])=>typeof d<"u").map(([c,d])=>{const l=i[c];return typeof l=="function"&&(d=l(o[c])),c=typeof t=="function"?t(c):c,e(c,d)}).join(n)}function x(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function _e(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const n of e.split(" ")){const s=parseInt(n.replace("x",""));s&&t.add(s)}return Array.from(t)}function xe(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function we(e){const t={};if(typeof e=="string")for(const n of e.split(/[\s,]+/).filter(s=>s)){const s=n.split(":");s.length!==2?t["1px"]=s[0].trim():t[s[0].trim()]=s[1].trim()}else Object.assign(t,e);return t}function ye(e){const t={options:e},n=(i,o={})=>C(t,i,o),s=(i,o={},r={})=>n(i,{...r,modifiers:q(o,r.modifiers||{})}).url;for(const i in e.presets)s[i]=(o,r,c)=>s(o,r,{...e.presets[i],...c});return s.options=e,s.getImage=n,s.getMeta=(i,o)=>be(t,i,o),s.getSizes=(i,o)=>ze(t,i,o),t.$img=s,s}async function be(e,t,n){const s=C(e,t,{...n});return typeof s.getMeta=="function"?await s.getMeta():await he(e,s.url)}function C(e,t,n){var l,f;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:s,defaults:i}=Se(e,n.provider||e.options.provider),o=Me(e,n.preset);if(t=P(t)?t:J(t),!s.supportsAlias)for(const g in e.options.alias)t.startsWith(g)&&(t=I(e.options.alias[g],t.substr(g.length)));if(s.validateDomains&&P(t)){const g=Q(t).host;if(!e.options.domains.find(y=>y===g))return{url:t}}const r=q(n,o,i);r.modifiers={...r.modifiers};const c=r.modifiers.format;(l=r.modifiers)!=null&&l.width&&(r.modifiers.width=x(r.modifiers.width)),(f=r.modifiers)!=null&&f.height&&(r.modifiers.height=x(r.modifiers.height));const d=s.getImage(t,r,e);return d.format=d.format||c||"",d}function Se(e,t){const n=e.options.providers[t];if(!n)throw new Error("Unknown provider: "+t);return n}function Me(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ze(e,t,n){var p,k,j,W,N;const s=x((p=n.modifiers)==null?void 0:p.width),i=x((k=n.modifiers)==null?void 0:k.height),o=we(n.sizes),r=(j=n.densities)!=null&&j.trim()?_e(n.densities.trim()):e.options.densities;xe(r);const c=s&&i?i/s:0,d=[],l=[];if(Object.keys(o).length>=1){for(const h in o){const w=O(h,String(o[h]),i,c,e);if(w!==void 0){d.push({size:w.size,screenMaxWidth:w.screenMaxWidth,media:`(max-width: ${w.screenMaxWidth}px)`});for(const S of r)l.push({width:w._cWidth*S,src:L(e,t,n,w,S)})}}$e(d)}else for(const h of r){const w=Object.keys(o)[0];let S=O(w,String(o[w]),i,c,e);S===void 0&&(S={size:"",screenMaxWidth:0,_cWidth:(W=n.modifiers)==null?void 0:W.width,_cHeight:(N=n.modifiers)==null?void 0:N.height}),l.push({width:h,src:L(e,t,n,S,h)})}Ie(l);const f=l[l.length-1],g=d.length?d.map(h=>`${h.media?h.media+" ":""}${h.size}`).join(", "):void 0,y=g?"w":"x",u=l.map(h=>`${h.src} ${h.width}${y}`).join(", ");return{sizes:g,srcset:u,src:f==null?void 0:f.src}}function O(e,t,n,s,i){const o=i.options.screens&&i.options.screens[e]||parseInt(e),r=t.endsWith("vw");if(!r&&/^\d+$/.test(t)&&(t=t+"px"),!r&&!t.endsWith("px"))return;let c=parseInt(t);if(!o||!c)return;r&&(c=Math.round(c/100*o));const d=s?Math.round(c*s):n;return{size:t,screenMaxWidth:o,_cWidth:c,_cHeight:d}}function L(e,t,n,s,i){return e.$img(t,{...n.modifiers,width:s._cWidth?s._cWidth*i:void 0,height:s._cHeight?s._cHeight*i:void 0},n)}function $e(e){var n;e.sort((s,i)=>s.screenMaxWidth-i.screenMaxWidth);let t=null;for(let s=e.length-1;s>=0;s--){const i=e[s];i.media===t&&e.splice(s,1),t=i.media}for(let s=0;s<e.length;s++)e[s].media=((n=e[s+1])==null?void 0:n.media)||""}function Ie(e){e.sort((n,s)=>n.width-s.width);let t=null;for(let n=e.length-1;n>=0;n--){const s=e[n];s.width===t&&e.splice(n,1),t=s.width}}const Te=ve({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>R(e)+"_"+R(t)}),Ee=(e,{modifiers:t={},baseURL:n}={},s)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const i=Te(t)||"_";return n||(n=I(s.options.nuxt.baseURL,"/_ipx")),{url:I(n,i,X(e))}},De=!0,Fe=!0,ke=Object.freeze(Object.defineProperty({__proto__:null,getImage:Ee,supportsAlias:Fe,validateDomains:De},Symbol.toStringTag,{value:"Module"})),H={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};H.providers={ipxStatic:{provider:ke,defaults:{}}};const U=()=>{const e=Z(),t=B();return t.$img||t._img||(t._img=ye({...H,nuxt:{baseURL:e.app.baseURL}}))};function je(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const We={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},Ne=e=>{const t=m(()=>({provider:e.provider,preset:e.preset})),n=m(()=>({width:x(e.width),height:x(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),s=U(),i=m(()=>({...e.modifiers,width:x(e.width),height:x(e.height),format:e.format,quality:e.quality||s.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:n,modifiers:i}},Pe={...We,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},Re=F({name:"NuxtImg",props:Pe,emits:["load","error"],setup:(e,t)=>{const n=U(),s=Ne(e),i=M(!1),o=m(()=>n.getSizes(e.src,{...s.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...s.modifiers.value,width:x(e.width),height:x(e.height)}})),r=m(()=>{const u={...s.attrs.value,"data-nuxt-img":""};return(!e.placeholder||i.value)&&(u.sizes=o.value.sizes,u.srcset=o.value.srcset),u}),c=m(()=>{let u=e.placeholder;if(u===""&&(u=!0),!u||i.value)return!1;if(typeof u=="string")return u;const p=Array.isArray(u)?u:typeof u=="number"?[u,u]:[10,10];return n(e.src,{...s.modifiers.value,width:p[0],height:p[1],quality:p[2]||50,blur:p[3]||3},s.options.value)}),d=m(()=>e.sizes?o.value.src:n(e.src,s.modifiers.value,s.options.value)),l=m(()=>c.value?c.value:d.value);if(e.preload){const u=Object.values(o.value).every(p=>p);K({link:[{rel:"preload",as:"image",nonce:e.nonce,...u?{href:o.value.src,imagesizes:o.value.sizes,imagesrcset:o.value.srcset}:{href:l.value}}]})}const f=M(),y=B().isHydrating;return ee(()=>{if(c.value){const u=new Image;u.src=d.value,e.sizes&&(u.sizes=o.value.sizes||"",u.srcset=o.value.srcset),u.onload=p=>{i.value=!0,t.emit("load",p)},je("nuxt-image");return}f.value&&(f.value.complete&&y&&(f.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),f.value.onload=u=>{t.emit("load",u)},f.value.onerror=u=>{t.emit("error",u)})}),()=>te("img",{ref:f,src:l.value,...r.value,...t.attrs})}});/*!
  * vue-timer-hook v1.0.84
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */class b{static getTimeFromSeconds(t){const n=m(()=>Math.ceil(t.value)),s=m(()=>Math.floor(n.value/(60*60*24))),i=m(()=>Math.floor(n.value%(60*60*24)/(60*60))),o=m(()=>Math.floor(n.value%(60*60)/60));return{seconds:m(()=>Math.floor(n.value%60)),minutes:o,hours:i,days:s}}static getSecondsFromExpiry(t,n){const s=new Date().getTime(),i=t-s;if(i>0){const o=i/1e3;return n?Math.round(o):o}return 0}static getSecondsFromPrevTime(t,n){const i=new Date().getTime()-t;if(i>0){const o=i/1e3;return n?Math.round(o):o}return 0}static getSecondsFromTimeNow(){const t=new Date,n=t.getTime(),s=t.getTimezoneOffset()*60;return n/1e3-s}static getFormattedTimeFromSeconds(t,n){const{seconds:s,minutes:i,hours:o}=b.getTimeFromSeconds(t),r=m(()=>n==="12-hour"?o.value>=12?"pm":"am":""),c=m(()=>n==="12-hour"?o.value%12:o.value);return{seconds:s,minutes:i,hours:c,ampm:r}}}class Ae{static expiryTimestamp(t){const n=new Date(t).getTime()>0;return n||console.warn("vue-timer-hook: { useTimer } Invalid expiryTimestamp settings",t),n}}const Oe=e=>typeof e=="number";function Le(e,t){let n;const s=()=>{n&&(clearInterval(n),n=void 0)},i=o=>(s(),!o&&!t?void 0:n=setInterval(e,o||t));return Oe(t)&&i(),{remove:s,start:i}}const T=1e3;function V(e){if(!Ae.expiryTimestamp(e))return null;const t=b.getSecondsFromExpiry(e),n=Math.floor((t-Math.floor(t))*1e3);return n>0?n:T}const Ve=(e=60,t=!0)=>{let n;const s=se({expiryTimestamp:e,seconds:b.getSecondsFromExpiry(e),isRunning:t,isExpired:!1,didStart:t,delay:V(e)});function i(){s.isExpired=!0,s.isRunning=!1,s.delay=null,n&&n.remove()}function o(){s.isRunning=!1,n&&n.remove()}function r(l=e,f=!0){o(),s.delay=V(l),s.didStart=f,s.isExpired=!1,s.expiryTimestamp=l,s.seconds=b.getSecondsFromExpiry(l),s.didStart&&d()}function c(){const l=new Date,f=l.setMilliseconds(l.getMilliseconds()+s.seconds*1e3);r(f)}function d(){s.didStart?(s.seconds=b.getSecondsFromExpiry(s.expiryTimestamp),s.isRunning=!0,n=Le(()=>{s.delay!==T&&(s.delay=T);const l=b.getSecondsFromExpiry(s.expiryTimestamp);s.seconds=l,l<=0&&i()},s.isRunning?s.delay:null)):c()}return r(e,t),{...b.getTimeFromSeconds($(s,"seconds")),start:d,pause:o,resume:c,restart:r,isRunning:$(s,"isRunning"),isExpired:$(s,"isExpired")}},qe={class:"grid grid-flow-col gap-5 text-center auto-cols-max"},Be={class:"flex flex-col"},Ce={class:"countdown font-mono text-5xl"},He={class:"flex flex-col"},Ue={class:"countdown font-mono text-5xl"},Ge={class:"flex flex-col"},Ye={class:"countdown font-mono text-5xl"},Je={class:"flex flex-col"},Qe={class:"countdown font-mono text-5xl"},Xe=F({__name:"CountDown",setup(e){const t=M(null),n=M(null),s=M(null),i=M(null),o=new Date,c=new Date("2024-07-13T12:00:00").getTime()-o.getTime(),d=Ve(o.getTime()+c,!0);return ne(()=>d,()=>{var l,f,g,y;(l=t.value)==null||l.style.setProperty("--value",d.days.value.toString()),(f=n.value)==null||f.style.setProperty("--value",d.hours.value.toString()),(g=s.value)==null||g.style.setProperty("--value",d.minutes.value.toString()),(y=i.value)==null||y.style.setProperty("--value",d.seconds.value.toString())},{deep:!0}),(l,f)=>(E(),D("div",qe,[a("div",Be,[a("span",Ce,[a("span",{ref_key:"days",ref:t,style:{"--value":"0"}},null,512)]),_(" дней ")]),a("div",He,[a("span",Ue,[a("span",{ref_key:"hours",ref:n,style:{"--value":"0"}},null,512)]),_(" часов ")]),a("div",Ge,[a("span",Ye,[a("span",{ref_key:"minutes",ref:s,style:{"--value":"0"}},null,512)]),_(" минут ")]),a("div",Je,[a("span",Qe,[a("span",{ref_key:"seconds",ref:i,style:{"--value":"0"}},null,512)]),_(" секунд ")])]))}}),Ze={class:"h-screen w-full z-0 relative bg-gradient-to-r from-cyan-100 to-pink-200 flex flex-col items-center justify-center"},Ke=a("div",{class:"text-center top-20 flex flex-col gap-3"},[a("p",{class:"text-3xl font-bold"},[_(" Валерия "),a("span",{class:"animate-pulse"},"💖"),_(" Виталий ")]),a("p",{class:"text-2xl font-bold"},"13.07.2024")],-1),et=a("div",{class:"mt-[64px] max-w-[640px] mx-auto"},[a("section",{class:"h-[1000px] bg-slate-400",id:"section-1"},"Section 1"),a("section",{class:"h-[1000px] bg-red-400",id:"section-2"},"Section 2"),a("section",{class:"h-[1000px] bg-blue-400",id:"section-3"},"Section 3")],-1),nt=F({__name:"index",setup(e){return(t,n)=>{const s=ge,i=Re,o=Xe;return E(),D(ie,null,[v(s),a("section",Ze,[v(i,{src:"img/IMG_1224.webp",class:"absolute left-20 top-[130px] h-[350px] w-[300px] rounded-xl blur-[2px] -rotate-3 -z-10"}),v(i,{src:"img/IMG_1135.webp",class:"absolute left-24 top-[300px] h-[350px] w-[300px] rounded-xl blur-[2px] rotate-6 -z-10"}),v(i,{src:"img/IMG_1318.webp",class:"absolute right-20 top-[130px] h-[350px] w-[300px] rounded-xl blur-[2px] rotate-3 -z-10"}),v(i,{src:"img/IMG_1174.webp",class:"absolute right-24 top-[300px] h-[350px] w-[300px] rounded-xl blur-[2px] -rotate-6 -z-10"}),Ke,v(o,{id:"main",class:"absolute bottom-20"})]),et],64)}}});export{nt as default};