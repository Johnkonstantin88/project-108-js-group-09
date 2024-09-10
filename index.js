import{A as b,S as u,N as p,M as m,K as w,a as i,i as y}from"./assets/vendor-D-8sXfAR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const I=document.querySelector(".header-menu-js"),E=document.querySelector(".header-list"),q=document.querySelector(".header-burger-button"),x=document.querySelector(".mobile-menu-close"),k=document.querySelector(".mobile-bg"),A=document.querySelector(".mobile-anchor"),C=document.querySelectorAll(".mobile-list-item"),B=()=>{E.classList.toggle("open-js")};I.addEventListener("click",B);q.addEventListener("click",()=>{k.classList.add("is-open")});const h=()=>{k.classList.remove("is-open")};x.addEventListener("click",h);C.forEach(e=>{e.addEventListener("click",h)});A.addEventListener("click",h);const L="/project-108-js-group-09/assets/sprite-DsvayuqK.svg",T=768,j=document.querySelector(".information-container"),P=[{title:"About me",description:["I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.","Able to work both independently and in a team.I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions.Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self - imp r ovement.I atively study new technologies and practices to stay abreast of the latest innovations.I hve a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."]},{title:"Role",description:["Frontend development","HeadlessCMS,Wordpress","Blender(enjoy)"]},{title:"Education",description:["2018 - 2019  / Frontend Development Diploma, GoIT IT </br> School, New York","2019 - 2020 / Advanced Web Development Certificate, GoIT IT </br> School, New York","2020 - 2022 / Advanced Blender Animation Techniques, Udemy"]}],M=e=>e.map(t=>`<li class="information-description-item">${t}</li>`).join(""),D=e=>{const t=e.map(o=>`<li class="information-item ac">
                <h3 class="ac-header">
                    <button type="button" class="information-item-button ac-trigger"><span>${o.title.toUpperCase()}<span></button>
                </h3>
                <div class="ac-panel">
                    <ul class="description-list ac-text">${M(o.description)}</ul>
                </div>
            </li>`).join("");j.insertAdjacentHTML("beforeend",t)},R=()=>{document.querySelectorAll(".information-item-button").forEach(t=>{const o=` <svg class="description-open-icon">
          <use href="${L}#icon-open"></use>
        </svg>`;t.insertAdjacentHTML("beforeend",o)})},V=e=>{const t=e.getBoundingClientRect(),o=t.top,r=window.innerHeight;window.scrollTo({top:o+window.scrollY-r/2+t.height/2,behavior:"smooth"})},c=(e,t)=>{window.innerWidth<T&&(e.style.paddingBottom=t)},O=()=>{const e=document.querySelector(".information-item");c(e,"20px")};D(P);new b(".accordion-container",{duration:500,showMultiple:!0,openOnInit:[0],triggerClass:"information-item-button",beforeOpen:e=>{c(e,"20px"),V(e)},beforeClose:e=>{c(e,"32px")}});O();R();const $=["HTML/CSS","JavaScript","React","Node.js","React Native","Soft skills","Redux"],H=()=>{const e=document.querySelector(".hard-skills-list"),t=$.map(o=>`<li class="hard-skills-item swiper-slide">
                    <p class="hard-skills-text">${o}</p>
                </li>`).join("");e.innerHTML=t};H();const f=new u(".hard-skills-swiper",{modules:[p,m,w],direction:"horizontal",loop:!0,speed:1e3,allowSlideNext:!0,mousewheel:{enabled:!0,invert:!0},navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,on:{transitionStart:()=>{document.querySelectorAll(".hard-skills-item").forEach(t=>{t.style.transition="background-color 100ms cubic-bezier(0.4, 0, 0.2, 1)",t.style.backgroundColor="var(--black)",t.style.border="1px solid rgba(250, 250, 250, 0.2)",t.style.borderRadius="50%"});const e=f.slides[f.activeIndex];e.style.transition="background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)",e.style.backgroundColor="var(--red)",e.style.borderColor="transparent"}},breakpoints:{320:{slidesPerView:1,spaceBetween:0},375:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});new u(".swiper-projects",{modules:[p,w,m],speed:1e3,navigation:{nextEl:".swiper-projects-button-next",prevEl:".swiper-projects-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,eventsTarget:".swiper-projects"},breakpoints:{320:{slidesPerView:1,spaceBetween:15},768:{slidesPerView:1,spaceBetween:30},1440:{slidesPerView:1,spaceBetween:36}}});new b(".faq-list",{duration:250,showMultiple:!1,triggerClass:"faq-item-button"});const g=document.querySelectorAll("li"),N=new IntersectionObserver(z,{root:null,rootMargin:"-25% 0px -25% 0px",threshold:0}),U=document.querySelector(".covers-section");N.observe(U);function z(e){e.forEach(t=>{t.isIntersecting?g.forEach(o=>{o.style.animationDuration="20s"}):g.forEach(o=>{o.style.animationDuration="0s"})})}const K=e=>{const{avatar_url:t,author:o,review:r}=e;return`
 <li class="reviews-list-item swiper-slide">
          <img
            src="${t}"
            alt="user-photo"
            onerror="this.src='/img/reviews/profile-photo.png'"
            class="reviews-list-item-icon"
            width="48"
            height="48"
          />
          <h3 class="reviews-list-item-title">${o}</h3>
          <p class="reviews-list-item-text">
            ${r}
          </p>
        </li>
  `};i.defaults.baseURL="https://portfolio-js.b.goit.study";const Y=async()=>(await i.get("api/reviews")).data;let F=new u(".swiper-container",{modules:[p,w,m],speed:1e3,navigation:{nextEl:".review-swiper-button-next",prevEl:".review-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0,eventsTarget:".swiper-container"},breakpoints:{1440:{spaceBetween:16,slidesPerView:4},768:{slidesPerView:2,spaceBetween:16},320:{slidesPerView:1}}});const v=document.querySelector(".reviews-list"),W=async()=>{try{const t=(await Y()).map(o=>K(o)).join("");v.insertAdjacentHTML("beforeend",t)}catch{F.disable(),y.show({message:"❌ Oh no, something went wrong",color:"red",position:"topRight"}),v.innerHTML=`<li class="error-case">Unfortunately we can't find any reviews try again later</li>`}};W();function G(e,t){return`<div class="modal">
        <button class="modal-close-btn" data-modal-close={true}>
            <svg class="modal-close-icon">
                <use href="${L}#close"></use>
            </svg>
        </button>
        <h2 class="modal-title">${e}</h2>
        <p class="modal-text">${t}</p>
    </div>`}i.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function J(e){return(await i.post("/requests",e)).data}const d={handler:null,onBind(e){this.handler=_.bind(e),document.addEventListener("keydown",this.handler)},onRemoveListener(){document.removeEventListener("keydown",this.handler),document.removeEventListener("click",this.handler)},onBackdropCLick(){document.addEventListener("click",this.handler)}};function _(e){(e.code==="Escape"||e.target===this||e.target.closest("button[data-modal-close]"))&&(this.classList.remove("is-open"),d.onRemoveListener())}const S=document.querySelector(".work-form"),l=document.querySelector(".backdrop");S.addEventListener("submit",Q);async function Q(e){e.preventDefault();const{email:t,comments:o}=e.currentTarget.elements,r={email:t.value,comment:o.value};try{const{title:n,message:s}=await J(r);l.classList.add("is-open"),l.innerHTML=G(n,s),d.onBind(l),d.onBackdropCLick(),S.reset()}catch{y.error({message:"❌ Oh no, something went wrong",position:"topRight"})}}
//# sourceMappingURL=index.js.map