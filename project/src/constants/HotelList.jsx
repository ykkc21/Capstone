import { React, Fragment } from "react";
import style from "../styles/HotelList.module.css";

const HotelList = ({ data }) => {
  console.log(data);
  return (
    <Fragment>
      <div className={style.HotelListItem}></div>
    </Fragment>
  );
};
export default HotelList;
