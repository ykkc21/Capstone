import { React, Fragment } from "react";
import style from "../styles/AirlineAbout.module.css";
import KoreaAir from "../assets/img/Airline/KoreaAir3.png";
const AirlineAbout = () => {
  return (
    <Fragment>
      <div className={style.AirlineAboutBox}>
        <h1>Airline About</h1>
        <ul>
          <li>
            <div className={style.AirHover}>
              <div className={style.HoverBtn}>
                <p>Check</p>
              </div>
            </div>
          </li>
          <li>
            <div className={style.AirHover}>
              <div className={style.HoverBtn}>
                <p>Check</p>
              </div>
            </div>
          </li>
          <li>
            <div className={style.AirHover}>
              <div className={style.HoverBtn}>
                <p>Check</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
export default AirlineAbout;
