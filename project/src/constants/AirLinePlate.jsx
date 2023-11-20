import { React, Fragment, useState } from "react";
import style from "../styles/AirLinePlate.module.css";
import AirLineList from "../constants/AirLineList";

const AirLinePlate = ({ DataList }) => {
  console.log(DataList);
  return (
    <Fragment>
      <div className={style.AirLinePlateBox}></div>
    </Fragment>
  );
};

export default AirLinePlate;
