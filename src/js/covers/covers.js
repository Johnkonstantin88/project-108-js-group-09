const coversList = document.querySelectorAll('li');

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
});

const coversSection = document.querySelector('.covers-section');
observer.observe(coversSection);

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Якщо секція видима, додати стиль
      coversList.forEach(item => {
        item.style.animationDuration = '5s';
      });
    } else {
      coversList.forEach(item => {
        item.style.animationDuration = '0s';
      });
    }
  });
}
