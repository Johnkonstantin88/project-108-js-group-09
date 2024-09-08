import{A as f,S as l,N as c,M as d,K as u,a as g,i as v}from"./assets/vendor-BGliRXZ8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const b=document.querySelector(".header-menu-js"),y=document.querySelector(".header-list"),S=document.querySelector(".header-burger-button"),k=document.querySelector(".mobile-menu-close"),p=document.querySelector(".mobile-bg"),L=document.querySelector(".mobile-anchor"),I=document.querySelectorAll(".mobile-list-item"),x=()=>{y.classList.toggle("open-js")};b.addEventListener("click",x);if(innerWidth<768){S.addEventListener("click",()=>{p.classList.add("is-open")});const e=()=>{p.classList.remove("is-open")};k.addEventListener("click",e),I.forEach(t=>{t.addEventListener("click",e)}),L.addEventListener("click",e)}const j="/project-108-js-group-09/assets/sprite-DsvayuqK.svg",A=768,E=document.querySelector(".information-container"),q=[{title:"About me",description:["I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.","Able to work both independently and in a team.I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions.Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self - imp r ovement.I atively study new technologies and practices to stay abreast of the latest innovations.I hve a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."]},{title:"Role",description:["Frontend development","HeadlessCMS,Wordpress","Blender(enjoy)"]},{title:"Education",description:["2018 - 2019  / Frontend Development Diploma, GoIT IT </br> School, New York","2019 - 2020 / Advanced Web Development Certificate, GoIT IT </br> School, New York","2020 - 2022 / Advanced Blender Animation Techniques, Udemy"]}],T=e=>e.map(t=>`<li class="information-description-item">${t}</li>`).join(""),C=e=>{const t=e.map(o=>`<li class="information-item ac">
                <h2 class="ac-header">
                    <button type="button" class="information-item-button ac-trigger"><span>${o.title.toUpperCase()}<span></button>
                </h2>
                <div class="ac-panel">
                    <ul class="description-list ac-text">${T(o.description)}</ul>
                </div>
            </li>`).join("");E.insertAdjacentHTML("beforeend",t)},M=()=>{document.querySelectorAll(".ac-trigger").forEach(t=>{const o=` <svg class="description-open-icon">
          <use href="${j}#icon-open"></use>
        </svg>`;t.insertAdjacentHTML("beforeend",o)})},P=e=>{const t=e.getBoundingClientRect(),o=t.top,r=window.innerHeight;window.scrollTo({top:o+window.scrollY-r/2+t.height/2,behavior:"smooth"})},a=(e,t)=>{window.innerWidth<A&&(e.style.paddingBottom=t)},B=()=>{console.log("Accordion initialized");const e=document.querySelector(".information-item");a(e,"20px")};C(q);new f(".accordion-container",{duration:500,showMultiple:!0,openOnInit:[0],triggerClass:"information-item-button",onOpen:e=>{a(e,"20px"),P(e)},onClose:e=>{a(e,"32px")}});B();M();const D=["HTML/CSS","JavaScript","React","Node.js","React Native","Soft skills","Redux"],O=()=>{const e=document.querySelector(".hard-skills-list"),t=D.map(o=>`<li class="hard-skills-item swiper-slide">
                    <p class="hard-skills-text">${o}</p>
                </li>`).join("");e.innerHTML=t};O();const m=new l(".hard-skills-swiper",{modules:[c,d,u],direction:"horizontal",loop:!0,speed:1e3,allowSlideNext:!0,mousewheel:{enabled:!0,invert:!0},navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,on:{transitionStart:()=>{document.querySelectorAll(".hard-skills-item").forEach(t=>{t.style.transition="background-color 100ms cubic-bezier(0.4, 0, 0.2, 1)",t.style.backgroundColor="var(--black)",t.style.border="1px solid rgba(250, 250, 250, 0.2)",t.style.borderRadius="50%"});const e=m.slides[m.activeIndex];e.style.transition="background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)",e.style.backgroundColor="var(--red)",e.style.borderColor="transparent"}},breakpoints:{320:{slidesPerView:1,spaceBetween:0},375:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});new l(".swiper-projects",{modules:[c,u,d],speed:1e3,navigation:{nextEl:".swiper-projects-button-next",prevEl:".swiper-projects-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{enabled:!0,eventsTarget:".swiper-projects"}});const h=document.querySelectorAll("li"),V=new IntersectionObserver(N,{root:null,rootMargin:"-25% 0px -25% 0px",threshold:0}),H=document.querySelector(".covers-section");V.observe(H);function N(e){e.forEach(t=>{t.isIntersecting?h.forEach(o=>{o.style.animationDuration="20s"}):h.forEach(o=>{o.style.animationDuration="0s"})})}const R=e=>{const{avatar_url:t,author:o,review:r}=e;return`
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
  `};g.defaults.baseURL="https://portfolio-js.b.goit.study";const $=async()=>(await g.get("api/reviews")).data;new l(".swiper-container",{modules:[c,u,d],speed:1e3,navigation:{nextEl:".review-swiper-button-next",prevEl:".review-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0,eventsTarget:".swiper-container"},breakpoints:{1440:{spaceBetween:16,slidesPerView:4},768:{slidesPerView:2,spaceBetween:16},320:{slidesPerView:1}}});const w=document.querySelector(".reviews-list"),z=async()=>{try{const t=(await $()).map(o=>R(o)).join("");w.insertAdjacentHTML("beforeend",t)}catch{v.show({message:"❌ Oh no, something went wrong",color:"red",position:"topRight"}),w.innerHTML=`<li class="error-case"> <picture>
      <source
      class="not-found-pic"
      srcset="/img/reviews/not-found.jpg"
        media="(min-width:1440px)"
        alt="not-found-photo"
        width="640"
        height="352"
      />
      <source
        class="not-found-pic"
        srcset="/img/reviews/not-found.jpg"
        media="(min-width:768px)"
        alt="not-found-photo"
        width="422"
        height="232"
      />
      <img
        class="not-found-pic"
        src="/img/reviews/not-found-mob.jpg"
        alt="not-found-photo" width="270" height="207"
      />
    </picture></li>`}};z();
//# sourceMappingURL=index.js.map
