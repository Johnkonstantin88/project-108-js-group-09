export const closeOptions = {
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
    closeOptions.onRemoveListener();
  }
}
