import React from 'react';

const PerguntasFrequentes = () => {
    return (
        <div className="perguntas-frequentes">
            <h1>Perguntas Frequentes</h1>
            <div className="container-faq">
                <div className="faq-container">
                    <div className="faq-header">
                        <h2>Como posso me tornar um voluntário?</h2>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">
                            <span>Quais são os requisitos para ser voluntário?</span>
                        </div>
                        <div className="faq-answer">
                            <p>Os requisitos variam de acordo com a função, mas geralmente buscamos pessoas com vontade de ajudar e que compartilhem nossos valores.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">
                            <span>Como posso fazer uma doação?</span>
                        </div>
                        <div className="faq-answer">
                            <p>Você pode fazer uma doação através do nosso site na seção "Contribua".</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">
                            <span>Quais serviços vocês oferecem?</span>
                        </div>
                        <div className="faq-answer">
                            <p>Oferecemos uma variedade de serviços, incluindo assistência jurídica, contábil, e de saúde. Confira a seção "Serviços" para mais detalhes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerguntasFrequentes;