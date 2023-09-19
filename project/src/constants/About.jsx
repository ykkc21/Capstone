import React, { Fragment } from "react";
import style from "../styles/About.module.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <Fragment>
      <div className={style.AboutBox}>
        <div className={style.AboutContainer}>
          <h1>Where do you want to go? </h1>
          <div className={style.ItemBox}>
            <div className={`${style.Item}`}>
              <div className={style.Item_TextBox}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className={style.Item_icon}
                ></FontAwesomeIcon>
                <span className={style.text}></span>
              </div>
            </div>
            <div className={`${style.Item}`}></div>
            <div className={`${style.Item}`}></div>
            <div className={`${style.Item}`}></div>
            <div className={`${style.Item}`}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
