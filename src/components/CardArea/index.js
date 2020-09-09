import React from "react";
import Front from "../../assets/image/front.svg";
import Back from "../../assets/image/back.svg";
import Devops from "../../assets/image/devops.svg";

const areas = {
  back: Back,
  front: Front,
  devops: Devops,
};

const CardArea = (props) => {
  return (
    <div onClick={props.onClick}>
      <h2>{props.title}</h2>
      <figure>
        <img src={areas[props.area]} alt={props.alt}></img>
      </figure>
    </div>
  );
};
export default CardArea;
