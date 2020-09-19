import React from 'react';
import '../../assets/scss/Main.scss';

const CardLink = (props) => {
  const redirectCardLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section
      className='content-course'
      onClick={() => redirectCardLink(props.href)}
    >
      <img src={props.src} className='images' alt={props.alt}></img>
      <div className='for-title-cardlink'>
        <p className='for-title-cardlink'>{props.title}</p>
      </div>
    </section>
  );
};
export default CardLink;
