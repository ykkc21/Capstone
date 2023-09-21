import { React, Fragment } from "react";
import style from "../styles/SubAbout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const SubAbout = () => {
  return (
    <Fragment>
      <div className={style.SubAbout}>
        <div className={style.mainbox}>
          <h1></h1>
          <div className={`${style.black}`}></div>
        </div>
        <div className={style.mainbox}>
          <div className={`${style.funbox} ${style.map}`}>
            <div className={style.fun_img}>
              <FontAwesomeIcon
                className={style.fun_img}
                icon={faLocationCrosshairs}
              />
            </div>
            <p>Location Information</p>
            <h1>원하는 관광지의 위치를 알 수 있습니다.</h1>
          </div>
          <div className={`${style.funbox} ${style.search}`}>
            <div className={style.fun_img}>
              <FontAwesomeIcon
                className={style.fun_img}
                icon={faMagnifyingGlass}
              />
            </div>
            <p>Location Information</p>
            <h1>원하는 관광지의 위치를 알 수 있습니다.</h1>
          </div>
          <div className={`${style.funbox} ${style.user}`}>
            <div className={style.fun_img}>
              <FontAwesomeIcon className={style.fun_img} icon={faCircleUser} />
            </div>
            <p>Location Information</p>
            <h1>원하는 관광지의 위치를 알 수 있습니다.</h1>
          </div>
          <div className={`${style.white}`}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default SubAbout;
