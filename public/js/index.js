document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

