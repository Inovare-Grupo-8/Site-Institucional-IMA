// filepath: c:\Users\sambl\OneDrive\Desktop\Projeto de Extensão\Front-End\react-maos-amigas\src\components\Contato.jsx
import React from 'react';
import '../styles/index.css'; 


const Contato = () => {
  return (
    <section id="contato">
      <h1>Entre em Contato</h1>
      <p>Preencha o formulário abaixo para entrar em contato conosco.</p>
      <form>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contato;