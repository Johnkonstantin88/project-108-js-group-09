import svgPath from '../../img/sprite.svg';

export function markup(title, message) {
  return `<div class="modal">
        <button class="modal-close-btn" data-modal-close={true}>
            <svg class="modal-close-icon">
                <use href="${svgPath}#close"></use>
            </svg>
        </button>
        <h2 class="modal-title">${title}</h2>
        <p class="modal-text">${message}</p>
    </div>`;
}
