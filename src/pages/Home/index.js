import React from 'react';
import Button from '../../components/Button/Button.js';
import logo from '../../assets/image/logo.png';
import { useHistory } from 'react-router-dom';
import '../../assets/scss/Main.scss';

const Home = () => {
  const history = useHistory();

  return (
    <div className='container'>
      <div className='box'>
        <header className='header'>
          <figure className='logo'>
            <img className='header_logo' src={logo} alt='Imagem do logo' />
          </figure>
          <p className='information'>
            Uma iniciativa para informar e direcionar quem deseja entrar no ramo
            da Tecnologia, e não sabe por onde começar.
          </p>
        </header>
        <main className='button'>
          <Button
            name='Iniciar trajetória'
            onClick={() => history.push('/start')}
          />
          <Button
            name='Guia de profissões'
            onClick={() => history.push('/guide')}
          />
          <Button name='Mentoria' onClick={() => history.push('/mentoring')} />
          <Button
            name='Iniciativas'
            onClick={() => history.push('/initiatives')}
          />
        </main>
      </div>
      <div className='box2'>
        <section className='about'>
          <p className='aboutName'><span className="for-span-home">Sobre</span></p>
          <p className='aboutText recuo'>
            Quer estudar né meu bem, mas <span className="for-span-home">não sabe por onde começar?</span> Então se
            joga na nossa aplicação! Em “Iniciar trajetória” você pode escolher por qual roteiro de estudo quer começar e tem acesso aos <span className="for-span-home">Primeiros Passos essenciais</span> para qualquer área. Temos também as “Iniciativas” com informações sobre diversas oportunidades atuais e relevantes e o que está rolando de eventos.
          </p>
          <p><span className="for-span-home aboutText">Agora só pegar o café e bons estudos!</span></p>
        </section>
        <footer className='footer'>
          <p>
            Feito com{' '}
            <span role='img' aria-label='heart'>
              🖤
            </span>{' '}
            e{' '}
            <span role='img' aria-label='strong'>
              💪
            </span>{' '}
            por Camila, Carol, Nick e Zaine!
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
