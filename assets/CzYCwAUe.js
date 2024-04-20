import{_ as V}from"./HRpKMdda.js";import{_ as y,o as x,c as v,a as n,b as l,w as h,d as _,r as z,f as w,g as p,h as S,i as g,j as C,k as T,l as $,F as R}from"./BuSzGFI4.js";const N={},j={class:"navbar backdrop-blur-sm bg-white/30 fixed top-0 z-50"},I={class:"navbar-start"},P={class:"dropdown"},B=n("div",{tabindex:"0",role:"button",class:"btn btn-ghost btn-circle"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"})])],-1),L={tabindex:"0",class:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"},A=n("div",{class:"navbar-center"},[n("a",{class:"btn btn-ghost montserrat-regular uppercase text-xl"},"Приглашение на свадьбу")],-1),U=n("div",{class:"navbar-end"}," ",-1);function G(c,s){const e=V;return x(),v("div",j,[n("div",I,[n("div",P,[B,n("ul",L,[n("li",null,[l(e,{href:"#main"},{default:h(()=>[_("Главная")]),_:1})]),n("li",null,[l(e,{href:"#section-1"},{default:h(()=>[_("О Нас")]),_:1})]),n("li",null,[l(e,{href:"#section-2"},{default:h(()=>[_("Приглашение")]),_:1})]),n("li",null,[l(e,{href:"#section-3"},{default:h(()=>[_("Информация")]),_:1})])])])]),A,U])}const O=y(N,[["render",G]]);/*!
  * vue-timer-hook v1.0.84
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */class u{static getTimeFromSeconds(s){const e=p(()=>Math.ceil(s.value)),t=p(()=>Math.floor(e.value/(60*60*24))),a=p(()=>Math.floor(e.value%(60*60*24)/(60*60))),o=p(()=>Math.floor(e.value%(60*60)/60));return{seconds:p(()=>Math.floor(e.value%60)),minutes:o,hours:a,days:t}}static getSecondsFromExpiry(s,e){const t=new Date().getTime(),a=s-t;if(a>0){const o=a/1e3;return e?Math.round(o):o}return 0}static getSecondsFromPrevTime(s,e){const a=new Date().getTime()-s;if(a>0){const o=a/1e3;return e?Math.round(o):o}return 0}static getSecondsFromTimeNow(){const s=new Date,e=s.getTime(),t=s.getTimezoneOffset()*60;return e/1e3-t}static getFormattedTimeFromSeconds(s,e){const{seconds:t,minutes:a,hours:o}=u.getTimeFromSeconds(s),r=p(()=>e==="12-hour"?o.value>=12?"pm":"am":""),f=p(()=>e==="12-hour"?o.value%12:o.value);return{seconds:t,minutes:a,hours:f,ampm:r}}}class Y{static expiryTimestamp(s){const e=new Date(s).getTime()>0;return e||console.warn("vue-timer-hook: { useTimer } Invalid expiryTimestamp settings",s),e}}const q=c=>typeof c=="number";function H(c,s){let e;const t=()=>{e&&(clearInterval(e),e=void 0)},a=o=>(t(),!o&&!s?void 0:e=setInterval(c,o||s));return q(s)&&a(),{remove:t,start:a}}const b=1e3;function F(c){if(!Y.expiryTimestamp(c))return null;const s=u.getSecondsFromExpiry(c),e=Math.floor((s-Math.floor(s))*1e3);return e>0?e:b}const J=(c=60,s=!0)=>{let e;const t=z({expiryTimestamp:c,seconds:u.getSecondsFromExpiry(c),isRunning:s,isExpired:!1,didStart:s,delay:F(c)});function a(){t.isExpired=!0,t.isRunning=!1,t.delay=null,e&&e.remove()}function o(){t.isRunning=!1,e&&e.remove()}function r(i=c,m=!0){o(),t.delay=F(i),t.didStart=m,t.isExpired=!1,t.expiryTimestamp=i,t.seconds=u.getSecondsFromExpiry(i),t.didStart&&d()}function f(){const i=new Date,m=i.setMilliseconds(i.getMilliseconds()+t.seconds*1e3);r(m)}function d(){t.didStart?(t.seconds=u.getSecondsFromExpiry(t.expiryTimestamp),t.isRunning=!0,e=H(()=>{t.delay!==b&&(t.delay=b);const i=u.getSecondsFromExpiry(t.expiryTimestamp);t.seconds=i,i<=0&&a()},t.isRunning?t.delay:null)):f()}return r(c,s),{...u.getTimeFromSeconds(w(t,"seconds")),start:d,pause:o,resume:f,restart:r,isRunning:w(t,"isRunning"),isExpired:w(t,"isExpired")}},K={class:"grid grid-flow-col gap-5 text-center auto-cols-max backdrop-blur-sm bg-white/30 p-3 rounded-xl"},Q={class:"flex flex-col"},W={class:"countdown font-mono text-5xl"},X={class:"flex flex-col"},Z={class:"countdown font-mono text-5xl"},ee={class:"flex flex-col"},te={class:"countdown font-mono text-5xl"},se={class:"flex flex-col"},ne={class:"countdown font-mono text-5xl"},oe=S({__name:"CountDown",setup(c){const s=g(null),e=g(null),t=g(null),a=g(null),o=new Date,f=new Date("2024-07-13T12:00:00").getTime()-o.getTime(),d=J(o.getTime()+f,!0);return C(()=>d,()=>{var i,m,M,D;(i=s.value)==null||i.style.setProperty("--value",d.days.value.toString()),(m=e.value)==null||m.style.setProperty("--value",d.hours.value.toString()),(M=t.value)==null||M.style.setProperty("--value",d.minutes.value.toString()),(D=a.value)==null||D.style.setProperty("--value",d.seconds.value.toString())},{deep:!0}),(i,m)=>(x(),v("div",K,[n("div",Q,[n("span",W,[n("span",{ref_key:"days",ref:s,style:{"--value":"0"}},null,512)]),_(" дней ")]),n("div",X,[n("span",Z,[n("span",{ref_key:"hours",ref:e,style:{"--value":"0"}},null,512)]),_(" часов ")]),n("div",ee,[n("span",te,[n("span",{ref_key:"minutes",ref:t,style:{"--value":"0"}},null,512)]),_(" минут ")]),n("div",se,[n("span",ne,[n("span",{ref_key:"seconds",ref:a,style:{"--value":"0"}},null,512)]),_(" секунд ")])]))}}),ce=T("/img/IMG_6485.webp"),ae={},ie={class:"h-screen w-full z-0 relative flex flex-col items-center shadow-3xl"},le=$('<img src="'+ce+'" class="absolute h-full w-full object-cover -z-10"><div class="absolute top-28 text-center flex flex-col gap-3"><p class="text-3xl font-bold xl:text-4xl"><span class="text-zinc-800 lobster-regular">Валерия</span><span class="animate-pulse">💞</span><span class="text-zinc-800 lobster-regular">Виталий</span></p><p class="text-2xl font-bold text-zinc-800">13.07.2024</p></div>',2);function re(c,s){const e=oe;return x(),v("section",ie,[le,l(e,{id:"main",class:"absolute bottom-20 text-white"})])}const de=y(ae,[["render",re]]),k=T("/img/vit_ava.png"),E=T("/img/lera_ava.png"),ue=$('<div class="chat chat-start"><div class="chat-image avatar"><div class="w-10 rounded-full"><img alt="Tailwind CSS chat bubble component" src="'+k+'"></div></div><div class="chat-header text-white"> 💙💙💙Медвежонок💙💙💙 <time class="text-xs opacity-50">12:45</time></div><div class="chat-bubble">Дорогая, ты знаешь, что я тебя люблю?</div><div class="chat-footer opacity-50 text-white">Прочитано</div></div><div class="chat chat-end"><div class="chat-image avatar"><div class="w-10 rounded-full"><img alt="Tailwind CSS chat bubble component" src="'+E+'"></div></div><div class="chat-header text-white"> Любимая ❤️‍🔥 <time class="text-xs opacity-50">12:46</time></div><div class="chat-bubble"> Конечно, дорогой, ведь ты же каждый день это повторяешь, особенно, когда прошу тебя помыть посуду! </div><div class="chat-footer opacity-50 text-white">Просмотрено в 12:46</div></div>',2),_e=S({__name:"Chat",setup(c){return(s,e)=>ue}}),me={},pe={class:"max-w-[640px] mx-auto flex items-center",id:"section-1"},fe={class:"flex flex-col gap-8 max-sm:px-4"},xe=$('<div class="text-center montserrat-regular p-2 text-white"> Дорогие друзья! Мы осознали, что в жизни нет ничего более важного, чем жить, любить и ощущать. Мы поняли, что хотим идти вперед только вместе. И сейчас мы мечтаем о том, чтобы день нашей свадьбы стал ярким и незабываемым событием на этом захватывающем пути. Будете ли вы рады разделить этот счастливый день с нами? Мы с нетерпением ждем встречи на нашей свадьбе! </div><div class="flex items-center justify-between"><div class="relative"><img src="'+k+'" alt="ava_2" class="rounded-full object-cover max-sm:h-[170px] max-sm:w-[170px] h-[200px] w-[200px]"></div><img src="'+E+'" class="rounded-full object-cover max-sm:h-[170px] max-sm:w-[170px] h-[200px] w-[200px]" alt="ava_1"></div>',2);function ve(c,s){const e=_e;return x(),v("div",pe,[n("section",fe,[xe,l(e)])])}const he=y(me,[["render",ve]]),ge={class:"mx-auto"},we={class:"bg-zinc-600 py-28"},be=n("section",{class:"h-[1000px]",id:"section-2"},"Section 2",-1),ye=n("section",{class:"h-[1000px]",id:"section-3"},"Section 3",-1),$e=S({__name:"index",setup(c){return(s,e)=>{const t=O,a=de,o=he;return x(),v(R,null,[l(t),l(a),n("div",ge,[n("div",we,[l(o)]),be,ye])],64)}}});export{$e as default};