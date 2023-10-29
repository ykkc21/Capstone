import { React, Fragment, useState } from "react";
import style from "../styles/TraveList.module.css";
import Header from "../components/header";
import TravelSideBar from "../constants/TravelSideBar";
import TravelMap from "../constants/TravelMap";
import Animater from "../constants/Animater";
const TravelList = ({ userData }) => {
  const [animater, setAnimater] = useState(true);
  return (
    <Fragment>
      {animater ? (
        <Animater />
      ) : (
        <>
          <Header userData={userData} />
          <div className={style.warp}>
            <TravelSideBar />
            <TravelMap />
          </div>
        </>
      )}
    </Fragment>
  );
};
export default TravelList;
