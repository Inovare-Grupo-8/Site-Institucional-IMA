import React from 'react';
import '../styles/index.css';
const Footer = () => {
    return (
        <footer>
            <div className="rodape">
                <div className="rodape_conteudo">
                    <img src="../assets/imgs/logo_rodape.svg" alt="Logo Mãos Amigas" className="logo_rodape" />
                    <div className="colunas">
                        <div className="coluna1">
                            <p>Sobre Nós</p>
                            <a href="#quem-somos">Quem Somos</a>
                            <a href="#contato">Contato</a>
                        </div>
                        <div className="coluna2">
                            <p>Serviços</p>
                            <a href="#servicos">Nossos Serviços</a>
                            <a href="#contribua">Contribua</a>
                        </div>
                        <div className="coluna3">
                            <p>Redes Sociais</p>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="rodape-contribuir">
                    <p>© 2023 Mãos Amigas. Todos os direitos reservados.</p>
                    <button>Doar Agora</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;