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

const multi = document.getElementById("multi-no-click");
multi.addEventListener("click", function () {
  let imagemMulti = document.getElementById("multi-img");
  let textMulti = document.getElementById("multi-text");

  if( imagemMulti.style.display === "none") {
    imagemMulti.style.display = "block";
    textMulti.style.display = "none";
  }else{
    imagemMulti.style.display = "none";
    textMulti.style.display = "block";
  }
});

const valor = document.getElementById("vs-no-click");
valor.addEventListener("click", function () {
  let imagemValor = document.getElementById("valor-img");
  let textValor = document.getElementById("valor-text");

  if( imagemValor.style.display === "none") {
    imagemValor.style.display = "block";
    textValor.style.display = "none";
  }else{
    imagemValor.style.display = "none";
    textValor.style.display = "block";
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