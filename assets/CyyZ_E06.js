import{_ as N}from"./BjBBkssA.js";import{_ as g,o as i,c as _,a as e,b as r,w as p,d as h,r as j,f as C,g as b,h as S,i as x,j as q,k as I,l as k,m as A,n as L,q as T,s as G,v as w,x as W,y as P,z as y,A as F,F as R,B as U,C as O}from"./Cs-CXHcI.js";import H from"./BueAzLfh.js";const Q={},Y={class:"navbar backdrop-blur-sm bg-white/30 fixed top-0 z-50"},J={class:"navbar-start"},K={class:"dropdown"},X=e("div",{tabindex:"0",role:"button",class:"btn btn-ghost btn-circle"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"})])],-1),Z={tabindex:"0",class:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"},ee=e("div",{class:"navbar-center"},[e("a",{class:"btn btn-ghost montserrat-regular uppercase text-xl"},"Приглашение на свадьбу")],-1),te=e("div",{class:"navbar-end"}," ",-1);function se(c,n){const t=N;return i(),_("div",Y,[e("div",J,[e("div",K,[X,e("ul",Z,[e("li",null,[r(t,{href:"#main"},{default:p(()=>[h("Главная")]),_:1})]),e("li",null,[r(t,{href:"#section-1"},{default:p(()=>[h("О нас")]),_:1})]),e("li",null,[r(t,{href:"#section-2"},{default:p(()=>[h("Ответы на вопросы")]),_:1})]),e("li",null,[r(t,{href:"#section-3"},{default:p(()=>[h("План меропрития")]),_:1})]),e("li",null,[r(t,{href:"#section-4"},{default:p(()=>[h("Фотографии")]),_:1})]),e("li",null,[r(t,{href:"#section-5"},{default:p(()=>[h("Телеграмм")]),_:1})])])])]),ee,te])}const ne=g(Q,[["render",se]]);/*!
  * vue-timer-hook v1.0.84
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */class f{static getTimeFromSeconds(n){const t=b(()=>Math.ceil(n.value)),s=b(()=>Math.floor(t.value/(60*60*24))),o=b(()=>Math.floor(t.value%(60*60*24)/(60*60))),a=b(()=>Math.floor(t.value%(60*60)/60));return{seconds:b(()=>Math.floor(t.value%60)),minutes:a,hours:o,days:s}}static getSecondsFromExpiry(n,t){const s=new Date().getTime(),o=n-s;if(o>0){const a=o/1e3;return t?Math.round(a):a}return 0}static getSecondsFromPrevTime(n,t){const o=new Date().getTime()-n;if(o>0){const a=o/1e3;return t?Math.round(a):a}return 0}static getSecondsFromTimeNow(){const n=new Date,t=n.getTime(),s=n.getTimezoneOffset()*60;return t/1e3-s}static getFormattedTimeFromSeconds(n,t){const{seconds:s,minutes:o,hours:a}=f.getTimeFromSeconds(n),d=b(()=>t==="12-hour"?a.value>=12?"pm":"am":""),v=b(()=>t==="12-hour"?a.value%12:a.value);return{seconds:s,minutes:o,hours:v,ampm:d}}}class oe{static expiryTimestamp(n){const t=new Date(n).getTime()>0;return t||console.warn("vue-timer-hook: { useTimer } Invalid expiryTimestamp settings",n),t}}const ae=c=>typeof c=="number";function ce(c,n){let t;const s=()=>{t&&(clearInterval(t),t=void 0)},o=a=>(s(),!a&&!n?void 0:t=setInterval(c,a||n));return ae(n)&&o(),{remove:s,start:o}}const D=1e3;function E(c){if(!oe.expiryTimestamp(c))return null;const n=f.getSecondsFromExpiry(c),t=Math.floor((n-Math.floor(n))*1e3);return t>0?t:D}const ie=(c=60,n=!0)=>{let t;const s=j({expiryTimestamp:c,seconds:f.getSecondsFromExpiry(c),isRunning:n,isExpired:!1,didStart:n,delay:E(c)});function o(){s.isExpired=!0,s.isRunning=!1,s.delay=null,t&&t.remove()}function a(){s.isRunning=!1,t&&t.remove()}function d(u=c,l=!0){a(),s.delay=E(u),s.didStart=l,s.isExpired=!1,s.expiryTimestamp=u,s.seconds=f.getSecondsFromExpiry(u),s.didStart&&m()}function v(){const u=new Date,l=u.setMilliseconds(u.getMilliseconds()+s.seconds*1e3);d(l)}function m(){s.didStart?(s.seconds=f.getSecondsFromExpiry(s.expiryTimestamp),s.isRunning=!0,t=ce(()=>{s.delay!==D&&(s.delay=D);const u=f.getSecondsFromExpiry(s.expiryTimestamp);s.seconds=u,u<=0&&o()},s.isRunning?s.delay:null)):v()}return d(c,n),{...f.getTimeFromSeconds(C(s,"seconds")),start:m,pause:a,resume:v,restart:d,isRunning:C(s,"isRunning"),isExpired:C(s,"isExpired")}},le={class:"grid grid-flow-col gap-5 text-center auto-cols-max backdrop-blur-sm bg-white/30 p-3 rounded-xl"},re={class:"flex flex-col"},de={class:"countdown font-mono text-5xl"},_e={class:"flex flex-col"},me={class:"countdown font-mono text-5xl"},ue={class:"flex flex-col"},pe={class:"countdown font-mono text-5xl"},ve={class:"flex flex-col"},he={class:"countdown font-mono text-5xl"},fe=S({__name:"CountDown",setup(c){const n=x(null),t=x(null),s=x(null),o=x(null),a=new Date,v=new Date("2024-07-13T12:00:00").getTime()-a.getTime(),m=ie(a.getTime()+v,!0);return q(()=>m,()=>{var u,l,$,z;(u=n.value)==null||u.style.setProperty("--value",m.days.value.toString()),(l=t.value)==null||l.style.setProperty("--value",m.hours.value.toString()),($=s.value)==null||$.style.setProperty("--value",m.minutes.value.toString()),(z=o.value)==null||z.style.setProperty("--value",m.seconds.value.toString())},{deep:!0}),(u,l)=>(i(),_("div",le,[e("div",re,[e("span",de,[e("span",{ref_key:"days",ref:n,style:{"--value":"0"}},null,512)]),h(" дней ")]),e("div",_e,[e("span",me,[e("span",{ref_key:"hours",ref:t,style:{"--value":"0"}},null,512)]),h(" часов ")]),e("div",ue,[e("span",pe,[e("span",{ref_key:"minutes",ref:s,style:{"--value":"0"}},null,512)]),h(" минут ")]),e("div",ve,[e("span",he,[e("span",{ref_key:"seconds",ref:o,style:{"--value":"0"}},null,512)]),h(" секунд ")])]))}}),xe=I("/img/IMG_6485.webp"),ge={},be={class:"h-screen w-full z-0 relative flex flex-col items-center shadow-3xl"},we=k('<img src="'+xe+'" class="absolute h-full w-full object-cover -z-10"><div class="absolute top-28 text-center flex flex-col gap-3"><p class="text-3xl font-bold xl:text-4xl"><span class="text-zinc-800 lobster-regular">Валерия</span><span class="animate-pulse">💞</span><span class="text-zinc-800 lobster-regular">Виталий</span></p><p class="text-2xl font-bold text-zinc-800">13.07.2024</p></div>',2);function $e(c,n){const t=fe;return i(),_("section",be,[we,r(t,{id:"main",class:"absolute bottom-20 text-white"})])}const ye=g(ge,[["render",$e]]),V=I("/img/vit_ava.png"),B=I("/img/lera_ava.png"),Se=k('<div class="chat chat-start mt-8"><div class="chat-image avatar"><div class="w-10 rounded-full"><img alt="Tailwind CSS chat bubble component" src="'+V+'"></div></div><div class="chat-header text-white montserrat-regular"> 💙💙💙Медвежонок💙💙💙 <time class="text-xs opacity-50">12:45</time></div><div class="chat-bubble montserrat-regular"> Дорогая, ты знаешь, что я тебя люблю? </div><div class="chat-footer opacity-50 text-white montserrat-regular"> Прочитано </div></div><div class="chat chat-end"><div class="chat-image avatar"><div class="w-10 rounded-full"><img alt="Tailwind CSS chat bubble component" src="'+B+'"></div></div><div class="chat-header text-white montserrat-regular"> Любимая ❤️‍🔥 <time class="text-xs opacity-50">12:46</time></div><div class="chat-bubble montserrat-regular"> Конечно, дорогой, ведь ты же каждый день это повторяешь, особенно, когда прошу тебя помыть посуду! </div><div class="chat-footer opacity-50 text-white montserrat-regular"> Просмотрено в 12:46 </div></div>',2),ke=S({__name:"Chat",setup(c){return(n,t)=>Se}}),Te=["id"],Me={class:"max-sm:px-4"},M=S({__name:"SectionWrapper",props:{id:{},disableHScreen:{type:Boolean}},setup(c){return(n,t)=>(i(),_("div",{class:L(["max-w-[640px] mx-auto flex items-center justify-center",n.disableHScreen?"h-full":"h-screen"]),id:`section-${n.$props.id}`},[e("section",Me,[A(n.$slots,"default")])],10,Te))}}),Ie={},ze=e("div",{class:"text-center montserrat-regular p-2 text-white"}," Дорогие друзья! Мы осознали, что в жизни нет ничего более важного, чем жить, любить и ощущать. Мы поняли, что хотим идти вперед только вместе. И сейчас мы мечтаем о том, чтобы день нашей свадьбы стал ярким и незабываемым событием на этом захватывающем пути. Будете ли вы рады разделить этот счастливый день с нами? Мы с нетерпением ждем встречи на нашей свадьбе! ",-1),Ce=e("div",{class:"flex items-center justify-between mt-8"},[e("div",{class:"flex flex-col items-center gap-3"},[e("img",{src:V,alt:"ava_2",class:"mask mask-squircle object-cover max-sm:h-[170px] max-sm:w-[170px] h-[200px] w-[200px]"}),e("p",{class:"text-white"},"Виталик")]),e("span",{class:"relative flex scale-150"},[e("span",{class:"animate-ping inline-flex absolute"},"❤️"),e("span",{class:"relative inline-flex"},"❤️")]),e("div",{class:"flex flex-col items-center gap-3"},[e("img",{src:B,class:"mask mask-squircle object-cover max-sm:h-[170px] max-sm:w-[170px] h-[200px] w-[200px]",alt:"ava_1"}),e("p",{class:"text-white"},"Валерия")])],-1);function De(c,n){const t=ke,s=M;return i(),T(s,{id:"1"},{default:p(()=>[ze,Ce,r(t)]),_:1})}const Fe=g(Ie,[["render",De]]),Ee={},Ge={class:"flex flex-col gap-5 w-full"},Re=e("div",{class:"text-center text-4xl montserrat-regular text-white"}," Ответы на вопросы ",-1),Ve={class:"card card-side bg-base-100 shadow-xl montserrat-regular"},Be=e("div",{class:"card-body"},[e("h2",{class:"card-title"},"Будет ли дресс-код?"),e("p",null," Мы будем рады, если девушки выберут вечерние или коктейльные платья в пастельных тонах, а мужчины — костюм. ")],-1),Ne=[Be],je={class:"card card-side bg-base-100 shadow-xl montserrat-regular"},qe=e("div",{class:"card-body"},[e("h2",{class:"card-title"},"Какие подарки предпочтительны?"),e("p",null,"Нас обрадуют и сюрпризы, а также поздравления в конвертах.")],-1),Ae=[qe],Le={class:"card card-side bg-base-100 shadow-xl montserrat-regular"},We=e("div",{class:"card-body"},[e("h2",{class:"card-title"},"Возможно ли приехать на своем автомобиле?"),e("p",null," Мы не рекомендуем приезжать на своем автомобиле, так как вокруг дворца парковки платные, а далее мы поедем на корабль и машину придется оставить ")],-1),Pe=[We],Ue={class:"card card-side bg-base-100 shadow-xl montserrat-regular"},Oe=e("div",{class:"card-body"},[e("h2",{class:"card-title"},"Нужно ли дарить цветы?"),e("p",null," Очень просим вас не покупать букеты цветов, так как забрать цветы домой для нас очень проблематично. Вместо цветов мы предпочли бы бутылочку вина или игристого! ")],-1),He=[Oe];function Qe(c,n){const t=M,s=G("motion-slide-visible-top");return i(),T(t,{id:"2","disable-h-screen":""},{default:p(()=>[e("div",Ge,[Re,w((i(),_("div",Ve,Ne)),[[s]]),w((i(),_("div",je,Ae)),[[s]]),w((i(),_("div",Le,Pe)),[[s]]),w((i(),_("div",Ue,He)),[[s]])])]),_:1})}const Ye=g(Ee,[["render",Qe]]),Je={},Ke={class:"timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-white"},Xe=k('<hr><div class="timeline-middle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg></div><div class="timeline-end mb-10"><time class="font-mono italic">21.00</time><div class="text-lg font-black"> Сбор гостей на регистрацию во дворце №2 </div> Санкт-Петербург, Фурштатская ул., 52 </div><hr>',4),Ze=[Xe],et=k('<hr><div class="timeline-middle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg></div><div class="timeline-start md:text-end mb-10"><time class="font-mono italic">22.30</time><div class="text-lg font-black">Погрузка на теплоход &quot;Антверпен&quot;</div> Санкт-Петербург, набережная Фонтанки, 177 </div><hr>',4),tt=[et],st=k('<hr><div class="timeline-middle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg></div><div class="timeline-end mb-10"><time class="font-mono italic">03.30</time><div class="text-lg font-black"> Окончание прогулки на теплоходе &quot;Антверпен&quot; </div> Санкт-Петербург, набережная Фонтанки, 177 </div>',3),nt=[st];function ot(c,n){const t=G("motion-pop-visible");return i(),_("ul",Ke,[w((i(),_("li",null,Ze)),[[t]]),w((i(),_("li",null,tt)),[[t]]),w((i(),_("li",null,nt)),[[t]])])}const at=g(Je,[["render",ot]]),ct={},it=e("div",{class:"text-center text-white text-4xl montserrat-regular mb-4"}," Программа свадебного дня ",-1);function lt(c,n){const t=at,s=M;return i(),T(s,{id:"3","disable-h-screen":""},{default:p(()=>[it,r(t)]),_:1})}const rt=g(ct,[["render",lt]]),dt=Symbol.for("nuxt:client-only"),_t=S({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(c,{slots:n,attrs:t}){const s=x(!1);return W(()=>{s.value=!0}),P(dt,!0),o=>{var m;if(s.value)return(m=n.default)==null?void 0:m.call(n);const a=n.fallback||n.placeholder;if(a)return a();const d=o.fallback||o.placeholder||"",v=o.fallbackTag||o.placeholderTag||"span";return _(v,t,d)}}}),mt=e("div",{class:"text-center montserrat-regular p-2 text-4xl mb-5 text-white"}," Наши фотографии ",-1),ut=["src","alt"],pt=["src","alt"],vt={key:0,class:"grid grid-cols-4 gap-2"},ht=["src","onClick"],ft=S({__name:"Gallery",setup(c){const n=x(!1),t=x(0),s=a=>{t.value=a,n.value=!0},o=x([{itemImageSrc:"/dating-vv/img/IMG_2176.webp",thumbnailImageSrc:"/dating-vv/img/IMG_2176.webp"},{itemImageSrc:"/dating-vv/img/IMG_2376.webp",thumbnailImageSrc:"/dating-vv/img/IMG_2376.webp"},{itemImageSrc:"/dating-vv/img/IMG_6311.webp",thumbnailImageSrc:"/dating-vv/img/IMG_6311.webp"},{itemImageSrc:"/dating-vv/img/IMG_5046.webp",thumbnailImageSrc:"/dating-vv/img/IMG_5046.webp"}]);return(a,d)=>{const v=H,m=M,u=_t;return i(),T(u,null,{default:p(()=>[r(m,{id:"4","disable-h-screen":""},{default:p(()=>[mt,r(v,{activeIndex:y(t),"onUpdate:activeIndex":d[0]||(d[0]=l=>F(t)?t.value=l:null),visible:y(n),"onUpdate:visible":d[1]||(d[1]=l=>F(n)?n.value=l:null),value:y(o),numVisible:7,containerStyle:"max-width: 550px",circular:!0,fullScreen:!0,showItemNavigators:!0,showThumbnails:!1,"show-indicators":!0},{item:p(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%",display:"block"}},null,8,ut)]),thumbnail:p(l=>[e("img",{src:l.item.thumbnailImageSrc,alt:l.item.alt,style:{display:"block"}},null,8,pt)]),_:1},8,["activeIndex","visible","value"]),y(o)?(i(),_("div",vt,[(i(!0),_(R,null,U(y(o),(l,$)=>(i(),_("div",{key:$},[e("img",{src:l.thumbnailImageSrc,class:"cursor-pointer object-cover w-[150px] h-[150px]",onClick:z=>s($)},null,8,ht)]))),128))])):O("",!0)]),_:1})]),_:1})}}}),xt=I("/img/tg-qr.jpg"),gt={},bt=e("div",{class:"text-center text-white text-xl montserrat-regular mb-4"},[h(" Для всех приглашенных был создан чат в телеграмме "),e("br"),h(" Там можно задать оставшиеся вопросы, поделиться фотографиями мероприятия и эмоциями ")],-1),wt=e("div",{class:"mx-auto flex flex-col items-center gap-3"},[e("img",{src:xt,alt:"tg-qr",class:"w-[200px] h-[200px] mx-auto rounded-xl"}),e("a",{class:"link text-white",href:"https://t.me/+8RRmALv6tMphNWEy",target:"_blank"},"Нажми, чтобы присоединиться")],-1);function $t(c,n){const t=M;return i(),T(t,{id:"5","disable-h-screen":""},{default:p(()=>[bt,wt]),_:1})}const yt=g(gt,[["render",$t]]),St={},kt={class:"mx-auto"},Tt={class:"bg-zinc-600 py-28"},Mt={class:"bg-zinc-400 py-28"},It={class:"bg-zinc-600 py-28"},zt={class:"bg-zinc-600 py-28"},Ct={class:"bg-zinc-600 py-28"};function Dt(c,n){const t=ne,s=ye,o=Fe,a=Ye,d=rt,v=ft,m=yt;return i(),_(R,null,[r(t),r(s),e("div",kt,[e("div",Tt,[r(o)]),e("div",Mt,[r(a)]),e("div",It,[r(d)]),e("div",zt,[r(v)]),e("div",Ct,[r(m)])])],64)}const Rt=g(St,[["render",Dt]]);export{Rt as default};
