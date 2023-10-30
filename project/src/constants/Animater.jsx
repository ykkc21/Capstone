import { React, Fragment, useState } from "react";
import style from "../styles/Animater.module.css";
import airplane from "../assets/img/airplane.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
const Animater = ({ ShowList }) => {
  return (
    <Fragment>
      <div id="Background" className={style.BackGround}>
        <div id="Airplane" className={style.airplane}>
          <img id="airplane" src={airplane} alt="img" />
        </div>
        <h2>
          Importing data!
          <br /> Please wait for a second!
        </h2>
        <div className={style.IconBox}>
          <FontAwesomeIcon
            onClick={ShowList}
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
