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
    iziToast.show({
      message: `❌ Oh no, something went wrong`,
      color: 'red',
      position: 'topRight',
    });
    reviewsList.innerHTML = `<li class="error-case"> <picture>
      <source
      class="not-found-pic"
      srcset="../img/reviews/not-found.jpg"
        media="(min-width:1440px)"
        width="640"
        height="352"
      />
      <source
        class="not-found-pic"
        srcset="/img/reviews/not-found.jpg"
        media="(min-width:768px)"
        width="422"
        height="232"
      />
      <img
        class="not-found-pic"
        src="/img/reviews/not-found-mob.jpg"
        alt="vishivanka" width="270" height="207"
      />
    </picture></li>`;
  }
};
getCardInfo();
