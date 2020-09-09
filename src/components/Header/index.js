import React from 'react';
import logoname from '../../assets/image/logo2.png';
import "../../assets/scss/Main.scss";
import Menu from '../Menu';

const Header = props => {
    
    return (
        <header className="forHeader">
            <Menu/>
            <img className="forLogo" src={logoname} alt="Logo WoCan"></img>
        </header>
    )
}


export default Header;