import { React, Fragment } from "react";
import style from "../styles/HotelPlate.module.css";

const HotelPlate = ({ SelectData }) => {
  console.log(SelectData);
  return (
    <Fragment>
      <div className={style.HotelPlateBox}></div>
    </Fragment>
  );
};

export default HotelPlate;
