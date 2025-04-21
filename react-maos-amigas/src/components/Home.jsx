import React from 'react';
import '../styles/index.css'; 


const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home-text">
                <h1>Juntos por um Mundo Justo e Igualitário</h1>
                <p>
                    Acreditamos que a transformação acontece quando nos unimos por um
                    futuro justo, com oportunidades para todos alcançarem seu potencial.
                    Juntos, podemos construir uma sociedade mais equitativa e inclusiva.
                </p>
                <button className="botao-voluntario" aria-label="Saiba Mais">
                    SAIBA MAIS
                </button>
            </div>
        </section>
    );
};

export default Home;