import { React, Fragment } from "react";
import style from "../styles/AirLineList.module.css";

const AirLineList = ({ airdata }) => {
  console.log(airdata);
  return (
    <Fragment>
      <div className={style.AirListBox}>
        <div className={style.backBox}></div>
      </div>
    </Fragment>
  );
};
export default AirLineList;
