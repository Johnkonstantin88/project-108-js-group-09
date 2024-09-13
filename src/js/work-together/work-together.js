import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { markup } from './work-together-markup';
import { getRequest } from './work-together-api';
import { modalCloseOptions, scrollOptions } from './modal-handler';
import { clearInputError, inputErrorText } from './input-errors';

const form = document.querySelector('.work-form');
const backdrop = document.querySelector('.backdrop');
const emailSpan = document.querySelector('#email-span');
const commentSpan = document.querySelector('#comment-span');

form.addEventListener('submit', onSubmit);

const checkInputsValidation =( email, comments)=>{
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const regExp = new RegExp(emailPattern);
  const validEmail = regExp.test(email.value);
  const validComment = comments.value.length !== 0;

  let isValidFields = true;
  if (!validEmail) {
    isValidFields = false;
    inputErrorText(email, emailSpan);
  }

  if (!validComment) {
    isValidFields = false;
    inputErrorText(comments, commentSpan);
  }
  return isValidFields;
}; 

async function onSubmit(e) {
  e.preventDefault();
  const  { email, comments } = e.currentTarget.elements;
  if( !checkInputsValidation(email, comments) ){
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
    clearInputError(email, comments, emailSpan, commentSpan);
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
