import React, { useState, useEffect } from 'react';
import "../../assets/scss/Main.scss";

const Menu = props => {

    const [status, setStatus] = useState(false);
    
    const onClickMenu = () => {
        setStatus(!status)
        console.log(status)
    }
    
    
    return (
        <>
            <div id="menu-bar" onClick={onClickMenu} className={ status ? "changeMenuBar" : ""}>
                
                    <div id="menu" className={ status ? "change" : ""} >
                        <div id="bar1" className="bar"></div>
                        <div id="bar2" className="bar"></div>
                        <div id="bar3" className="bar"></div>
                    </div>
                    <ul id="nav" className={ status ? "change" : "nav"}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Start</a></li>
                        <li><a href="#">Front End</a></li>
                        <li><a href="#">Back End</a></li>
                        <li><a href="#">DevOps</a></li>
                    </ul>                
                
            </div>
            
            
            
        </>
    )
}


export default Menu;