import React from 'react';
import { Link } from 'react-router-dom';
import logoname from '../../assets/image/logo2.png';
import '../../assets/scss/Main.scss';
import Menu from '../Menu';

const Header = (props) => {
  return (
    <header className='forHeader'>
      <Menu />
      <Link to='/'>
        <img className='forLogo' src={logoname} alt='Logo WoCan'></img>
      </Link>
    </header>
  );
};

export default Header;
