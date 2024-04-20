import{_ as F}from"./C_OL7KFc.js";import{_ as k,o as w,c as y,a as s,b as f,w as x,d as u,r as E,f as v,g as p,h as D,i as h,j as $,k as g,F as V,l as I}from"./CNa0s2wo.js";const R={},z={class:"navbar bg-base-100 backdrop-blur-sm fixed top-0 z-50"},N={class:"navbar-start"},C={class:"dropdown"},P=s("div",{tabindex:"0",role:"button",class:"btn btn-ghost btn-circle"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"})])],-1),B={tabindex:"0",class:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"},G=s("div",{class:"navbar-center"},[s("a",{class:"btn btn-ghost text-xl"},"Свадьба")],-1),L=s("div",{class:"navbar-end"}," ",-1);function j(a,n){const t=F;return w(),y("div",z,[s("div",N,[s("div",C,[P,s("ul",B,[s("li",null,[f(t,{href:"#main"},{default:x(()=>[u("Главная")]),_:1})]),s("li",null,[f(t,{href:"#section-1"},{default:x(()=>[u("О Нас")]),_:1})]),s("li",null,[f(t,{href:"#section-2"},{default:x(()=>[u("Приглашение")]),_:1})]),s("li",null,[f(t,{href:"#section-3"},{default:x(()=>[u("Информация")]),_:1})])])])]),G,L])}const A=k(R,[["render",j]]);/*!
  * vue-timer-hook v1.0.84
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */class d{static getTimeFromSeconds(n){const t=p(()=>Math.ceil(n.value)),e=p(()=>Math.floor(t.value/(60*60*24))),c=p(()=>Math.floor(t.value%(60*60*24)/(60*60))),o=p(()=>Math.floor(t.value%(60*60)/60));return{seconds:p(()=>Math.floor(t.value%60)),minutes:o,hours:c,days:e}}static getSecondsFromExpiry(n,t){const e=new Date().getTime(),c=n-e;if(c>0){const o=c/1e3;return t?Math.round(o):o}return 0}static getSecondsFromPrevTime(n,t){const c=new Date().getTime()-n;if(c>0){const o=c/1e3;return t?Math.round(o):o}return 0}static getSecondsFromTimeNow(){const n=new Date,t=n.getTime(),e=n.getTimezoneOffset()*60;return t/1e3-e}static getFormattedTimeFromSeconds(n,t){const{seconds:e,minutes:c,hours:o}=d.getTimeFromSeconds(n),l=p(()=>t==="12-hour"?o.value>=12?"pm":"am":""),_=p(()=>t==="12-hour"?o.value%12:o.value);return{seconds:e,minutes:c,hours:_,ampm:l}}}class U{static expiryTimestamp(n){const t=new Date(n).getTime()>0;return t||console.warn("vue-timer-hook: { useTimer } Invalid expiryTimestamp settings",n),t}}const O=a=>typeof a=="number";function Y(a,n){let t;const e=()=>{t&&(clearInterval(t),t=void 0)},c=o=>(e(),!o&&!n?void 0:t=setInterval(a,o||n));return O(n)&&c(),{remove:e,start:c}}const b=1e3;function M(a){if(!U.expiryTimestamp(a))return null;const n=d.getSecondsFromExpiry(a),t=Math.floor((n-Math.floor(n))*1e3);return t>0?t:b}const q=(a=60,n=!0)=>{let t;const e=E({expiryTimestamp:a,seconds:d.getSecondsFromExpiry(a),isRunning:n,isExpired:!1,didStart:n,delay:M(a)});function c(){e.isExpired=!0,e.isRunning=!1,e.delay=null,t&&t.remove()}function o(){e.isRunning=!1,t&&t.remove()}function l(i=a,m=!0){o(),e.delay=M(i),e.didStart=m,e.isExpired=!1,e.expiryTimestamp=i,e.seconds=d.getSecondsFromExpiry(i),e.didStart&&r()}function _(){const i=new Date,m=i.setMilliseconds(i.getMilliseconds()+e.seconds*1e3);l(m)}function r(){e.didStart?(e.seconds=d.getSecondsFromExpiry(e.expiryTimestamp),e.isRunning=!0,t=Y(()=>{e.delay!==b&&(e.delay=b);const i=d.getSecondsFromExpiry(e.expiryTimestamp);e.seconds=i,i<=0&&c()},e.isRunning?e.delay:null)):_()}return l(a,n),{...d.getTimeFromSeconds(v(e,"seconds")),start:r,pause:o,resume:_,restart:l,isRunning:v(e,"isRunning"),isExpired:v(e,"isExpired")}},H={class:"grid grid-flow-col gap-5 text-center auto-cols-max"},J={class:"flex flex-col"},K={class:"countdown font-mono text-5xl"},Q={class:"flex flex-col"},W={class:"countdown font-mono text-5xl"},X={class:"flex flex-col"},Z={class:"countdown font-mono text-5xl"},ee={class:"flex flex-col"},te={class:"countdown font-mono text-5xl"},se=D({__name:"CountDown",setup(a){const n=h(null),t=h(null),e=h(null),c=h(null),o=new Date,_=new Date("2024-07-13T12:00:00").getTime()-o.getTime(),r=q(o.getTime()+_,!0);return $(()=>r,()=>{var i,m,S,T;(i=n.value)==null||i.style.setProperty("--value",r.days.value.toString()),(m=t.value)==null||m.style.setProperty("--value",r.hours.value.toString()),(S=e.value)==null||S.style.setProperty("--value",r.minutes.value.toString()),(T=c.value)==null||T.style.setProperty("--value",r.seconds.value.toString())},{deep:!0}),(i,m)=>(w(),y("div",H,[s("div",J,[s("span",K,[s("span",{ref_key:"days",ref:n,style:{"--value":"0"}},null,512)]),u(" дней ")]),s("div",Q,[s("span",W,[s("span",{ref_key:"hours",ref:t,style:{"--value":"0"}},null,512)]),u(" часов ")]),s("div",X,[s("span",Z,[s("span",{ref_key:"minutes",ref:e,style:{"--value":"0"}},null,512)]),u(" минут ")]),s("div",ee,[s("span",te,[s("span",{ref_key:"seconds",ref:c,style:{"--value":"0"}},null,512)]),u(" секунд ")])]))}}),ne=g("/img/IMG_1224.webp"),oe=g("/img/IMG_1135.webp"),ce=g("/img/IMG_1318.webp"),ae=g("/img/IMG_1174.webp"),ie={class:"h-screen w-full z-0 relative bg-gradient-to-r from-cyan-100 to-pink-200 flex flex-col items-center justify-center"},le=I('<img src="'+ne+'" class="absolute left-20 top-[130px] h-[350px] w-[300px] rounded-xl blur-[2px] -rotate-3 -z-10"><img src="'+oe+'" class="absolute left-24 top-[300px] h-[350px] w-[300px] rounded-xl blur-[2px] rotate-6 -z-10"><img src="'+ce+'" class="absolute right-20 top-[130px] h-[350px] w-[300px] rounded-xl blur-[2px] rotate-3 -z-10"><img src="'+ae+'" class="absolute right-24 top-[300px] h-[350px] w-[300px] rounded-xl blur-[2px] -rotate-6 -z-10"><div class="text-center top-20 flex flex-col gap-3"><p class="text-3xl font-bold"> Валерия <span class="animate-pulse">💖</span> Виталий </p><p class="text-2xl font-bold">13.07.2024</p></div>',5),re=s("div",{class:"mt-[64px] max-w-[640px] mx-auto"},[s("section",{class:"h-[1000px] bg-slate-400",id:"section-1"},"Section 1"),s("section",{class:"h-[1000px] bg-red-400",id:"section-2"},"Section 2"),s("section",{class:"h-[1000px] bg-blue-400",id:"section-3"},"Section 3")],-1),me=D({__name:"index",setup(a){return(n,t)=>{const e=A,c=se;return w(),y(V,null,[f(e),s("section",ie,[le,f(c,{id:"main",class:"absolute bottom-20"})]),re],64)}}});export{me as default};
