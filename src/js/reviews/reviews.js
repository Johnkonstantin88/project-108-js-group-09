import { createCardTemplate } from './reviews-markup';
import { getReviews } from './reviews-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { swiper } from './swiper';
const reviewsList = document.querySelector('.reviews-list');

const getCardInfo = async () => {
  try {
    const cardsData = await getReviews();
    const cardsTemplate = cardsData
      .map(cardInfo => createCardTemplate(cardInfo))
      .join('');
    reviewsList.insertAdjacentHTML('beforeend', cardsTemplate);
  } catch (err) {
    swiper.disable();
    iziToast.show({
      message: `❌ Oh no, something went wrong`,
      color: 'red',
      position: 'topRight',
    });
    reviewsList.innerHTML = `<li class="error-case">Unfortunately we can't find any reviews try again later</li>`;
  }
};
getCardInfo();
