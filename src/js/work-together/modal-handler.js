export const closeOptions = {
  handler: null,

  onBind(instance) {
    this.handler = onClose.bind(instance);
    document.addEventListener('keydown', this.handler);
  },

  onRemoveListener() {
    document.removeEventListener('keydown', this.handler);
    document.removeEventListener('click', this.handler);
  },

  onBackdropCLick() {
    document.addEventListener('click', this.handler);
  },
};

export function onClose(e) {
  const isCloseAction =
    e.code === 'Escape' ||
    e.target === this ||
    e.target.closest('button[data-modal-close]');

  if (isCloseAction) {
    this.classList.remove('is-open');
    closeOptions.onRemoveListener();
  }
}
