import React from 'react';

const QuemSomos = () => {
    return (
        <section id="quem-somos" className="quem-somos">
            <div className="quem-somos-text">
                <h1>QUEM SOMOS</h1>
                <p>
                    Somos um grupo de voluntários dedicados a orientar pessoas sem acesso
                    à informação e/ou condição financeira sobre seus direitos e serviços
                    públicos, ajudando-as a encontrar soluções para suas questões.
                </p>
            </div>
            <div className="quem-somos-container">
                <div className="images-quem-somos">
                    <img className="enfermeira" src="../assets/imgs/post-4 1.svg" alt="Enfermeira" />
                    <img className="mulher-mascara" src="../assets/imgs/post-3 1.svg" alt="Mulher com máscara" />
                    <img className="menino-cabelo" src="../assets/imgs/image 127.svg" alt="Menino segurando cabelo" />
                </div>
                <div className="logo-quem-somos">
                    <img className="logo" src="../assets/imgs/image 125.svg" alt="Logo Mãos Amigas" />
                </div>
            </div>
        </section>
    );
};

export default QuemSomos;