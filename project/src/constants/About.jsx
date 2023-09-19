import React, { Fragment } from "react";
import style from "../styles/About.module.css";
const About = () => {
  return (
    <Fragment>
      <div className={style.AboutBox}>
        <div className={style.AboutContainer}>
          <h1>Where do you want to go? </h1>
          <div className={style.ItemBox}>
            <div className={`${style.Item}`}></div>
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
