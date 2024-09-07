export const createCardTemplate = cardInfo => {
  const { avatar_url, author, review } = cardInfo;
  return `
 <li class="reviews-list-item swiper-slide">
          <img
            src="${avatar_url}"
            alt="user-photo"
            class="reviews-list-item-icon"
            width="48"
            height="48"
          />
          <h3 class="reviews-list-item-title">${author}</h3>
          <p class="reviews-list-item-text">
            ${review}
          </p>
        </li>
  `;
};
