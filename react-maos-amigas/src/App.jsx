import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import QuemSomos from './components/QuemSomos';
import Contribua from './components/Contribua';
import Servicos from './components/Servicos';
import Parceiros from './components/Parceiros';
import Contato from './components/Contato';
import PerguntasFrequentes from './components/PerguntasFrequentes';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
    return (
        <div>
            <Header />
            <Home />
            <QuemSomos />
            <Contribua />
            <Servicos />
            <Parceiros />
            <Contato />
            <PerguntasFrequentes />
            <Footer />
        </div>
    );
}

export default App;