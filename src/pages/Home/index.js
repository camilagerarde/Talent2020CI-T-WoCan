import React from 'react';
import Button from '../../components/button/Button.js';
import logo from '../../image/logo.png';
import '../../pattern.css';


function Home() {
  return (
    <main>
      <header className="header">
        <figure className="logo">
          <img className="header_logo" src={logo} alt="Imagem do logo" />
        </figure>
        <div className="information">
          <p>
            Uma iniciativa para informar e direcionar quem deseja entrar no ramo
            da Tecnologia, e não sabe por onde começar.
          </p>
        </div>
      </header>
      <body>
        <div className="nav">
          <Button name="Iniciar trajetória" />
          <Button name="Guia de profissões" />
          <Button name="Mentoria" />
          <Button name="Iniciativas" />
        </div>
        <div className="about">
          <p>Sobre</p>
          <p>
            Quer estudar né meu bem, mas não sabe por onde começar? Então se
            joga na nossa aplicação! Em “Iniciar trajetória” voce pode escolher
            por qual roteiro de estudo quer começar! Está confuso ainda em qual
            área você se encaixa, da uma olhada nesse “Guia de Profissoes” que a
            iniciativa Ada.vc preparou! Em “Mentoria” temos um fórum de dúvidas
            com pessoas ja inseridas no mercado pra ajudar vocês a prosseguir
            com os estudos. Por fim, temos as “Iniciativas” com informações
            sobre diversos programas e o que está rolando de eventos. Agora só
            pegar o café e bons estudos!
          </p>
        </div>
      </body>
      <footer>
        <p>
          Feito com{' '}
          <span role="img" aria-label="heart">
            🖤
          </span>{' '}
          e{' '}
          <span role="img" aria-label="strong">
            💪
          </span>{' '}
          por Amanda, Camila, Carol e Nick!
        </p>
      </footer>
    </main>
  );
}

export default Home;
