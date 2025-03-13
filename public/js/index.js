document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function voltarHome(){
    window.location.href = "index.html";
}
