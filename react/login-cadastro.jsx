import React, { useState, useRef } from "react";
import "./login-cadastro.css";
export default function LoginCadastro() {
  const [modoCadastro, setModoCadastro] = useState(false);
  const [erro, setErro] = useState("");

  const nomeCadastro = useRef();
  const emailCadastro = useRef();
  const senhaCadastro = useRef();
  const cpfCadastro = useRef();
  const dataNascimentoCadastro = useRef();
  const emailLogin = useRef();
  const senhaLogin = useRef();

  function exibirErro(mensagem) {
    setErro(mensagem);
  }

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? null : "Email inválido.";
  }

  function validarSenha(senha) {
    return senha.length >= 6 ? null : "A senha deve ter pelo menos 6 caracteres.";
  }

  function validarCPF(cpf) {
    return cpf.length === 11 ? null : "CPF inválido.";
  }

  function validarData(data) {
    return data ? null : "Informe a data de nascimento.";
  }

  function validarCadastro() {
    const email = emailCadastro.current.value;
    const senha = senhaCadastro.current.value;
    const cpf = cpfCadastro.current.value;
    const data = dataNascimentoCadastro.current.value;

    return (
      validarEmail(email) ||
      validarSenha(senha) ||
      validarCPF(cpf) ||
      validarData(data)
    );
  }

  function handleLogin(e) {
    e.preventDefault();
    const email = emailLogin.current.value;
    const senha = senhaLogin.current.value;

    if (validarEmail(email)) return exibirErro("Email inválido.");

    fetch("http://localhost:3000/usuarios")
      .then((res) => res.json())
      .then((usuarios) => {
        const user = usuarios.find((u) => u.email === email && u.senha === senha);
        if (user) {
          alert("Login bem-sucedido!");
          window.location.href = "../index.html";
        } else {
          exibirErro("Email ou senha incorretos.");
        }
      })
      .catch(() => exibirErro("Erro ao tentar realizar o login."));
  }

  function handleCadastro(e) {
    e.preventDefault();

    const erroValidacao = validarCadastro();
    if (erroValidacao) return exibirErro(erroValidacao);

    const novoUsuario = {
      nome: nomeCadastro.current.value,
      email: emailCadastro.current.value,
      senha: senhaCadastro.current.value,
      cpf: cpfCadastro.current.value,
      dataNascimento: dataNascimentoCadastro.current.value,
    };

    fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoUsuario),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        setModoCadastro(false);
      })
      .catch(() => exibirErro("Erro ao tentar cadastrar usuário."));
  }

  return (
    <div className={`container ${modoCadastro ? "sign-up-mode" : ""}`}>
      {erro && <div className="modalErro">{erro}</div>}
      <div className="form-container">
        <form onSubmit={modoCadastro ? handleCadastro : handleLogin}>
          {modoCadastro ? (
            <>
              <input ref={nomeCadastro} placeholder="Nome" required />
              <input ref={emailCadastro} placeholder="Email" required />
              <input ref={senhaCadastro} type="password" placeholder="Senha" required />
              <input ref={cpfCadastro} placeholder="CPF" required />
              <input ref={dataNascimentoCadastro} type="date" required />
              <button type="submit">Cadastrar</button>
            </>
          ) : (
            <>
              <input ref={emailLogin} placeholder="Email" required />
              <input ref={senhaLogin} type="password" placeholder="Senha" required />
              <button type="submit">Entrar</button>
            </>
          )}
        </form>
        <button onClick={() => setModoCadastro(!modoCadastro)}>
          {modoCadastro ? "Já tem conta? Entrar" : "Não tem conta? Cadastrar"}
        </button>
      </div>
    </div>
  );
}