export const createCardTemplate = cardInfo => {
  return `
 <li class="reviews-list-item swiper-slide">
          <img
            src="${cardInfo.avatar_url}"
            alt="user-photo"
            class="reviews-list-item-icon"
            width="48"
            height="48"
          />
          <h3 class="reviews-list-item-title">${cardInfo.author}</h3>
          <p class="reviews-list-item-text">
            ${cardInfo.review}
          </p>
        </li>
  `;
};
