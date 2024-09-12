import { btnUp } from "./btn-up";

btnUp.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });