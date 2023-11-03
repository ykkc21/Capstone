import { React, Fragment } from "react";
import style from "../styles/About.module.css";
import TestImage from "../assets/img/view1.png";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              inventore eveniet explicabo suscipit debitis optio sed eum dolorum
              neque fugiat, ducimus nam in sunt animi accusamus nemo incidunt
              iure expedita?
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
