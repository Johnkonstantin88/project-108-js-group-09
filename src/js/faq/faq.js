// document.querySelectorAll('.toggle-btn').forEach(button => {
//   button.addEventListener('click', () => {
//     const faqContent = button.nextElementSibling;
//     const isOpen = faqContent.style.display === 'block';

//     faqContent.style.display = isOpen ? 'none' : 'block';

//     // button.textContent = isOpen ? '▼' : '▲';
//   });
// });

document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const faqContent = button.nextElementSibling;
    const isOpen = faqContent.style.display === 'block';

    faqContent.style.display = isOpen ? 'none' : 'block';

    // Переключение класса для вращения
    button.classList.toggle('rotated');
  });
});
