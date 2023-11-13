import { React, Fragment } from "react";
import style from "../styles/HotelPlate.module.css";
import HotelList from "./HotelList";

const HotelPlate = ({ SelectData }) => {
  return (
    <Fragment>
      <div className={style.HotelPlateBox}>
        {SelectData.map((item, idx) => {
          return <HotelList key={idx} data={item} />;
        })}
      </div>
    </Fragment>
  );
};

export default HotelPlate;
