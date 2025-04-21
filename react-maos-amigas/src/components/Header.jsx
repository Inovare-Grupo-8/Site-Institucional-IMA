import React from 'react';
import '../styles/index.css'; 

const Header = () => {
    const voltarHome = () => {
        
        window.scrollTo(0, 0);
    };

    const login = () => {
    
        alert('Login functionality to be implemented');
    };

    return (
        <header>
            <img src="/assets/imgs/Logo.svg" onClick={voltarHome} alt="Logo Mãos Amigas" />
            <nav>
                <div className="menu">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#quem-somos">QUEM SOMOS</a></li>
                        <li><a href="#voluntarios">VOLUNTÁRIOS</a></li>
                        <li><a href="#servicos">SERVIÇOS</a></li>
                        <li><a href="#contribua">CONTRIBUA</a></li>
                        <li><a href="#contato">CONTATO</a></li>
                    </ul>
                </div>
                <button className="botao-doar" aria-label="Doar Agora">DOAR AGORA</button>
                <button className="botao-login" onClick={login} aria-label="Login">LOGIN</button>
            </nav>
        </header>
    );
};

export default Header;