import React from 'react';
import logo from '../../image/logo.png';

function Home() {
  return (
    <header className="header">
      <figure className="logo">
        <img className="header_logo" src={logo} alt="Imagem do logo" />
      </figure>
      <div>
        <p>
          Uma iniciativa para informar e direcionar quem deseja entrar no ramo
          da Tecnologia, e não sabe por onde começar.
        </p>
      </div>
      <div></div>
    </header>
  );
}

export default Home;
