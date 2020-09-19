import React from 'react';
import '../../assets/scss/Main.scss';

const CardInic = (props) => {
  const redirect = (link) => {
    window.open(link, '_blank');
  };

  return (
    <article className='basic-structure' onClick={() => redirect(props.link)}>
      <p className='forTitle'>{props.title}</p>
      <p>{props.type}</p>
      <p>{props.when}</p>
      <div id='imageForCard' className='forAlign'>
        <img
          src={props.image}
          alt='Imagem Ilustrativa'
          className='cover-card'
        ></img>
      </div>
      <p id='resume' className='resumeCardInic'>
        {props.resume}
      </p>
    </article>
  );
};

export default CardInic;
