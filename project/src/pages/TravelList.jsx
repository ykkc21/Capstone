import { React, Fragment } from "react";
import style from "../styles/TraveList.module.css";
import Header from "../components/header";
import TravelSideBar from "../constants/TravelSideBar";
import TravelMap from "../constants/TravelMap";
const TravelList = ({ userData }) => {
  return (
    <Fragment>
      <Header userData={userData} />
      <div className={style.warp}>
        <TravelSideBar />
        <TravelMap />
      </div>
    </Fragment>
  );
};
export default TravelList;
