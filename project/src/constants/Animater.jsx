import { React, Fragment, useState } from "react";
import style from "../styles/Animater.module.css";
import airplane from "../assets/img/airplane.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
const Animater = () => {
  const [name, setName] = useState("");
  const Test = () => {
    setName("showainmater");
    // const dom = document.getElementById("airplane");
    // const a = dom.classList.add("showainmater");
    // console.log(a);
  };
  console.log(name);
  return (
    <Fragment>
      <div className={style.BackGround}>
        <div className={style.airplane}>
          <img id="airplane" src={airplane} alt="img" />
        </div>
        <h2>Getting Started with Travel</h2>
        <div onClick={Test} className={style.IconBox}>
          <FontAwesomeIcon
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
