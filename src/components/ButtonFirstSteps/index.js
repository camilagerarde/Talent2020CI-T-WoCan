import React from 'react';
import '../../assets/scss/Main.scss';

const ButtonFirstSteps = (props) => {
  return (
    <button className='btn'>
      <a
        href={props.url}
        target='_blank'
        rel='noopener noreferrer'
        title={props.title}
      >
        {' '}
        {props.children}{' '}
      </a>
    </button>
  );
};
export default ButtonFirstSteps;
