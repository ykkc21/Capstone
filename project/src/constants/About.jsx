import { React, Fragment } from "react";
import style from "../styles/About.module.css";
import TestImage from "../assets/img/view1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <Fragment>
      <div className={style.MainAboutBox}>
        <div className={style.container}>
          <div className={style.AboutBox}>
            <h1>About Us</h1>
            <div className={style.ImageBox}>
              <img src={TestImage} alt="about Image" />
              <FontAwesomeIcon className={style.Logo} icon={faYoutube} />
            </div>
            <div className={style.AboutText}>
              국내 및 국제 관광객을 위한 포괄적인 관광 정보 제공을 목적으로
              합니다. 이 웹 어플리케이션은 사용자들이 세계 각지의 관광지 정보와
              위치를 손쉽게 찾을 수 있도록 돕는 것에 더불어, 관광지와 관련된
              YouTube 영상을 통해 그 장소의 느낌을 미리 경험할 수 있는 기회를
              제공합니다.
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
