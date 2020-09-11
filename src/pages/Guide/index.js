import React from 'react';
import Header from '../../components/Header';
import Construction from '../../assets/image/construction.svg';
import '../../assets/scss/Main.scss';

const Guide = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <div>
          <h2>Logo teremos novidades!!</h2>
          <figure className='construction'>
            <img
              className='construction-img'
              src={Construction}
              alt='Página em construção'
            />
          </figure>
        </div>
        <section className='information-guide'>
          <h3>
            Não você não caiu no limbo, em breve teremos uma página fresquinha
            pra você consultar nosso Guia de profissões e saber pra qual área
            direcionar o seu talento!
          </h3>
        </section>
      </main>
    </>
  );
};

export default Guide;
