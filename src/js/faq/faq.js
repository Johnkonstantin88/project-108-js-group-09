document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const faqContent = button.nextElementSibling;
    const isOpen = faqContent.style.display === 'block';

    faqContent.style.display = isOpen ? 'none' : 'block';

    button.classList.toggle('rotated');
  });
});
