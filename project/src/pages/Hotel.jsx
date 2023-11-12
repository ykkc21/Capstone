import { React, Fragment } from "react";
import style from "../styles/Hotel.module.css";
import Header from "../components/header";
import HotelView from "../constants/HotelView";
import HotelSideBar from "../constants/HotelSideBar";
import HotelPlate from "../constants/HotelPlate";

const Hotel = ({ userData }) => {
  return (
    <Fragment>
      <Header userData={userData} />
      <HotelView />
      <HotelSideBar />
      <HotelPlate />
    </Fragment>
  );
};
export default Hotel;
