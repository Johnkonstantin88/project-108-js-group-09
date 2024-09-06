import { createCardTemplate } from './reviews-markup';
import { data } from './reviews-api';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const reviewsList = document.querySelector('.reviews-list');

const getCardInfo = async () => {
  try {
    const cardsData = await data();
    const cardsTemplate = cardsData.data
      .map(cardInfo => createCardTemplate(cardInfo))
      .join('');
    reviewsList.innerHTML = cardsTemplate;
  } catch (err) {
    iziToast.show({
      message: `❌ Oh no, something went wrong`,
      color: 'red',
      position: 'topRight',
    });
    reviewsList.innerHTML = `<li class="error-case">Not Found</li>`;
  }
};
getCardInfo();

let swiper = new Swiper('.swiper-container', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  mousewheel: {
    enabled: true,
    eventsTarget: '.swiper-container',
  },

  breakpoints: {
    1440: {
      spaceBetween: 16,
      slidesPerView: 4,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
