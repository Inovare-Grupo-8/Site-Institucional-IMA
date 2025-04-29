// Seleção de elementos do DOM
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const btnEntrar = document.querySelector("#btn-entrar");
const btnCadastrar = document.querySelector("#btn-cadastrar");
const senhaLogin = document.getElementById("senhaLogin");
const emailLogin = document.getElementById("input_email_login");
const nomeCadastro = document.getElementById("name_signup");
const emailCadastro = document.getElementById("email_signup");
const senhaCadastro = document.getElementById("password_signup");
const cpfCadastro = document.getElementById("cpf_signup");
const dataNascimentoCadastro = document.getElementById("birth_signup");

// Elementos do modal
const modalErro = document.getElementById('modalErro');
const mensagemErro = document.getElementById('mensagemErro');
const fecharModal = document.querySelector('.fechar');

// Elementos do modal
const modalErro = document.getElementById('modalErro');
const mensagemErro = document.getElementById('mensagemErro');
const fecharModal = document.querySelector('.fechar');

// Alternar entre modos de login e cadastro
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

// Funções de validação
function validarEmailCadastro(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        return 'Por favor, insira um email válido.';
    }
    return null;
}

function validarSenhaCadastro(senha) {
    if (senha.length < 6) {
        return 'A senha deve ter pelo menos 6 caracteres.';
    }
    return null;
}

function validarCPF(cpf) {
  //Verifica se tem 11 dígitos
    if (cpf.length !== 11) {
        return 'Por favor, insira um CPF válido.';
    }
    return null;
}

function validarDataNascimento(dataNascimento) {
    if (!dataNascimento) {
        return 'Por favor, insira a data de nascimento.';
    }
    return null;
}

function validarCadastro() {
    const email = emailCadastro.value;
    const senha = senhaCadastro.value;
    const cpf = cpfCadastro.value;
    const dataNascimento = dataNascimentoCadastro.value;

    let erro = validarEmailCadastro(email);
    if (erro) {
        exibirModalErro(erro);
        return false;
    }

    erro = validarSenhaCadastro(senha);
    if (erro) {
        exibirModalErro(erro);
        return false;
    }

    erro = validarCPF(cpf);
    if (erro) {
        exibirModalErro(erro);
        return false;
    }

    erro = validarDataNascimento(dataNascimento);
    if (erro) {
        exibirModalErro(erro);
        return false;
    }

    return true;
}

// Função para exibir o modal de erro
function exibirModalErro(mensagem) {
    mensagemErro.textContent = mensagem;
    modalErro.style.display = 'block';
}

// Fechar o modal
fecharModal.addEventListener('click', () => {
    modalErro.style.display = 'none';
});

// Validação e login
btnEntrar.addEventListener("click", () => {
    const emailValue = emailLogin.value;
    const atSymbol = emailValue.indexOf("@");
    const dotSymbol = emailValue.lastIndexOf(".");

    if (atSymbol < 1 || dotSymbol < atSymbol + 2 || dotSymbol + 2 >= emailValue.length) {
        exibirModalErro("Por favor, insira um email válido.");
        return;
    }

    const emailLoginValue = emailLogin.value;
    const senhaLoginValue = senhaLogin.value;

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
                const usuario = usuarios.find(user => user.email === emailLoginValue && user.senha === senhaLoginValue);

                if (usuario) {
                    console.log("Login realizado com sucesso");
                  
                    window.location.href = "../index.html";

                    alert("Login bem-sucedido!");
                } else {
                    exibirModalErro("Email ou senha incorretos.");
                }
            } else {
                exibirModalErro("Erro ao tentar realizar o login.");
            }
        })
        .catch(error => {
            exibirModalErro("Erro ao tentar realizar o login.");
        });
});

// Cadastro de novo usuário
btnCadastrar.addEventListener("click", (event) => {
    if (!validarCadastro()) {
        event.preventDefault();
        return;
    }

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
      
            container.classList.remove("sign-up-mode");
        })
        .catch(error => {
            exibirModalErro("Erro ao tentar cadastrar usuário.");
        });
});



// Máscara para o campo de CPF
document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, ""); 
    value = value.replace(/^(\d{3})(\d)/, "$1.$2"); 
    value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3"); 
    value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4"); 
    e.target.value = value;
  });


  // Ver senha
  document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordInput = document.getElementById("password_signup");
    let icon = this;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});
