document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    // Fecha todas as outras perguntas
    document.querySelectorAll(".faq-question").forEach((q) => {
      if (q !== item) {
        q.classList.remove("active");
        q.setAttribute("aria-expanded", "false");
      }
    });

    // Alterna o estado da pergunta clicada
    const isActive = item.classList.toggle("active");
    item.setAttribute("aria-expanded", isActive ? "true" : "false");
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


function voltarHome() {
  window.location.href = "index.html";
}

function login() {
  window.location.href = "http://10.18.33.92:3030/login";
}

function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  let content = document.querySelector("main");

  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/imgs/menu.svg";
    content.classList.remove("blurred-background");
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "assets/imgs/close.svg";
    content.classList.add("blurred-background");
  }
}

// =============================
// Galeria (slider simples)
// =============================
document.addEventListener("DOMContentLoaded", function () {
  const imgEl = document.getElementById("galeria-img");
  const prevBtn = document.querySelector(".galeria-prev");
  const nextBtn = document.querySelector(".galeria-next");
  const toggleBtn = document.getElementById("galeria-toggle");

  if (!imgEl || !prevBtn || !nextBtn || !toggleBtn) return;

  const imagens = [
    "assets/imgs/galeria/acao1.jpg",
    "assets/imgs/galeria/acao2.jpg",
    "assets/imgs/galeria/acao3.jpg",
    "assets/imgs/galeria/acao4.jpg",
    "assets/imgs/galeria/acao5.jpg"
  ];

  let index = 0;
  let playing = true;
  let timer = null;

  const render = () => {
    imgEl.src = imagens[index];
  };

  const start = () => {
    stop();
    timer = setInterval(() => next(), 4000);
    toggleBtn.textContent = "❚❚";
    playing = true;
  };

  const stop = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    toggleBtn.textContent = "▶";
    playing = false;
  };

  const next = () => {
    index = (index + 1) % imagens.length;
    render();
  };

  const prev = () => {
    index = (index - 1 + imagens.length) % imagens.length;
    render();
  };

  prevBtn.addEventListener("click", () => {
    prev();
    if (playing) start();
  });

  nextBtn.addEventListener("click", () => {
    next();
    if (playing) start();
  });

  toggleBtn.addEventListener("click", () => {
    if (playing) stop(); else start();
  });

  // Inicializa
  render();
  start();
});