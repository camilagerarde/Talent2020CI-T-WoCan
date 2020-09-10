import React from "react";
import "../../assets/scss/Main.scss";


const CardInic = (props) => {

    return(
        <article className="basic-structure">
            <p className="forTitle">{props.title}</p>
            <p>{props.type}</p>
            <p>{props.when}</p>

            <div id="imageForCard" className="forAlign" >
                <img src={props.image} alt="Imagem Ilustrativa" class="cover-card"></img>
            </div>            

            <p id="resume">{props.resume}</p>
        </article>
    )
} 

export default CardInic;