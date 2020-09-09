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
    <div className='card' onClick={props.onClick}>
      <h2>{props.title}</h2>
      <figure className='illustration'>
        <img src={areas[props.area]} alt={props.alt}></img>
      </figure>
    </div>
  );
};
export default CardArea;
