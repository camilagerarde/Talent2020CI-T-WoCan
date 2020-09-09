import React from 'react';
import { useHistory } from 'react-router-dom';
import CardArea from '../../components/CardArea';
import FirstSteps from '../../components/ButtonFirstSteps';
import '../../assets/scss/Main.scss';

const Start = () => {
  const history = useHistory();

  return (
    <main className='main'>
      <section className='title'>
        <h1>primeiros passos</h1>
        <FirstSteps
          children='lógica de programação'
          url='https://www.iped.com.br/cursos-gratis/programacao-e-desenvolvimento/curso-rapido/introducao-logica-programacao'
        />
        <FirstSteps
          children='algoritmos'
          url='https://canaldoensino.com.br/blog/curso-online-gratuito-de-algoritmo'
        />
        <FirstSteps
          children='Back-end ou Front-end?'
          url='https://tableless.github.io/iniciantes/manual/obasico/o-que-front-back.html'
        />
      </section>
      <section class='cards'>
        <CardArea
          area='front'
          onClick={() => history.push('/frontend')}
          title='front-end'
        />{' '}
        <CardArea
          area='back'
          onClick={() => history.push('/backend')}
          title='Back-end'
        />{' '}
        <CardArea
          area='devops'
          onClick={() => history.push('/devops')}
          title='DevOps'
        />
      </section>
    </main>
  );
};

export default Start;
