import { React, Fragment } from "react";
import style from "../styles/HotelView.module.css";

const HotelView = () => {
  return (
    <Fragment>
      <div className={style.HotelViewBox}>
        <div className={style.container}>
          <div className={style.TextBox}>
            <h1>Hotel</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HotelView;
