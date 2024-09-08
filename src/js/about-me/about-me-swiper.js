import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const hardSkillsArray = ["HTML/CSS", "JavaScript", "React", "Node.js", "React Native", "Soft skills", "Redux"];

const renderContentHardSkills = () => {
    const hardSkillsListEl = document.querySelector(".hard-skills-list");
    const markup = hardSkillsArray.map((element) => `<li class="hard-skills-item swiper-slide">
                    <p class="hard-skills-text">${element}</p>
                </li>`).join("");
    hardSkillsListEl.innerHTML = markup;
};
renderContentHardSkills();

const swiper = new Swiper('.hard-skills-swiper', {
    modules: [Navigation, Mousewheel, Keyboard],
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    allowSlideNext: true,
    mousewheel: {
        enabled: true,
        invert: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
    slidesPerView: 1,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    watchSlidesProgress: true,
    on: {
        transitionStart: () => {
            document.querySelectorAll('.hard-skills-item').forEach(slide => {
                slide.style.transition = 'background-color 100ms cubic-bezier(0.4, 0, 0.2, 1)';
                slide.style.backgroundColor = 'var(--black)';
                slide.style.border = '1px solid rgba(250, 250, 250, 0.2)';
                slide.style.borderRadius = '50%';
            });

            const firstSlide = swiper.slides[swiper.activeIndex];
            firstSlide.style.transition = 'background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)';
            firstSlide.style.backgroundColor = 'var(--red)';
            firstSlide.style.borderColor = 'transparent';

        },
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        375: {
            slidesPerView: 2,
            spaceBetween: 0,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },

        1440: {
            slidesPerView: 6,
            spaceBetween: 0,
        },
    },
});
