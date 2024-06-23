import{a as w,S,i as h}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const v=w.create({baseURL:"https://pixabay.com"});async function y(e,t){const i={q:e,key:"44418953-cdbfe82a1d191a3eebe28ee3b",image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:100},n=await v.get("/api/",{params:i});return console.log(n.data),n.data}let f;function L(e){const t=document.querySelector(".gallery"),i=e.map(q).join("");t.insertAdjacentHTML("beforeEnd",i),f&&f.refresh(),f=new S(".gallery a",{captionsData:"alt",captionType:"attr",captionPosition:"bottom",captionDelay:250})}const q=e=>`<li class="gallery-item">
      <a class="gallery-link" href=${e.largeImageURL}>
        <img class="gallery-image" src=${e.webformatURL} alt=${e.tags} />
      </a>
      <ul class="desc-list">
        <li class="desc-item">
          <span class="desc-text">Likes</span>
          <span class="number">${e.likes}</span>
        </li>
        <li class="desc-item">
          <span class="desc-text">Views</span>
          <span class="number">${e.views}</span>
        </li>
        <li class="desc-item">
          <span class="desc-text">Comments</span>
          <span class="number">${e.comments}</span>
        </li>
        <li class="desc-item">
          <span class="desc-text">Downloads</span>
          <span class="number">${e.downloads}</span>
        </li>
      </ul>
    </li>`,E="/goit-js-hw-12/assets/alert-icon-40fa32d5.svg",a={formEl:document.querySelector(".form"),inputEl:document.querySelector(".form-input"),imagesList:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),loadBtnEl:document.querySelector(".load-btn")};let l="",r=1,u=1;const B=10;a.formEl.addEventListener("submit",async e=>{if(e.preventDefault(),p(),a.imagesList.innerHTML="",l=e.target.elements.photo.value.trim(),l==="")return a.inputEl.value="",g();r=1,b();try{const t=await y(l,r);if(u=Math.ceil(t.totalHits/B),u===0){a.inputEl.value="",d(),g(),c();return}else return a.inputEl.value="",d(),c(),L(t.hits)}catch(t){showError(t)}d(),c()});a.loadBtnEl.addEventListener("click",async e=>{r++,b(),p();try{const t=await y(l,r);L(t.hits),P()}catch{console.log("error")}d(),c()});function g(){return h.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16",messageLineHeight:"0.03em",titleColor:"#fff",titleSize:"16",titleLineHeight:"0.03em",position:"topRight",backgroundColor:"#ef4040",theme:"dark",iconUrl:E,iconColor:"#FAFAFB"})}function C(){return h.show({title:"The End!",message:"End of collection!",messageColor:"#fff",messageSize:"16",messageLineHeight:"0.03em",titleColor:"#fff",titleSize:"16",titleLineHeight:"0.03em",position:"topRight",backgroundColor:"#ef4040",theme:"dark",iconUrl:E,iconColor:"#4e75ff"})}function c(){r>=u?(p(),u&&C()):x()}function x(){a.loadBtnEl.classList.remove("hidden")}function p(){a.loadBtnEl.classList.add("hidden")}function b(){a.loaderEl.classList.remove("hidden")}function d(){a.loaderEl.classList.add("hidden")}function P(){const t=a.imagesList.children[0].getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
