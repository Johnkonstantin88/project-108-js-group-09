import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { markup } from './work-together-markup';
import { getRequest } from './work-together-api';
import { modalCloseOptions, scrollOptions } from './modal-handler';
import { btnUp } from './btn-up';

const form = document.querySelector('.work-form');
const backdrop = document.querySelector('.backdrop');

form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault();

  const { email, comments } = e.currentTarget.elements;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const regExp = new RegExp(emailPattern);
  const validateEmail = regExp.test(email.value);
  const validateComment = comments.value.length === 0;

  if (!validateEmail) {
    showError('❌ Email must be in format "clients@gmail.com".');

    return;
  }

  if (validateComment) {
    showError('❌ Please, enter something in "comments" field.');

    return;
  }

  const formData = {
    email: email.value,
    comment: comments.value,
  };

  try {
    const { title, message } = await getRequest(formData);

    backdrop.classList.add('is-open');
    scrollOptions.disableScroll();
    backdrop.innerHTML = markup(title, message);

    modalCloseOptions.onBind(backdrop);
    modalCloseOptions.onBackdropCLick();

    form.reset();
  } catch (error) {
    showError(`❌ ${error.response.data.message}`);
  }
}

function showError(message) {
  iziToast.error({
    message: `${message}`,
    position: 'topRight',
  });
}


btnUp.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
