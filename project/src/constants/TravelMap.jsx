import { React, Fragment } from "react";
import ShowUpList from "./ShowUpList";
import style from "../styles/TravelMap.module.css";
import WorldMap from "../assets/img/world2.png";
const TravelMap = () => {
  return (
    <Fragment>
      <div className={style.MainMap}>
        <img src={WorldMap} alt="worldmap" />
      </div>
      <ShowUpList />
    </Fragment>
  );
};
export default TravelMap;
