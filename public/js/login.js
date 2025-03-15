const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const btnEntrar = document.querySelector("#btn-entrar")
const btnCadastrar = document.querySelector("#btn-cadastrar")

const senhaLogin = document.getElementById("input_senha_login")
const emailLogin = document.getElementById("input_email_login")
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function validar() {
  const emailValue = emailLogin.value;
  const atSymbol = emailValue.indexOf("@");
  const dotSymbol = emailValue.lastIndexOf(".");

  if (atSymbol < 1 || dotSymbol < atSymbol + 2 || dotSymbol + 2 >= emailValue.length) {
      console.log("Email inválido");
      alert("Por favor, insira um email válido.");
      return false;
  } else {
      console.log("Email válido.");
      return true;
  }
}

// Evento de clique para validar o login (fora da função validar())
btnEntrar.addEventListener("click", () => {
  if (validar()) {
      console.log("Login realizado");
  } else {
      console.log("Login falhou");
  }
});