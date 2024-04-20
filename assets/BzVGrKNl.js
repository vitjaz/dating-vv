import{_ as D}from"./D73fzinJ.js";import{_ as F,o as w,c as b,a as s,b as p,w as x,d as u,r as k,f as v,g as f,h as M,i as h,j as E,k as $,F as V,l as R}from"./Dq5vikz8.js";const N={},I={class:"navbar backdrop-blur-sm bg-white/30 fixed top-0 z-50"},z={class:"navbar-start"},C={class:"dropdown"},P=s("div",{tabindex:"0",role:"button",class:"btn btn-ghost btn-circle"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"})])],-1),j={tabindex:"0",class:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"},B=s("div",{class:"navbar-center"},[s("a",{class:"btn btn-ghost text-xl"},"Свадьба")],-1),L=s("div",{class:"navbar-end"}," ",-1);function A(a,n){const t=D;return w(),b("div",I,[s("div",z,[s("div",C,[P,s("ul",j,[s("li",null,[p(t,{href:"#main"},{default:x(()=>[u("Главная")]),_:1})]),s("li",null,[p(t,{href:"#section-1"},{default:x(()=>[u("О Нас")]),_:1})]),s("li",null,[p(t,{href:"#section-2"},{default:x(()=>[u("Приглашение")]),_:1})]),s("li",null,[p(t,{href:"#section-3"},{default:x(()=>[u("Информация")]),_:1})])])])]),B,L])}const U=F(N,[["render",A]]);/*!
  * vue-timer-hook v1.0.84
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */class d{static getTimeFromSeconds(n){const t=f(()=>Math.ceil(n.value)),e=f(()=>Math.floor(t.value/(60*60*24))),c=f(()=>Math.floor(t.value%(60*60*24)/(60*60))),o=f(()=>Math.floor(t.value%(60*60)/60));return{seconds:f(()=>Math.floor(t.value%60)),minutes:o,hours:c,days:e}}static getSecondsFromExpiry(n,t){const e=new Date().getTime(),c=n-e;if(c>0){const o=c/1e3;return t?Math.round(o):o}return 0}static getSecondsFromPrevTime(n,t){const c=new Date().getTime()-n;if(c>0){const o=c/1e3;return t?Math.round(o):o}return 0}static getSecondsFromTimeNow(){const n=new Date,t=n.getTime(),e=n.getTimezoneOffset()*60;return t/1e3-e}static getFormattedTimeFromSeconds(n,t){const{seconds:e,minutes:c,hours:o}=d.getTimeFromSeconds(n),l=f(()=>t==="12-hour"?o.value>=12?"pm":"am":""),_=f(()=>t==="12-hour"?o.value%12:o.value);return{seconds:e,minutes:c,hours:_,ampm:l}}}class G{static expiryTimestamp(n){const t=new Date(n).getTime()>0;return t||console.warn("vue-timer-hook: { useTimer } Invalid expiryTimestamp settings",n),t}}const O=a=>typeof a=="number";function Y(a,n){let t;const e=()=>{t&&(clearInterval(t),t=void 0)},c=o=>(e(),!o&&!n?void 0:t=setInterval(a,o||n));return O(n)&&c(),{remove:e,start:c}}const g=1e3;function T(a){if(!G.expiryTimestamp(a))return null;const n=d.getSecondsFromExpiry(a),t=Math.floor((n-Math.floor(n))*1e3);return t>0?t:g}const q=(a=60,n=!0)=>{let t;const e=k({expiryTimestamp:a,seconds:d.getSecondsFromExpiry(a),isRunning:n,isExpired:!1,didStart:n,delay:T(a)});function c(){e.isExpired=!0,e.isRunning=!1,e.delay=null,t&&t.remove()}function o(){e.isRunning=!1,t&&t.remove()}function l(i=a,m=!0){o(),e.delay=T(i),e.didStart=m,e.isExpired=!1,e.expiryTimestamp=i,e.seconds=d.getSecondsFromExpiry(i),e.didStart&&r()}function _(){const i=new Date,m=i.setMilliseconds(i.getMilliseconds()+e.seconds*1e3);l(m)}function r(){e.didStart?(e.seconds=d.getSecondsFromExpiry(e.expiryTimestamp),e.isRunning=!0,t=Y(()=>{e.delay!==g&&(e.delay=g);const i=d.getSecondsFromExpiry(e.expiryTimestamp);e.seconds=i,i<=0&&c()},e.isRunning?e.delay:null)):_()}return l(a,n),{...d.getTimeFromSeconds(v(e,"seconds")),start:r,pause:o,resume:_,restart:l,isRunning:v(e,"isRunning"),isExpired:v(e,"isExpired")}},H={class:"grid grid-flow-col gap-5 text-center auto-cols-max backdrop-blur-sm bg-white/30 p-3 rounded-xl"},J={class:"flex flex-col"},K={class:"countdown font-mono text-5xl"},Q={class:"flex flex-col"},W={class:"countdown font-mono text-5xl"},X={class:"flex flex-col"},Z={class:"countdown font-mono text-5xl"},ee={class:"flex flex-col"},te={class:"countdown font-mono text-5xl"},se=M({__name:"CountDown",setup(a){const n=h(null),t=h(null),e=h(null),c=h(null),o=new Date,_=new Date("2024-07-13T12:00:00").getTime()-o.getTime(),r=q(o.getTime()+_,!0);return E(()=>r,()=>{var i,m,y,S;(i=n.value)==null||i.style.setProperty("--value",r.days.value.toString()),(m=t.value)==null||m.style.setProperty("--value",r.hours.value.toString()),(y=e.value)==null||y.style.setProperty("--value",r.minutes.value.toString()),(S=c.value)==null||S.style.setProperty("--value",r.seconds.value.toString())},{deep:!0}),(i,m)=>(w(),b("div",H,[s("div",J,[s("span",K,[s("span",{ref_key:"days",ref:n,style:{"--value":"0"}},null,512)]),u(" дней ")]),s("div",Q,[s("span",W,[s("span",{ref_key:"hours",ref:t,style:{"--value":"0"}},null,512)]),u(" часов ")]),s("div",X,[s("span",Z,[s("span",{ref_key:"minutes",ref:e,style:{"--value":"0"}},null,512)]),u(" минут ")]),s("div",ee,[s("span",te,[s("span",{ref_key:"seconds",ref:c,style:{"--value":"0"}},null,512)]),u(" секунд ")])]))}}),ne=$("/img/IMG_1224.webp"),oe={class:"h-screen w-full z-0 relative flex flex-col items-center justify-center"},ce=R('<img src="'+ne+'" class="absolute h-full w-full object-cover rounded-xl -z-10"><div class="text-center top-20 flex flex-col gap-3"><p class="text-3xl font-bold"><span class="text-white">Валерия</span><span class="animate-pulse">💖</span><span class="text-white">Виталий</span></p><p class="text-2xl font-bold text-white">13.07.2024</p></div>',2),ae=s("div",{class:"mt-[64px] max-w-[640px] mx-auto"},[s("section",{class:"h-[1000px] bg-slate-400",id:"section-1"},"Section 1"),s("section",{class:"h-[1000px] bg-red-400",id:"section-2"},"Section 2"),s("section",{class:"h-[1000px] bg-blue-400",id:"section-3"},"Section 3")],-1),re=M({__name:"index",setup(a){return(n,t)=>{const e=U,c=se;return w(),b(V,null,[p(e),s("section",oe,[ce,p(c,{id:"main",class:"absolute bottom-20 text-white"})]),ae],64)}}});export{re as default};
