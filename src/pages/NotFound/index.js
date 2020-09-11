import React from 'react';
import '../../assets/scss/Main.scss';
import Header from '../../components/Header';
import img404 from '../../assets/image/img404.svg';

const NotFound = () => {
  return (
    <>
      <Header />
      <main className='ops'>
        <div>
          <h2>Ops! Parece que essa página não existe!</h2>
          <figure className='construction'>
            <img className='img-404' src={img404} alt='Pagina não encontrada' />
          </figure>
        </div>
      </main>
    </>
  );
};

export default NotFound;
