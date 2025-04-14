document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
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
  window.location.href = "../public/views/login-cadastro.html";
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

function removeEscuro() {
  let menuMobile = document.querySelector(".mobile-menu");
  let content = document.querySelector("main");

  menuMobile.classList.remove("open");
  document.querySelector(".icon").src = "assets/imgs/menu.svg";
  content.classList.remove("blurred-background");
}
