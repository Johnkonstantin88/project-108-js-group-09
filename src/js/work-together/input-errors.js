function inputErrorText(name, span) {
  name.classList.add('form-input-error');
  span.classList.add('is-open');
  setTimeout(() => {
    name.classList.remove('form-input-error');
    span.classList.remove('is-open');
  }, 5000);
}

function clearInputError(email, comment, emailSpan, commentSpan) {
  email.classList.remove('form-input-error');
  comment.classList.remove('form-input-error');
  emailSpan.classList.remove('is-open');
  commentSpan.classList.remove('is-open');
}

export { inputErrorText, clearInputError };
