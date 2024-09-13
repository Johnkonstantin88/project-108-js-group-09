import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export const modalCloseOptions = {
  onBind(instance) {
    this.handleCallback = onClose.bind(instance);
    document.addEventListener('keydown', this.handleCallback);
  },

  onBackdropCLick() {
    document.addEventListener('click', this.handleCallback);
  },

  onRemoveListener() {
    document.removeEventListener('keydown', this.handleCallback);
    document.removeEventListener('click', this.handleCallback);
  },
};

function onClose(e) {
  const isCloseAction =
    e.code === 'Escape' ||
    e.target === this ||
    e.target.closest('button[data-modal-close]');

  if (isCloseAction) {
    this.classList.remove('is-open');
    modalCloseOptions.onRemoveListener();
    scrollOptions.enableScroll();
  }
  if (e.code === 'Tab') {
    return false;
  }
}

export const scrollOptions = {
  fixBlocks: document.querySelectorAll('[data-fix-block]'),
  paddingOffset: `${window.innerWidth - document.body.offsetWidth}px`,

  disableScroll() {
    document.body.style.overflow = 'hidden';
    this.fixBlocks.forEach(el => {
      disableBodyScroll(el);
      return el.style.paddingRight - this.paddingOffset;
    });
    document.body.style.paddingRight = this.paddingOffset;
  },

  enableScroll() {
    document.body.style.overflow = 'visible';
    this.fixBlocks.forEach(el => {
      el.style.paddingRight = '0px';
    });
    document.body.style.paddingRight = '0px';
    clearAllBodyScrollLocks();
  },
};
