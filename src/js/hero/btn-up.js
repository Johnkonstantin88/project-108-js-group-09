export const btnUp = document.querySelector('#btn-up');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
    btnUp.style.display = 'block';
  } else {
    btnUp.style.display = 'none';
  }
}

btnUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});