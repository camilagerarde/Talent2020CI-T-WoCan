import React from 'react';

const CardLink = (props) => {
    return (
        <div>
            <img src={props.src} className={props.className} alt={props.alt}></img>
            <p className={props.classTitle}>{props.title}</p>
            <p className={props.classlink}><a href={props.href}>Ir para o curso</a></p>
        </div>
    );
}
export default CardLink;