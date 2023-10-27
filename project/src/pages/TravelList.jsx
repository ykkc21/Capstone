import { React, Fragment, useEffect, useState } from "react";
import style from "../styles/TraveList.module.css";
import Header from "../components/header";
import TravelSideBar from "../constants/TravelSideBar";
import TravelMap from "../constants/TravelMap";
const TravelList = ({ userData }) => {
  const [animater, setAnimater] = useState(true);
  useEffect(() => {}, []);
  return (
    <Fragment>
      {animater ? (
        <div>test</div>
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
