import React from 'react';

const CardLink = (props) => {
    return (
        <section className='content-course'>
            <img src={props.src} className='images' alt={props.alt}></img>
            <div>
                <p className={props.classTitle}>{props.title}</p>
                <p className='txt-link'><a href={props.href}>Ir para o curso</a></p>
            </div>
        </section>
    );
}
export default CardLink;