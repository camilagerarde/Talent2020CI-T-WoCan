import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom';
import '../../assets/scss/Main.scss';
import img404 from '../../assets/image/img404.svg'

function NotFound() {
  return (
    <main>
      <Link className='btn-back' title="Voltar para Home" to="/">
          VOLTAR
        </Link>
      <section className='content-pg-error'>
        <h1>Ops!</h1>
        <h2>Página não encontrada </h2>
        <img className='img-404' src={img404} alt='imagem 404'></img>
      </section>
    </main>
  );
}

export default NotFound;
