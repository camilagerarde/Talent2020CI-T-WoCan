import React from "react";
import "../../assets/scss/Main.scss";

const ButtonFirstSteps = (props) => {
  return (
    <button onClick={props.onClick} className="btn">
      {props.children}
    </button>
  );
};
export default ButtonFirstSteps;
