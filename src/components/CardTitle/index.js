import React from 'react';
import Front from '../../assets/image/front.svg';
import Back from '../../assets/image/back.svg';
import Devops from '../../assets/image/devops.svg';
import '../../assets/scss/Main.scss';

const imgs = {
  back: Back,
  front: Front,
  devops: Devops,
};

const CardTitle = (props) => {
  return (
    <div className='card-title'>
      <figure className='illustration-title'>
        <img className='img-title' src={imgs[props.img]} alt={props.alt}></img>
      </figure>
      <h1 className='h1-title'>{props.title}</h1>
    </div>
  );
};
export default CardTitle;
