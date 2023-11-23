import React from 'react';
import Projetos from './Components/Projetos';
import Home from './Components/Home';
import Contato from './Components/Contato';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EstiloGlobal } from './styles/home.js';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <EstiloGlobal />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
