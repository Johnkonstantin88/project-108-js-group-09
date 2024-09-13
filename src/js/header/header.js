const btnList = document.querySelector('.header-menu-js');
const menuList = document.querySelector('.header-list');
const btnBurger = document.querySelector('.header-burger-button');
const btnClose = document.querySelector('.mobile-menu-close');
const mobile = document.querySelector('.mobile-bg');
const btnMobile = document.querySelector('.mobile-anchor');
const mobileListItem = document.querySelectorAll('.mobile-list-item');
const headerListItem = document.querySelectorAll('.header-list-item');
const anchorLinks = document.querySelectorAll('.header-nav-link');
// Desktop/Tablet
btnList.addEventListener('click', () => {
  menuList.classList.toggle('open-js');
  headerListItem.forEach(listItem => {
    listItem.addEventListener('click', () => {
      menuList.classList.remove('open-js');
    });
  });
});

// MobileMenu
btnBurger.addEventListener('click', () => {
  mobile.classList.add('is-open');
});

const mobileMenuClose = () => {
  mobile.classList.remove('is-open');
};

btnClose.addEventListener('click', mobileMenuClose);
mobileListItem.forEach(listItem => {
  listItem.addEventListener('click', mobileMenuClose);
});
btnMobile.addEventListener('click', mobileMenuClose);
