import React from 'react';
import '../../assets/scss/Main.scss';
import Header from '../../components/Header';
import MentImage from '../../assets/image/mentoring.svg';

const Mentoring = () => {

  return (
    <>
      <Header />
      <section className="content-pg-mentoring">
       
        <figure>
          <img className="img-mentoring" src={MentImage} alt="Imagem ilustrativa para seção de Mentoria"></img>
          <figcaption>Ilustração de pair programming</figcaption>
        </figure>
        <p className="forTextMent">Essa página está em processo de desenvolvimento, <span className="forSpan">aguarde</span> para ter mais essa oportunidade de <span className="forSpan">crescer na carreira de tecnologia!</span></p>
      </section>
    </>
  )
}

export default Mentoring;
