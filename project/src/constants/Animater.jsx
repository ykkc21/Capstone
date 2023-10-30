import { React, Fragment, useState } from "react";
import style from "../styles/Animater.module.css";
import airplane from "../assets/img/airplane.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
const Animater = () => {
  const Test = () => {
    const Airplane = document.getElementById("Airplane");
    Airplane.style.position = "absolute";
    Airplane.style.top = "40%";
    Airplane.style.left = "50%";
    Airplane.style.transform = "translate(-50%, -50%) scale(1.3)";
    Airplane.style.transition = "1s";
  };
  return (
    <Fragment>
      <div className={style.BackGround}>
        <div id="Airplane" className={style.airplane}>
          <img id="airplane" src={airplane} alt="img" />
        </div>
        <h2>Getting Started with Travel</h2>
        <div className={style.IconBox}>
          <FontAwesomeIcon
            onClick={Test}
            id="first"
            className={style.arrow}
            icon={faAnglesDown}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Animater;
