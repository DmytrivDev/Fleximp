import{A as L,t as g,u as q,S as h,s as E,I as b,i as p,a as w,_,b as k}from"./vendor-1c60cd6a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const A=document.querySelector(".accordion-container");A&&new L(".accordion-container",{duration:400,showMultiple:!0,showMultiple:!1,openOnInit:[0]});const x=document.querySelectorAll(".services__item");x.forEach(e=>{e.addEventListener("click",function(){const r=this.dataset.src,s=document.querySelector(".services__img-wrapp img");r&&s&&(s.src=r)})});const P=()=>{const e=document.querySelector(".nabigation"),r=document.querySelector(".footer__content");e.addEventListener("click",s),r.addEventListener("click",s);function s(i){const o=i.target,n=i.currentTarget;if(o.classList.contains("menu-item-has-children")){const d=n.querySelectorAll(".menu-item-has-children.opened"),y=o.querySelector(".sub-menu");g(y),o.classList.toggle("opened"),d.forEach(t=>{if(t!==o){const c=t.querySelector(".sub-menu");q(c),t.classList.remove("opened")}})}}},I=()=>{const e=document.querySelector(".hamburger"),r=document.querySelector(".nabigation"),s=document.querySelector("body");e.addEventListener("click",()=>{g(r),e.classList.toggle("opened"),s.classList.toggle("overHideMob")})},O=()=>{const e=document.querySelector(".splide-hero");if(e){const r={type:"fade",arrows:!1,autoplay:!0,interval:3e3,rewind:!0,speed:2e3,pagination:!1,width:"33.125rem",height:"37.8125rem",breakpoints:{960:{width:"100%",height:"22.5rem"},500:{width:"100%",height:"12.5rem"}}};new h(e,r).mount()}};O();const N=()=>{const e=document.querySelector(".splide-reviews");if(e){const r={type:"loop",speed:1e3,pagination:!1,updateOnMove:!0,width:"48.5625rem",gap:"3.75rem",breakpoints:{960:{width:"28rem",gap:"2rem"},500:{width:"18.9375rem",gap:"1rem"}}},s=new h(e,r).mount();s.on("moved",()=>{M(s)})}F()};N();function F(){const e=document.querySelectorAll(".reviews-arrow"),r=document.querySelector(".reviews__box");e==null||e.forEach(s=>{s.addEventListener("click",i=>{i.currentTarget.classList.contains("reviews-next")?r.querySelector(".splide__arrow--next").click():r.querySelector(".splide__arrow--prev").click()})})}function M(e){const r=e.index+1,s=e.length;document.querySelectorAll(".index-page").forEach(o=>{o.textContent=`${r}/${s}`})}const C=()=>{const e=document.querySelectorAll(".ankor");e==null||e.forEach(r=>{r.addEventListener("click",s=>{s.preventDefault();const i=s.currentTarget.dataset.target,o=document.getElementById(i);E(o,{duration:1e3})})})};document.querySelector(".open-popup");const T=document.querySelector(".pop-up__close"),m=document.querySelector(".pop-up"),f=document.querySelector("body"),D=()=>{m.classList.add("is-active"),f.classList.add("modal-open")};T.addEventListener("click",()=>{m.classList.remove("is-active"),f.classList.remove("modal-open")});m.addEventListener("click",e=>{e.target.closest(".pop-up__body")||(m.classList.remove("is-active"),f.classList.remove("modal-open"))});const R=async()=>{const e=document.querySelectorAll('input[type="tel"]'),r={mask:"+38 (\\000) 000 00 00"};e==null||e.forEach(t=>{b(t,r)});async function s(t){const c="/mail.php",l=new FormData(t);try{(await k.post(c,l)).data!=="error"?i(t,!0):i(t,!1)}catch{i(t,!1)}}function i(t,c){c&&(D(),t.reset())}document.querySelectorAll(".submitForm").forEach(t=>{t.addEventListener("submit",n)});function n(t){t.preventDefault(),d();const c=t.target.elements;let l=0;Array.from(c).forEach(a=>{if(a.dataset.required){const v=a.type,S=a.value;u(a,v,S)&&(l+=1)}a.addEventListener("focus",d),a.addEventListener("change",d)}),l||s(t.target)}function u(t,c,l){let a=!1;return c==="text"&&p(l)&&(a=!0,t.classList.add("error")),c==="email"&&(p(l)||!w(l))&&(a=!0,t.classList.add("error")),c==="tel"&&(p(l)||!_(l.replace(/[^\d+]/g,""),["uk-UA"]))&&(a=!0,t.classList.add("error")),c==="checkbox"&&t.checked===!1&&(a=!0,t.classList.add("error")),a}function d(){document.querySelectorAll(".error").forEach(c=>{c.classList.remove("error")})}document.querySelectorAll(".closePopup").forEach(t=>{t.addEventListener("click",()=>{document.querySelector(".popup.opened").classList.remove("opened")})})};P();I();C();R();
//# sourceMappingURL=main-6278c038.js.map
