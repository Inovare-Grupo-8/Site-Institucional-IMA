// Seleção de elementos do DOM
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const btnEntrar = document.querySelector("#btn-entrar");
const btnCadastrar = document.querySelector("#btn-cadastrar");
const senhaLogin = document.getElementById("input_senha_login");
const emailLogin = document.getElementById("input_email_login");
const nomeCadastro = document.querySelector('input[placeholder="NOME"]');
const emailCadastro = document.querySelector('input[placeholder="EMAIL"]');
const senhaCadastro = document.querySelector('input[placeholder="SENHA"]');
const cpfCadastro = document.querySelector('input[placeholder="CPF"]');
const dataNascimentoCadastro = document.querySelector('input[placeholder="DATA DE NASCIMENTO"]');

// Alternar entre modos de login e cadastro
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Função para validar o email
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

// Validação e login
btnEntrar.addEventListener("click", () => {
  if (validar()) {
    const emailLoginValue = emailLogin.value;
    const senhaLoginValue = senhaLogin.value;

    // Validação com o JSON Server
    fetch('http://localhost:3000/usuarios', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => response.json())
      .then(usuarios => {
        if (Array.isArray(usuarios)) {
          // Log dos usuários existentes (apenas nome e email)
          const usuariosFiltrados = usuarios.map(user => ({
            nome: user.nome,
            email: user.email
          }));
          console.log("Usuários existentes:", usuariosFiltrados);

          const usuario = usuarios.find(user => user.email === emailLoginValue && user.senha === senhaLoginValue);

          if (usuario) {
            console.log("Login realizado com sucesso");
            window.location.href = "../index.html";
            alert("Login bem-sucedido!");
          } else {
            console.log("Login falhou");
            alert("Email ou senha incorretos.");
          }
        } else {
          console.log("Resposta inesperada do servidor", usuarios);
          alert("Erro ao tentar realizar o login.");
        }
      })
      .catch(error => {
        console.log("Erro ao verificar login", error);
        alert("Erro ao tentar realizar o login.");
      });
  } else {
    console.log("Login falhou");
    alert("Por favor, insira um email válido.");
  }
});

// Cadastro de novo usuário
btnCadastrar.addEventListener("click", () => {
  const nome = nomeCadastro.value;
  const email = emailCadastro.value;
  const senha = senhaCadastro.value;
  const cpf = cpfCadastro.value;
  const dataNascimento = dataNascimentoCadastro.value;

  const novoUsuario = {
    nome: nome,
    email: email,
    senha: senha,
    cpf: cpf,
    dataNascimento: dataNascimento
  };

  // Envia os dados do novo usuário para o servidor
  fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(novoUsuario)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Usuário cadastrado com sucesso:", data);
      alert("Usuário cadastrado com sucesso!");
      container.classList.remove("sign-up-mode"); // Volta para a tela de login
    })
    .catch(error => {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao tentar cadastrar usuário.");
    });
});