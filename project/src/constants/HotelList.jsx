import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import style from "../styles/HotelList.module.css";

const HotelList = ({ data }) => {
  console.log(data);
  return (
    <Fragment>
      <Link to={data.h_url}>
        <div className={style.HotelListItem}>
          <div className={style.BackImage}>
            <img src={data.h_image} alt="listImage" />
          </div>
        </div>
      </Link>
    </Fragment>
  );
};
export default HotelList;
