import{A as w,t as S,u as k,S as q,s as _,I as A,i as v,a as x,_ as I,b as M}from"./vendor-1c60cd6a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const P=document.querySelector(".accordion-container");P&&new w(".accordion-container",{duration:400,showMultiple:!0,showMultiple:!1,openOnInit:[0]});const T=document.querySelectorAll(".services__item");T.forEach(t=>{t.addEventListener("click",function(){const r=this.dataset.src,n=document.querySelector(".services__img-wrapp img");r&&n&&(n.src=r)})});const N=()=>{const t=document.querySelector(".nabigation"),r=document.querySelector(".footer__content");t.addEventListener("click",n),r.addEventListener("click",n);function n(i){const o=i.target,l=i.currentTarget;if(o.classList.contains("menu-item-has-children")){const g=l.querySelectorAll(".menu-item-has-children.opened"),E=o.querySelector(".sub-menu");S(E),o.classList.toggle("opened"),g.forEach(m=>{if(m!==o){const e=m.querySelector(".sub-menu");k(e),m.classList.remove("opened")}})}}},O=()=>{const t=document.querySelector(".hamburger"),r=document.querySelector(".nabigation"),n=document.querySelector("body");t.addEventListener("click",i=>{i.preventDefault(),S(r),t.classList.toggle("opened"),n.classList.toggle("overHideMob")})},C=()=>{const t=document.querySelector(".splide-hero");if(t){const r={type:"fade",arrows:!1,autoplay:!0,interval:3e3,rewind:!0,speed:2e3,pagination:!1,width:"33.125rem",height:"37.8125rem",breakpoints:{960:{width:"100%",height:"22.5rem"},500:{width:"100%",height:"12.5rem"}}};new q(t,r).mount()}};C();const F=()=>{const t=document.querySelector(".splide-reviews");if(t){const r={type:"loop",speed:1e3,pagination:!1,updateOnMove:!0,width:"48.5625rem",gap:"3.75rem",breakpoints:{960:{width:"28rem",gap:"2rem"},500:{width:"18.9375rem",gap:"1rem"}}},n=new q(t,r).mount();n.on("moved",()=>{D(n)})}B()};F();function B(){const t=document.querySelectorAll(".reviews-arrow"),r=document.querySelector(".reviews__box");t==null||t.forEach(n=>{n.addEventListener("click",i=>{i.currentTarget.classList.contains("reviews-next")?r.querySelector(".splide__arrow--next").click():r.querySelector(".splide__arrow--prev").click()})})}function D(t){const r=t.index+1,n=t.length;document.querySelectorAll(".index-page").forEach(o=>{o.textContent=`${r}/${n}`})}const H=()=>{const t=document.querySelectorAll(".ankor");t==null||t.forEach(r=>{r.addEventListener("click",n=>{n.preventDefault();const i=n.currentTarget.dataset.target,o=document.getElementById(i);_(o,{duration:1e3})})})};document.querySelector(".open-popup");const $=document.querySelector(".pop-up__close"),y=document.querySelector(".pop-up"),L=document.querySelector("body"),j=()=>{y.classList.add("is-active"),L.classList.add("modal-open")};$.addEventListener("click",()=>{y.classList.remove("is-active"),L.classList.remove("modal-open")});y.addEventListener("click",t=>{t.target.closest(".pop-up__body")||(y.classList.remove("is-active"),L.classList.remove("modal-open"))});const R=async()=>{const t=document.querySelectorAll('input[type="tel"]'),r={mask:"+38 (\\000) 000 00 00"};t==null||t.forEach(e=>{A(e,r)});async function n(e){const a="/mail.php",s=new FormData(e);try{(await M.post(a,s)).data!=="error"?i(e,!0):i(e,!1)}catch{i(e,!1)}}function i(e,a){a&&(j(),e.reset()),setTimeout(()=>{e.reset(),e.querySelectorAll(".fileuploadCont ").forEach(c=>c.classList.remove("changed"))},300)}document.querySelectorAll(".submitForm").forEach(e=>{e.addEventListener("submit",l)});function l(e){e.preventDefault(),g();const a=e.target.elements;let s=0;Array.from(a).forEach(c=>{if(c.dataset.required){const f=c.type,d=c.value;p(c,f,d)&&(s+=1)}c.addEventListener("focus",g),c.addEventListener("change",g)}),s||n(e.target)}function p(e,a,s){let c=!1;if(a==="text"&&v(s)&&(c=!0,e.classList.add("error")),a==="email"&&(v(s)||!x(s))&&(c=!0,e.classList.add("error")),a==="tel"&&(v(s)||!I(s.replace(/[^\d+]/g,""),["uk-UA"]))&&(c=!0,e.classList.add("error")),a==="checkbox"&&e.checked===!1&&(c=!0,e.classList.add("error")),a==="file"){const u=e.files[0],f=12582912,d=["pdf","docx","doc"];let h=!1;if(u){const b=u.name.split(".")[u.name.split(".").length-1].toLowerCase();d.includes(b)&&u.size<f&&(h=!0)}(!u||!h)&&(u?error.innerHTML=er2:error.innerHTML=er1,c=!0)}return c}function g(){document.querySelectorAll(".error").forEach(a=>{a.classList.remove("error")})}document.querySelectorAll(".closePopup").forEach(e=>{e.addEventListener("click",()=>{document.querySelector(".popup.opened").classList.remove("opened")})});const m=document.querySelectorAll('input[type="file"]');m&&m.forEach(e=>{const a=e.getAttribute("placeholder"),s=document.createElement("div"),c=`<button class="uploadBtn">${a}</button><button class="removeBtn"></button>`;s.classList.add("fileuploadCont","form__input"),s.innerHTML=c,e.insertAdjacentElement("afterend",s);const u=s.querySelector(".uploadBtn"),f=s.querySelector(".removeBtn");u.addEventListener("click",d=>{d.preventDefault(),e.click()}),f.addEventListener("click",d=>{d.preventDefault(),e.value="",s.classList.remove("changed")}),e.addEventListener("change",d=>{const h=e.files[0].name;h?(s.classList.add("changed"),f.innerHTML=h):s.classList.remove("changed")})})};N();O();H();R();
//# sourceMappingURL=main-aa50d626.js.map
