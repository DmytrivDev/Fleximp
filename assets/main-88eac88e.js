import{A as p,t as a,u as f,S as l,s as g}from"./vendor-8766e12a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const h=document.querySelector(".accordion-container");h&&new p(".accordion-container",{duration:400,showMultiple:!0,showMultiple:!1,openOnInit:[0]});const y=()=>{const t=document.querySelector(".nabigation"),o=document.querySelector(".footer__content");t.addEventListener("click",r),o.addEventListener("click",r);function r(c){const e=c.target,n=c.currentTarget;if(e.classList.contains("menu-item-has-children")){const u=n.querySelectorAll(".menu-item-has-children.opened"),d=e.querySelector(".sub-menu");a(d),e.classList.toggle("opened"),u.forEach(i=>{if(i!==e){const m=i.querySelector(".sub-menu");f(m),i.classList.remove("opened")}})}}},S=()=>{const t=document.querySelector(".hamburger"),o=document.querySelector(".nabigation"),r=document.querySelector("body");t.addEventListener("click",()=>{a(o),t.classList.toggle("opened"),r.classList.toggle("overHideMob")})},v=()=>{const t=document.querySelector(".splide-hero");if(t){const o={type:"fade",arrows:!1,autoplay:!0,interval:3e3,rewind:!0,speed:2e3,pagination:!1,width:"33.125rem",height:"37.8125rem",breakpoints:{960:{width:"100%",height:"22.5rem"},500:{width:"100%",height:"12.5rem"}}};new l(t,o).mount()}};v();const w=()=>{const t=document.querySelector(".splide-reviews");if(t){const o={type:"loop",speed:1e3,pagination:!1,updateOnMove:!0,width:"48.5625rem",gap:"3.75rem",breakpoints:{960:{width:"28rem",gap:"2rem"},500:{width:"18.9375rem",gap:"1rem"}}},r=new l(t,o).mount();r.on("moved",()=>{q(r)})}b()};w();function b(){const t=document.querySelectorAll(".reviews-arrow"),o=document.querySelector(".reviews__box");t==null||t.forEach(r=>{r.addEventListener("click",c=>{c.currentTarget.classList.contains("reviews-next")?o.querySelector(".splide__arrow--next").click():o.querySelector(".splide__arrow--prev").click()})})}function q(t){const o=t.index+1,r=t.length;document.querySelectorAll(".index-page").forEach(e=>{e.textContent=`${o}/${r}`})}const L=()=>{const t=document.querySelectorAll(".ankor");t==null||t.forEach(o=>{o.addEventListener("click",r=>{r.preventDefault();const c=r.currentTarget.dataset.target,e=document.getElementById(c);g(e,{duration:1e3})})})};y();S();L();
//# sourceMappingURL=main-88eac88e.js.map
