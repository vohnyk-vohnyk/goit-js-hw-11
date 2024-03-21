import{i as l,S as h}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(s){const r="https://pixabay.com/api/",o="42992941-35a2e0d06d00b6838f62e2830",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const c=document.querySelector(".gallery"),m=document.querySelector(".search-form"),n=document.querySelector(".loader");m.addEventListener("submit",g);function g(s){s.preventDefault(),c.innerHTML="",n.classList.remove("is-hidden");const r=s.currentTarget.elements.search.value.trim();if(r===""){l.error({title:"Error",message:"Please enter a search query.",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"}),n.classList.add("is-hidden");return}n.classList.remove("is-hidden"),u(r).then(o=>{if(o.hits.length===0)throw new Error("No images found");y(o.hits),s.target.reset()}).catch(o=>{l.error({title:"Error",message:`${o.message||"Something went wrong"}`,backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",progressBarColor:"#B51B1B",position:"topRight"})}).finally(()=>{n.classList.add("is-hidden")})}const p=new h(".gallery-item a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function y(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:d,downloads:f})=>`<li class ='gallery-item'>
        <a class="gallery-link" href="${i}">
            <img class="gallery-image"
                src="${o}"
                alt="${e}"
                width="360"
                height="152"/>
        </a>
        <div class='info-block'>
            <div class="info">
                <h3 class = "head-likes">Likes</h3>
                <p>${t}</p>
            </div>
            <div class="info">
                <h3 class = "head-views">Views</h3>
                <p>${a}</p>
            </div>
            <div class="info">
                <h3 class = "head-comments">Comments</h3>
                <p>${d}</p>
            </div>
            <div class="info">
                <h3 class = "head-downloads">Downloads</h3>
                <p>${f}</p>
            </div>
        </div>
    </li>`).join("");c.innerHTML=r,p.refresh()}
//# sourceMappingURL=commonHelpers.js.map
