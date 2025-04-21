import React from 'react';

const Servicos = () => {
    return (
        <section className="servicos">
            <div className="servicos-text">
                <h1>SERVIÇOS</h1>
                <p>
                    Abaixo, você encontra os serviços que oferecemos para ajudar você.
                    Nosso compromisso é transformar o mundo em um lugar justo e igualitário.
                </p>
            </div>

            <div className="icons">
                <div className="icon-contabil">
                    <img src="/assets/imgs/Accounting.svg" alt="Contábil" />
                    <h1>CONTÁBIL</h1>
                    <p>
                        Assessoria contábil completa, desde a regularização de CPF e CNPJ
                        até planejamento tributário e aposentadoria.
                    </p>
                </div>

                <div className="icon-fisioterapia">
                    <img src="/assets/imgs/Physical Therapy.svg" alt="Fisioterapia" />
                    <h1>FISIOTERAPIA</h1>
                    <p>
                        Assessoria contábil completa, desde a regularização de CPF e CNPJ
                        até planejamento tributário e aposentadoria.
                    </p>
                </div>

                <div className="icon-juridica">
                    <img src="/assets/imgs/Scales.svg" alt="Jurídica" />
                    <h1>JURÍDICA</h1>
                    <p>
                        Consulta e orientação jurídica nas áreas cível, consumidor, família
                        e sucessões, trabalhista.
                    </p>
                </div>

                <div className="icon-psicologia">
                    <img src="/assets/imgs/Brain.svg" alt="Psicologia" />
                    <h1>PSICOLOGIA</h1>
                    <p>
                        Consulta e orientação psicológica para diversas questões emocionais.
                    </p>
                </div>

                <div className="icon-nutricao">
                    <img src="/assets/imgs/Healthy Eating.svg" alt="Nutrição" />
                    <h1>NUTRIÇÃO</h1>
                    <p>Avaliação e orientação nutricional.</p>
                </div>

                <div className="icon-quiropraxia">
                    <img src="/assets/imgs/Posture.svg" alt="Quiropraxia" />
                    <h1>QUIROPRAXIA</h1>
                    <p>
                        Avaliação e orientação personalizadas para o tratamento de dores,
                        utilizando técnicas como quiropraxia e liberação miofascial.
                    </p>
                </div>

                <div className="icon-pediatria">
                    <img src="/assets/imgs/Infant Massage.svg" alt="Pediatria" />
                    <h1>PEDIATRIA</h1>
                    <p>Consulta ambulatorial, para orientação e dúvidas.</p>
                </div>

                <div className="icon-financeiro">
                    <img src="/assets/imgs/Stack of Coins.svg" alt="Financeiro" />
                    <h1>FINANCEIRO</h1>
                    <p>
                        Orientação na Organização, Endividamento, Planejamento financeiro,
                        Investimentos, Controles e gestão, Avaliação situação financeira.
                    </p>
                </div>
            </div>

            <button className="agendar-button" aria-label="Agendar Agora">
                AGENDAR AGORA
            </button>
        </section>
    );
};

export default Servicos;