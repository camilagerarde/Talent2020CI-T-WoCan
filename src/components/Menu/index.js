import React, { useState } from 'react';
import '../../assets/scss/Main.scss';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  const [status, setStatus] = useState(false);
  const onClickMenu = () => {
    setStatus(!status);
  };

    return (
        <>
            <div id="menu-bar" onClick={onClickMenu} className={ status ? "changeMenuBar" : ""}>
                
              <div id="menu" className={ status ? "change" : ""} >
                <div id="bar1" className="bar"></div>
                <div id="bar2" className="bar"></div>
                <div id="bar3" className="bar"></div>
              </div>
              <ul id="nav" className={ status ? "change" : "nav"}>
                <Link to='/' className="forLinkReact"><li>Home</li></Link>
                <Link to='start' className="forLinkReact"><li>Trajetória</li></Link>
                <Link to='guide' className="forLinkReact"><li>Guia de profissões</li></Link>
                <Link to='monitoring' className="forLinkReact"><li>Mentoria</li></Link>
                <Link to='initiatives' className="forLinkReact"><li>Iniciativas</li></Link>  
              </ul>  
                            
            </div>          
        </>
    )
}

export default Menu;
