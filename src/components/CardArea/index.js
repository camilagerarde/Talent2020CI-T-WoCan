import React from 'react';
import Front from '../../assets/image/front.svg';
import Back from '../../assets/image/back.svg';
import Devops from '../../assets/image/devops.svg';
import '../../assets/scss/Main.scss';

const areas = {
  back: Back,
  front: Front,
  devops: Devops,
};

const CardArea = (props) => {
  return (
    <div className='card-area' onClick={props.onClick}>
      <h2 className='title-area'>{props.title}</h2>
      <figure className='illustration-area'>
        <img className='img-area' src={areas[props.area]} alt={props.alt}></img>
      </figure>
    </div>
  );
};
export default CardArea;
