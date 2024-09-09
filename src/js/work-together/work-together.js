import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { markup } from './work-together-markup';
import { getRequest } from './work-together-api';
import { closeOptions } from './modal-handler';

const form = document.querySelector('.work-form');
const backdrop = document.querySelector('.backdrop');

form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault();

  const { email, comments } = e.currentTarget.elements;

  const formData = {
    email: email.value,
    comment: comments.value,
  };

  try {
    const { title, message } = await getRequest(formData);

    backdrop.classList.add('is-open');
    backdrop.innerHTML = markup(title, message);

    closeOptions.onBind(backdrop);
    closeOptions.onBackdropCLick();

    form.reset();
  } catch (error) {
    iziToast.error({
      message: `❌ Oh no, something went wrong`,
      position: 'topRight',
    });
  }
}
