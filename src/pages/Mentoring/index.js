import React from 'react';
import Header from '../../components/Header';
import CardTitle from '../../components/CardTitle';
import MentImage from '../../assets/image/mentoring.svg';
import '../../assets/scss/Main.scss';

const Mentoring = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <CardTitle title='Mentorias' img='front' alt='Página de mentoria' />
        <div>
          <h2>Logo teremos novidades!!</h2>
          <figure className='construction'>
            <img
              className='img-mentoring'
              src={MentImage}
              alt='Imagem ilustrativa para seção de Mentoria'
            />
          </figure>
        </div>
        <section className='information-guide'>
          <h3>
            Essa página está em processo de desenvolvimento,{' '}
            <span className='forSpan'>aguarde</span> para ter mais essa
            oportunidade de{' '}
            <span className='forSpan'>crescer na carreira de tecnologia!</span>
          </h3>
        </section>
      </main>
    </>
  );
};

export default Mentoring;
