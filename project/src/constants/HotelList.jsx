import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import style from "../styles/HotelList.module.css";

const HotelList = ({ data }) => {
  console.log(data);
  return (
    <Fragment>
      <Link to={data.h_url}>
        <div className={style.HotelListItem}>
          <img src={data.h_image} alt="listImage" />
          <div className={style.HotelTitleBox}>
            <h1>{data.h_name}</h1>
          </div>
          <h2>{data.h_roomtype}</h2>
          <h4>{data.h_area}</h4>
        </div>
      </Link>
    </Fragment>
  );
};
export default HotelList;
