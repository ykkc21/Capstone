import { React, Fragment, useState } from "react";
import style from "../styles/AirLinePlate.module.css";
import AirLineList from "../constants/AirLineList";

const AirLinePlate = ({ DataList }) => {
  const test = () => {
    if (DataList.length == 0 || DataList.length < 0) {
      return <h1>해당 데이터가 존자하지 않습니다.</h1>;
    } else {
      DataList.map((item, idx) => {
        return <AirLineList key={idx} airdata={item} />;
      });
    }
  };

  test();
  return (
    <Fragment>
      <div className={style.AirLinePlateBox}>
        <div className={style.container}></div>
      </div>
    </Fragment>
  );
};

export default AirLinePlate;
