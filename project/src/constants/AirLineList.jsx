import { React, Fragment } from "react";
import style from "../styles/AirLineList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
const AirLineList = ({ airdata }) => {
  console.log(airdata);
  return (
    <Fragment>
      <div className={style.AirListBox}>
        <div className={style.backBox}>
          <h3>출발정보</h3>
          <div className={style.airportInfoBox}>
            <div className={style.firstbox}></div>
            <div className={style.middlebox}></div>
            <div className={style.lastbox}></div>
          </div>
          <div className={style.BarcodeBox}></div>
        </div>
      </div>
    </Fragment>
  );
};
export default AirLineList;
