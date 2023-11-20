import { React, Fragment, useState } from "react";
import style from "../styles/AirLinePlate.module.css";
import AirLineList from "../constants/AirLineList";

const AirLinePlate = ({ DataList }) => {
  console.log(DataList);

  return (
    <Fragment>
      <div className={style.AirLinePlateBox}>
        <div className={style.container}>
          {DataList.length == 0 || DataList.length < 0 ? (
            <h1 className={style.title}>검색한 데이터가 없습니다.</h1>
          ) : (
            DataList.map((item, idx) => {
              return <AirLineList key={idx} airdata={item} />;
            })
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default AirLinePlate;
