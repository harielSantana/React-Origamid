import React from 'react';
import './App.css';
import foto from './img/7ff.jpg';
import logo from './img/Miau.png';

const App = () => {
  return (
    <div>
      <p className="fundo"></p>
      <img src={foto} alt="Cachorro" />
      <img src={logo} alt="logo" />
    </div>
  );
};

export default App;
