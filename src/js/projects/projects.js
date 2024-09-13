import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper-projects', {
    modules: [Navigation, Keyboard, Mousewheel],
    speed: 1000,
        
    navigation: {
        nextEl: '.swiper-projects-button-next',
        prevEl: '.swiper-projects-button-prev',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
    enabled: true,
    eventsTarget: '.swiper-projects',
    },

    breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    1440: {
      slidesPerView: 1,
      spaceBetween: 36,
    },
  },
 });